import { AttributeValueEntity } from '../../eav/entities/attribute-value.entity';

export class UpdateCustomerDto {
  name?: string;
  customData: AttributeValueEntity[];
}
