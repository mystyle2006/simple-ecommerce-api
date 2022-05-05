import { PickType } from '@nestjs/swagger';

import { ProductEntity } from '../entities/product.entity';

export class CreateProductDto extends PickType(ProductEntity, [
  'name',
  'price',
  'store_id',
  'categories',
]) {}
