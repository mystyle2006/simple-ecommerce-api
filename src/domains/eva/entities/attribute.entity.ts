import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AttributeTypeEnum } from '../../../enums/attribute-type.enum';
import { ModelEntity } from './model.entity';

@Entity('attribute')
export class AttributeEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  model_id: string;

  @Column()
  store_id: string;

  @Column()
  type: AttributeTypeEnum;

  @Column()
  name: string;

  @ManyToOne(() => ModelEntity, (parent) => parent.attributes)
  @JoinColumn({ name: 'model_id' })
  model: ModelEntity;
}
