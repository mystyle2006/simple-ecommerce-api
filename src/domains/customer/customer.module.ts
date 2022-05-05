import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EavModule } from '../eav/eav.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerEntity } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity]), EavModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
