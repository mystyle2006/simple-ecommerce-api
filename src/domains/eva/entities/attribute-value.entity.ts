import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AttributeEntity } from './attribute.entity';
import { EntityEntity } from './entity.entity';

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

  @ManyToOne(() => EntityEntity, (entity) => entity.attributeValues)
  @JoinColumn({ name: 'entity_id' })
  entity: EntityEntity;

  @ManyToOne(() => AttributeEntity, (attribute) => attribute.attributeValues)
  @JoinColumn({ name: 'attribute_id' })
  attribute: AttributeEntity;
}
