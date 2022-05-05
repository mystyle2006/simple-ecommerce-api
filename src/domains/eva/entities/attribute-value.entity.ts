import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('attribute_value')
export class AttributeValueEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  entity_id: number;

  @Column()
  attribute_id: number;

  @Column()
  value: string;
}
