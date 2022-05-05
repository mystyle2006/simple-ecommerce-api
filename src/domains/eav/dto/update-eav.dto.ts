import { PickType } from '@nestjs/swagger';

import { AttributeEntity } from '../entities/attribute.entity';

export class UpdateEavDto extends PickType(AttributeEntity, ['name']) {}
