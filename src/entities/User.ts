import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import { IsEmail, IsString } from 'class-validator'
import { v4 as uuid } from 'uuid'

@Entity() // Decorator to mark this class as a TypeORM entity
export class User {
  @PrimaryGeneratedColumn('uuid') // Generates a UUID for the id
  id: string

  @IsString()
  @Column({ type: 'varchar', length: 255 })
  username: string

  @IsEmail()
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string

  @IsString()
  @Column({ type: 'varchar', length: 255 })
  password: string

  @BeforeInsert()
  generateUUID() {
    this.id = uuid()
  }
}
