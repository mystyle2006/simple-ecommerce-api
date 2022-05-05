import { Injectable } from '@nestjs/common';

import { OrderStatusEnum } from '../../enums/order-status.enum';
import { CommonService } from '../../utils/common.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService extends CommonService(OrderEntity) {
  async create(input: CreateOrderDto): Promise<OrderEntity> {
    return this.repository.save({
      ...input,
      status: OrderStatusEnum.OK,
    } as OrderEntity);
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.repository.find();
  }

  update(id: number) {
    return this.repository.update(id, { status: OrderStatusEnum.CANCEL });
  }
}
