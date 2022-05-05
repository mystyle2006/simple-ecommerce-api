import { PickType } from '@nestjs/swagger';

import { GetAttributeValueDto } from '../../eav/dto/get-attribute-value.dto';
import { CustomerEntity } from '../entities/customer.entity';

export class CreateCustomerDto extends PickType(CustomerEntity, [
  'name',
  'password',
  'email',
  'store_id',
] as const) {
  customData: GetAttributeValueDto[];
}
