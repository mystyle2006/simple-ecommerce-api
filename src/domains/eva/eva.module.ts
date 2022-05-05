import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AttributeEntity } from './entities/attribute.entity';
import { ModelEntity } from './entities/model.entity';
import { EvaController } from './eva.controller';
import { EvaService } from './eva.service';

@Module({
  imports: [TypeOrmModule.forFeature([ModelEntity, AttributeEntity])],
  controllers: [EvaController],
  providers: [EvaService],
  exports: [EvaService],
})
export class EvaModule {}