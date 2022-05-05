import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

import { CommonService } from '../../utils/common.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreEntity } from './entities/store.entity';

@Injectable()
export class StoreService extends CommonService(StoreEntity) {
  async create(input: CreateStoreDto): Promise<StoreEntity> {
    return this.repository.save(input as StoreEntity);
  }

  async findById(id: number): Promise<StoreEntity> {
    return this.repository.findOne(id);
  }

  update(id: number, updateStoreDto: UpdateStoreDto): Promise<UpdateResult> {
    return this.repository.update(id, updateStoreDto);
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
