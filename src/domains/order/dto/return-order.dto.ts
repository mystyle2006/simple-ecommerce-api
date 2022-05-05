import { AttributeValueEntity } from '../../eva/entities/attribute-value.entity';
import { OrderEntity } from '../entities/order.entity';

export class ReturnOrderDto extends OrderEntity {
  customData: AttributeValueEntity[];
}
