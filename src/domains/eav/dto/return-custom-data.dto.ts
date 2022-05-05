import { PickType } from '@nestjs/swagger';

import { AttributeValueEntity } from '../entities/attribute-value.entity';

export class ReturnCustomDataDto extends PickType(AttributeValueEntity, [
  'entity_id',
]) {
  result: AttributeValueEntity[];
}
