import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiBody({
    schema: {
      example: {
        name: '',
        store_id: 0,
        email: '',
        password: '',
      },
    },
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: '나의 정보 가져오기',
  })
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    schema: {
      example: {
        name: '',
      },
    },
  })
  @ApiOperation({
    summary: '나의 정보 수정하기',
  })
  update(@Param('id') id: string, @Body() input: UpdateCustomerDto) {
    return this.customerService.update(+id, input);
  }
}
