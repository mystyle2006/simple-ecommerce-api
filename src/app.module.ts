import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './domains/customer/customer.module';
import { ProductModule } from './domains/product/product.module';
import { StoreModule } from './domains/store/store.module';
import { DatabaseModule } from './modules/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    StoreModule,
    DatabaseModule,
    CustomerModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
