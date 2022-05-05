import { PickType } from '@nestjs/swagger';

import { AttributeValueEntity } from '../../eva/entities/attribute-value.entity';
import { ProductEntity } from '../entities/product.entity';

export class UpdateProductDto extends PickType(ProductEntity, [
  'categories',
  'price',
] as const) {
  name?: string;
  customData: AttributeValueEntity[];
}
