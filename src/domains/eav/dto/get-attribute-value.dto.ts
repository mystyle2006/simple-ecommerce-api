import { PickType } from '@nestjs/swagger';

import { AttributeValueEntity } from '../entities/attribute-value.entity';

export class GetAttributeValueDto extends PickType(AttributeValueEntity, [
  'attribute_id',
  'value',
]) {}
