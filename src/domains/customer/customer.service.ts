import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

import { ModelNameEnum } from '../../enums/model-name.enum';
import { CommonService } from '../../utils/common.service';
import { EvaService } from '../eva/eva.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ReturnCustomerDto } from './dto/return-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class CustomerService extends CommonService(CustomerEntity) {
  constructor(private readonly evaService: EvaService) {
    super();
  }

  async create({
    customData,
    ...leftover
  }: CreateCustomerDto): Promise<ReturnCustomerDto> {
    try {
      const { id: customer_id } = await this.repository.save(
        leftover as CustomerEntity,
      );
      const customer = await this.repository.findOne(customer_id);

      const { entity_id, result: customDataResult } =
        await this.evaService.createCustomData({
          data: customData,
          store_id: leftover.store_id,
          modelName: ModelNameEnum.PRODUCT,
        });

      if (entity_id) {
        await this.repository.update(customer_id, { entity_id });
      }

      return {
        ...customer,
        entity_id,
        customData: customDataResult,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number): Promise<CustomerEntity> {
    return this.repository.findOne(id);
  }

  async update(
    id: number,
    { customData, ...leftover }: UpdateCustomerDto,
  ): Promise<UpdateResult> {
    const product = await this.repository.findOne(id);
    const { entity_id } = await this.evaService.updateCustomData({
      data: customData,
      store_id: product.store_id,
      entity_id: product.entity_id,
      modelName: ModelNameEnum.CUSTOMER,
    });

    return this.repository.update(id, {
      ...leftover,
      entity_id,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
