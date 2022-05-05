import { PickType } from '@nestjs/swagger';

import { AttributeEntity } from '../entities/attribute.entity';
import { GetAttributeValueDto } from './get-attribute-value.dto';

export class CreateCustomDataDto extends PickType(AttributeEntity, [
  'store_id',
]) {
  modelName: string;
  data: GetAttributeValueDto[];
}
