import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

import { ModelNameEnum } from '../../enums/model-name.enum';
import { CommonService } from '../../utils/common.service';
import { EvaService } from '../eva/eva.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ReturnProductDto } from './dto/return-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService extends CommonService(ProductEntity) {
  constructor(private readonly evaService: EvaService) {
    super();
  }
  async create({
    customData,
    ...leftover
  }: CreateProductDto): Promise<ReturnProductDto> {
    const product = await this.repository.save(leftover as ProductEntity);
    const { entity_id, result: customDataResult } =
      await this.evaService.createCustomData({
        data: customData,
        store_id: leftover.store_id,
        modelName: ModelNameEnum.PRODUCT,
      });

    if (entity_id) {
      await this.repository.update(product.id, { entity_id });
    }

    return {
      ...product,
      entity_id,
      customData: customDataResult,
    };
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.repository.find({
      relations: [
        'entity',
        'entity.attributeValues',
        'entity.attributeValues.attribute',
      ],
    });
  }

  async findOne(id: number): Promise<ProductEntity> {
    return this.repository.findOne({
      relations: [
        'entity',
        'entity.attributeValues',
        'entity.attributeValues.attribute',
      ],
      where: {
        id,
      },
    });
  }

  async update(id: number, input: UpdateProductDto): Promise<UpdateResult> {
    return this.repository.update(id, input);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
