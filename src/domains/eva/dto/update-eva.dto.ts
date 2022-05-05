import { PickType } from '@nestjs/swagger';

import { AttributeEntity } from '../entities/attribute.entity';

export class UpdateEvaDto extends PickType(AttributeEntity, ['name']) {}
