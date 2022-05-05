import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EvaModule } from '../eva/eva.module';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), EvaModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
