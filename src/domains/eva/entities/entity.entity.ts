import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entity')
export class EntityEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  store_id: number;

  @Column()
  model_id: number;
}
