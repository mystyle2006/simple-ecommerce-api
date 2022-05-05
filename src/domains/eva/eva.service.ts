import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

import { ModelNameEnum } from '../../enums/model-name.enum';
import { CreateCustomDataDto } from './dto/create-custom-data.dto';
import { CreateEntityDto } from './dto/create-entity.dto';
import { CreateEvaDto } from './dto/create-eva.dto';
import { GetAttributeValueDto } from './dto/get-attribute-value.dto';
import { ReturnCustomDataDto } from './dto/return-custom-data.dto';
import { UpdateEvaDto } from './dto/update-eva.dto';
import { AttributeEntity } from './entities/attribute.entity';
import { AttributeValueEntity } from './entities/attribute-value.entity';
import { EntityEntity } from './entities/entity.entity';
import { ModelEntity } from './entities/model.entity';

@Injectable()
export class EvaService {
  constructor(
    @InjectRepository(ModelEntity)
    private readonly modelRepository: Repository<ModelEntity>,
    @InjectRepository(AttributeEntity)
    private readonly attributeEntityRepository: Repository<AttributeEntity>,
    @InjectRepository(EntityEntity)
    private readonly entityEntityRepository: Repository<EntityEntity>,
    @InjectRepository(AttributeValueEntity)
    private readonly attributeValueEntityRepository: Repository<AttributeValueEntity>,
  ) {}

  async createEntity(input: CreateEntityDto): Promise<EntityEntity> {
    return this.entityEntityRepository.save(input as EntityEntity);
  }

  async createAttributeValues(
    entity_id: number,
    customData: GetAttributeValueDto[],
  ): Promise<AttributeValueEntity[]> {
    return Promise.all(
      customData.map((data) =>
        this.attributeValueEntityRepository.save({
          attribute_id: data.attribute_id,
          value: data.value,
          entity_id,
        } as AttributeValueEntity),
      ),
    );
  }

  async create(createEvaDto: CreateEvaDto): Promise<AttributeEntity> {
    return this.attributeEntityRepository.save(createEvaDto as AttributeEntity);
  }

  async findModels(): Promise<ModelEntity[]> {
    return this.modelRepository.find();
  }

  async findModelByName(name: string): Promise<ModelEntity> {
    return this.modelRepository.findOne({
      where: {
        name,
      },
    });
  }

  async findEVA(store_id: number): Promise<ModelEntity[]> {
    return this.modelRepository
      .createQueryBuilder()
      .leftJoinAndSelect(
        'ModelEntity.attributes',
        'attributes',
        'attributes.store_id = :store_id',
        { store_id },
      )
      .getMany();
  }

  async findEVAByModel(
    model_id: number,
    store_id: number,
  ): Promise<AttributeEntity[]> {
    return this.attributeEntityRepository.find({
      where: {
        model_id,
        store_id,
      },
    });
  }

  async update(id: number, input: UpdateEvaDto): Promise<UpdateResult> {
    return this.attributeEntityRepository.update(id, input);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.attributeEntityRepository.delete(id);
  }

  async createCustomData({
    store_id,
    data,
    modelName,
  }: CreateCustomDataDto): Promise<ReturnCustomDataDto> {
    if (!data.length) {
      return {
        entity_id: null,
        result: [],
      };
    }

    const model = await this.findModelByName(modelName);
    const { id: entity_id } = await this.createEntity({
      store_id,
      model_id: model.id,
    });

    const attributeValues = await this.createAttributeValues(entity_id, data);
    return {
      entity_id,
      result: attributeValues,
    };
  }
}
