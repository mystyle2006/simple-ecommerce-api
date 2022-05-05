import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './domains/customer/customer.module';
import { EavModule } from './domains/eav/eav.module';
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
    EavModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
