import { PickType } from '@nestjs/swagger';

import { StoreEntity } from '../entities/store.entity';

export class UpdateStoreDto extends PickType(StoreEntity, ['name'] as const) {}
