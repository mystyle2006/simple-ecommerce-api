import { Injectable, InternalServerErrorException } from '@nestjs/common';

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

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
