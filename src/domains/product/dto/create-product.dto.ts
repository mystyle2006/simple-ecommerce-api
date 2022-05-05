import { PickType } from '@nestjs/swagger';

import { GetAttributeValueDto } from '../../eav/dto/get-attribute-value.dto';
import { ProductEntity } from '../entities/product.entity';

export class CreateProductDto extends PickType(ProductEntity, [
  'name',
  'price',
  'store_id',
  'categories',
]) {
  customData: GetAttributeValueDto[];
}
