import { Injectable } from '@nestjs/common';

import { ModelNameEnum } from '../../enums/model-name.enum';
import { OrderStatusEnum } from '../../enums/order-status.enum';
import { CommonService } from '../../utils/common.service';
import { EavService } from '../eav/eav.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ReturnOrderDto } from './dto/return-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService extends CommonService(OrderEntity) {
  constructor(private readonly evaService: EavService) {
    super();
  }

  async create({
    customData,
    ...leftover
  }: CreateOrderDto): Promise<ReturnOrderDto> {
    const order = await this.repository.save({
      ...leftover,
      status: OrderStatusEnum.OK,
    } as OrderEntity);
    const { entity_id, result: customDataResult } =
      await this.evaService.createCustomData({
        data: customData,
        store_id: leftover.store_id,
        modelName: ModelNameEnum.ORDER,
      });

    if (entity_id) {
      await this.repository.update(order.id, { entity_id });
    }

    return {
      ...order,
      entity_id,
      customData: customDataResult,
    };
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.repository.find({
      relations: [
        'entity',
        'entity.attributeValues',
        'entity.attributeValues.attribute',
      ],
    });
  }

  update(id: number) {
    return this.repository.update(id, { status: OrderStatusEnum.CANCEL });
  }
}
