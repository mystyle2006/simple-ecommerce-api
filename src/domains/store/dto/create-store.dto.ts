import { PickType } from '@nestjs/swagger';

import { StoreEntity } from '../entities/store.entity';

export class CreateStoreDto extends PickType(StoreEntity, ['name'] as const) {}
