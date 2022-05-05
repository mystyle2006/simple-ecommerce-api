import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({
    summary: '주문 생성하기',
  })
  @ApiBody({
    schema: {
      example: {
        store_id: '',
        customer_id: '',
        price: 0,
        products: [],
      },
    },
  })
  @Post()
  create(@Body() input: CreateOrderDto) {
    return this.orderService.create(input);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @ApiOperation({
    summary: '주문 취소하기',
  })
  @Patch('/cancel/:id')
  update(@Param('id') id: string) {
    return this.orderService.update(+id);
  }
}