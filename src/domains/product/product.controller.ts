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

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@ApiTags('상품')
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

  @ApiOperation({
    summary: '상품 수정하기',
  })
  @ApiBody({
    schema: {
      example: {
        name: '',
        price: 0,
        categories: [],
      },
    },
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateProductDto) {
    return this.productService.update(+id, input);
  }

  @ApiOperation({
    summary: '상품 삭제하기',
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.remove(+id);
  }
}
