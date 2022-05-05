import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AttributeTypeEnum } from '../../enums/attribute-type.enum';
import { CreateEavDto } from './dto/create-eav.dto';
import { UpdateEavDto } from './dto/update-eav.dto';
import { EavService } from './eav.service';

@ApiTags('사용자 정의 필드')
@Controller('eav')
export class EavController {
  constructor(private readonly evaService: EavService) {}

  @ApiOperation({
    summary: '사용자 정의 필드 추가하기',
  })
  @ApiBody({
    schema: {
      example: {
        store_id: 0,
        model_id: 0,
        name: '',
        type: AttributeTypeEnum.STRING,
      },
    },
  })
  @Post()
  create(@Body() input: CreateEavDto) {
    return this.evaService.create(input);
  }

  @ApiOperation({
    summary: '상점 별 사용자 정의 모델 목록 가져오기',
  })
  @Get()
  findModels() {
    return this.evaService.findModels();
  }

  @ApiOperation({
    summary: '상점 별 사용자 정의 필드 목록 가져오기',
  })
  @Get(':store_id')
  findEVA(@Param('store_id') store_id: number) {
    return this.evaService.findEVA(+store_id);
  }

  @ApiOperation({
    summary: '상점 별 특정 모델의 사용자 정의 필드 목록 가져오기',
  })
  @Get(':model_id/:store_id')
  findEVAByModel(
    @Param('model_id') model_id: number,
    @Param('store_id') store_id: number,
  ) {
    return this.evaService.findEVAByModel(+model_id, +store_id);
  }

  @ApiOperation({
    summary: '사용자 정의 필드 수정하기',
  })
  @ApiBody({
    schema: {
      example: {
        name: '',
        type: AttributeTypeEnum.STRING,
      },
    },
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() input: UpdateEavDto) {
    return this.evaService.update(+id, input);
  }

  @ApiOperation({
    summary: '사용자 정의 필드 삭제하기',
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.evaService.remove(+id);
  }
}
