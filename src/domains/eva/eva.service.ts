import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  create(createEvaDto: CreateEvaDto) {
    return 'This action adds a new eva';
  }

  findAll() {
    return `This action returns all eva`;
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

  update(id: number, updateEvaDto: UpdateEvaDto) {
    return `This action updates a #${id} eva`;
  }

  remove(id: number) {
    return `This action removes a #${id} eva`;
  }
}
