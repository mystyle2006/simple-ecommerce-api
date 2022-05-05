import { Injectable } from '@nestjs/common';

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

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
