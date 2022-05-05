import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AttributeEntity } from './attribute.entity';

@Entity('model')
export class ModelEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AttributeEntity, (attributes) => attributes.model)
  attributes: AttributeEntity[];
}
