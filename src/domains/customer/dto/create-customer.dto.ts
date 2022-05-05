import { PickType } from '@nestjs/swagger';

import { CustomerEntity } from '../entities/customer.entity';

export class CreateCustomerDto extends PickType(CustomerEntity, [
  'name',
  'password',
  'email',
  'store_id',
] as const) {}
