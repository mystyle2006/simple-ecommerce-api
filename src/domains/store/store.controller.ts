import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

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

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.storeService.findById(+id);
  }

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
