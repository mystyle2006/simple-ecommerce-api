import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './domains/customer/customer.module';
import { EvaModule } from './domains/eva/eva.module';
import { OrderModule } from './domains/order/order.module';
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
    OrderModule,
    EvaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
