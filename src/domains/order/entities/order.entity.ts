import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { OrderStatusEnum } from '../../../enums/order-status.enum';
import { CommonEntity } from '../../../utils/common.entity';
import { EntityEntity } from '../../eav/entities/entity.entity';

@Entity('order')
export class OrderEntity extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  store_id: number;

  @Column()
  entity_id: number;

  @Column()
  @IsNotEmpty()
  customer_id: number;

  @Column()
  status: OrderStatusEnum;

  @Column()
  price: number;

  @Column({
    transformer: {
      from(val: string): number[] {
        return `${val}`.split(',').map((i) => Number(i));
      },
      to(val: number[]): string {
        return (val || []).join(',');
      },
    },
  })
  products: string;

  @OneToOne(() => EntityEntity)
  @JoinColumn({ name: 'entity_id' })
  entity: EntityEntity;
}
