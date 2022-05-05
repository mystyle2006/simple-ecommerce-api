import { IntersectionType, PickType } from '@nestjs/swagger';

import { AttributeEntity } from '../entities/attribute.entity';
import { AttributeValueEntity } from '../entities/attribute-value.entity';

export class UpdateCustomDataDto extends IntersectionType(
  PickType(AttributeEntity, ['store_id'] as const),
  PickType(AttributeValueEntity, ['entity_id'] as const),
) {
  modelName: string;
  data: AttributeValueEntity[];
}
