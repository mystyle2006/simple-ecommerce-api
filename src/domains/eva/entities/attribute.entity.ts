import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AttributeTypeEnum } from '../../../enums/attribute-type.enum';
import { AttributeValueEntity } from './attribute-value.entity';
import { ModelEntity } from './model.entity';

@Entity('attribute')
export class AttributeEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  model_id: number;

  @Column()
  store_id: number;

  @Column()
  type: AttributeTypeEnum;

  @Column()
  name: string;

  @ManyToOne(() => ModelEntity, (parent) => parent.attributes)
  @JoinColumn({ name: 'model_id' })
  model: ModelEntity;

  @OneToMany(
    () => AttributeValueEntity,
    (attributeEntity) => attributeEntity.attribute,
  )
  attributeValues: AttributeValueEntity[];
}
