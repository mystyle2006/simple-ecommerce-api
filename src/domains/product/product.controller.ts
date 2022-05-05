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

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({
    summary: '상품 생성하기',
  })
  @ApiBody({
    schema: {
      example: {
        name: '',
        store_id: 0,
        price: 0,
        categories: [],
      },
    },
  })
  @Post()
  create(@Body() input: CreateProductDto) {
    return this.productService.create(input);
  }

  @ApiOperation({
    summary: '상품 목록 가져오기',
  })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiOperation({
    summary: '상품 가져오기',
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}