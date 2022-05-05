import { PickType } from '@nestjs/swagger';

import { AttributeValueEntity } from '../../eav/entities/attribute-value.entity';
import { CustomerEntity } from '../entities/customer.entity';

export class ReturnCustomerDto extends PickType(CustomerEntity, [
  'name',
  'entity_id',
  'store_id',
  'email',
] as const) {
  customData: AttributeValueEntity[];
}
