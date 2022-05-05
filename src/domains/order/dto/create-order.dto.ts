import { PickType } from '@nestjs/swagger';

import { GetAttributeValueDto } from '../../eav/dto/get-attribute-value.dto';
import { OrderEntity } from '../entities/order.entity';

export class CreateOrderDto extends PickType(OrderEntity, [
  'store_id',
  'customer_id',
  'status',
  'price',
  'products',
] as const) {
  customData: GetAttributeValueDto[];
}
