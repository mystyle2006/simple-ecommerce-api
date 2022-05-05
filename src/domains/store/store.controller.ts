import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreService } from './store.service';

@ApiTags('상점')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @ApiOperation({
    summary: '상점 생성하기',
  })
  @ApiBody({
    schema: {
      example: {
        name: '',
      },
    },
  })
  @Post()
  create(@Body() input: CreateStoreDto) {
    return this.storeService.create(input);
  }

  @ApiOperation({
    summary: '상점 가져오기',
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.storeService.findById(+id);
  }

  @ApiOperation({
    summary: '상점 수정하기',
  })
  @ApiBody({
    schema: {
      example: {
        name: '',
      },
    },
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(+id, updateStoreDto);
  }
}
