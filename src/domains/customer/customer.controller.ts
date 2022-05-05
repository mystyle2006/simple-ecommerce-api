import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('고객')
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
        customData: [
          {
            attribute_id: 0,
            value: '',
          },
        ],
      },
    },
  })
  @ApiOperation({
    summary: '회원가입',
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({
    summary: '나의 정보 가져오기',
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(+id);
  }

  @ApiBody({
    schema: {
      example: {
        name: '',
        customData: [
          {
            id: 1,
            attribute_id: 1,
            entity_id: 2,
            value: '',
          },
        ],
      },
    },
  })
  @ApiOperation({
    summary: '나의 정보 수정하기',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateCustomerDto) {
    return this.customerService.update(+id, input);
  }
}
