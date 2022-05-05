import { Injectable } from '@nestjs/common';

import { CommonService } from '../../utils/common.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService extends CommonService(ProductEntity) {
  async create(input: CreateProductDto): Promise<ProductEntity> {
    return this.repository.save(input as ProductEntity);
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<ProductEntity> {
    return this.repository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
