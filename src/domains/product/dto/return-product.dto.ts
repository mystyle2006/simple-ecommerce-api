import { PickType } from '@nestjs/swagger';

import { AttributeValueEntity } from '../../eva/entities/attribute-value.entity';
import { ProductEntity } from '../entities/product.entity';

export class ReturnProductDto extends PickType(ProductEntity, [
  'name',
  'price',
  'entity_id',
  'store_id',
  'categories',
]) {
  customData: AttributeValueEntity[];
}
