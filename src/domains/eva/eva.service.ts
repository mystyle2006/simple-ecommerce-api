import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

import { CreateEvaDto } from './dto/create-eva.dto';
import { UpdateEvaDto } from './dto/update-eva.dto';
import { AttributeEntity } from './entities/attribute.entity';
import { ModelEntity } from './entities/model.entity';

@Injectable()
export class EvaService {
  constructor(
    @InjectRepository(ModelEntity)
    private readonly modelRepository: Repository<ModelEntity>,
    @InjectRepository(AttributeEntity)
    private readonly attributeEntityRepository: Repository<AttributeEntity>,
  ) {}

  async create(createEvaDto: CreateEvaDto): Promise<AttributeEntity> {
    return this.attributeEntityRepository.save(createEvaDto as AttributeEntity);
  }

  async findModels(): Promise<ModelEntity[]> {
    return this.modelRepository.find();
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
}
