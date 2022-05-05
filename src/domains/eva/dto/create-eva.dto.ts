import { PickType } from '@nestjs/swagger';

import { AttributeEntity } from '../entities/attribute.entity';

export class CreateEvaDto extends PickType(AttributeEntity, [
  'store_id',
  'model_id',
  'type',
  'name',
]) {}
