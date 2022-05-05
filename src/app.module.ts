import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './domains/store/store.module';
import { DatabaseModule } from './modules/database.module';

@Module({
  imports: [ConfigModule.forRoot(), StoreModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
