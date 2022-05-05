import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';
import { EntityEntity } from '../../eav/entities/entity.entity';

@Entity('product')
export class ProductEntity extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  store_id: number;

  @Column()
  entity_id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  price: number;

  @Column({
    transformer: {
      from(val: string): string[] {
        return `${val}`.split(',');
      },
      to(val: string[]): string {
        return (val || []).join(',');
      },
    },
  })
  categories: string;

  @OneToOne(() => EntityEntity)
  @JoinColumn({ name: 'entity_id' })
  entity: EntityEntity;
}
