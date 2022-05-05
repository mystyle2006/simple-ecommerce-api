import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EavController } from './eav.controller';
import { EavService } from './eav.service';
import { AttributeEntity } from './entities/attribute.entity';
import { AttributeValueEntity } from './entities/attribute-value.entity';
import { EntityEntity } from './entities/entity.entity';
import { ModelEntity } from './entities/model.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModelEntity,
      EntityEntity,
      AttributeEntity,
      AttributeValueEntity,
    ]),
  ],
  controllers: [EavController],
  providers: [EavService],
  exports: [EavService],
})
export class EavModule {}
