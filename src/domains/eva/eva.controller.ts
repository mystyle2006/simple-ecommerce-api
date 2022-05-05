import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateEvaDto } from './dto/create-eva.dto';
import { UpdateEvaDto } from './dto/update-eva.dto';
import { EvaService } from './eva.service';

@Controller('eva')
export class EvaController {
  constructor(private readonly evaService: EvaService) {}

  @Post()
  create(@Body() createEvaDto: CreateEvaDto) {
    return this.evaService.create(createEvaDto);
  }

  @Get()
  findAll() {
    return this.evaService.findAll();
  }

  @Get(':store_id')
  findEVA(@Param('store_id') store_id: number) {
    return this.evaService.findEVA(+store_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaDto: UpdateEvaDto) {
    return this.evaService.update(+id, updateEvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaService.remove(+id);
  }
}
