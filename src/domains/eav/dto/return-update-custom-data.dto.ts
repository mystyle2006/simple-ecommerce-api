import { PickType } from '@nestjs/swagger';

import { AttributeValueEntity } from '../entities/attribute-value.entity';

export class ReturnUpdateCustomDataDto extends PickType(AttributeValueEntity, [
  'entity_id',
]) {}
