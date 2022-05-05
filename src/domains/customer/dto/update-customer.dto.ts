import { AttributeValueEntity } from '../../eva/entities/attribute-value.entity';

export class UpdateCustomerDto {
  name?: string;
  customData: AttributeValueEntity[];
}
