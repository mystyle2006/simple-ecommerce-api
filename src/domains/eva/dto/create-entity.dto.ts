import { PickType } from '@nestjs/swagger';

import { EntityEntity } from '../entities/entity.entity';

export class CreateEntityDto extends PickType(EntityEntity, [
  'store_id',
  'model_id',
]) {}
