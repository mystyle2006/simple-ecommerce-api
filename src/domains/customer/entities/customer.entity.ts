import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';

@Entity('customer')
export class CustomerEntity extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  entity_id: number;

  @Column()
  @IsNotEmpty()
  store_id: number;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ select: false })
  @MinLength(8)
  password: string;
}
