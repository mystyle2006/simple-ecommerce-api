import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

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

  async update(id: number, input: UpdateProductDto): Promise<UpdateResult> {
    return this.repository.update(id, input);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
