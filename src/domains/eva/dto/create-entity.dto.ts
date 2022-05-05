import { PickType } from '@nestjs/swagger';

import { AttributeEntity } from '../entities/attribute.entity';
import {EntityEntity} from "../entities/entity.entity";

export class CreateEntityDto extends PickType(EntityEntity, [
  'store_id',
  'model_id',
]) {}
