import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { OrderStatusEnum } from '../../../enums/order-status.enum';
import { CommonEntity } from '../../../utils/common.entity';

@Entity('order')
export class OrderEntity extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  store_id: number;

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
}
