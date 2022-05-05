import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

import { CommonService } from '../../utils/common.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class CustomerService extends CommonService(CustomerEntity) {
  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    try {
      const customer = await this.repository.save(
        createCustomerDto as CustomerEntity,
      );
      return this.repository.findOne(customer.id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number): Promise<CustomerEntity> {
    return this.repository.findOne(id);
  }

  async update(id: number, input: UpdateCustomerDto): Promise<UpdateResult> {
    return this.repository.update(id, input);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
