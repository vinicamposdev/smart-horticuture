/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm'
import User from '../../../../users/infra/typeorm/entities/User'

@Entity('streemarcket')
class StreetMarcket {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column('varchar')
  address: string

  @Column('varchar', { nullable: true })
  delivery_time: number

  @Column('varchar', { nullable: true })
  description: string

  @Column('varchar', { nullable: true })
  photo_1: string

  @Column('varchar', { nullable: true })
  photo_2: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default StreetMarcket
