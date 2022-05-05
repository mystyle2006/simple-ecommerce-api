import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';

@Entity('store')
export class StoreEntity extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;
}
