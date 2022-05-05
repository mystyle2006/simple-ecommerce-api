import { PickType } from '@nestjs/swagger';

import { OrderEntity } from '../entities/order.entity';

export class CreateOrderDto extends PickType(OrderEntity, [
  'store_id',
  'customer_id',
  'status',
  'price',
  'products',
] as const) {}
