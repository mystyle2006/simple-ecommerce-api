import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';

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
}
