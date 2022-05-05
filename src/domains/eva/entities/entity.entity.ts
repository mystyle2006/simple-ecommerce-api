import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AttributeValueEntity } from './attribute-value.entity';

@Entity('entity')
export class EntityEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  store_id: number;

  @Column()
  model_id: number;

  @OneToMany(
    () => AttributeValueEntity,
    (attributeEntity) => attributeEntity.entity,
  )
  attributeValues: AttributeValueEntity[];
}
