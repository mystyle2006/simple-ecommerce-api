import { PartialType } from '@nestjs/swagger';

import { CreateEvaDto } from './create-eva.dto';

export class UpdateEvaDto extends PartialType(CreateEvaDto) {}
