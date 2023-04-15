import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript'

import { Current } from './current.model'
import { Voltaje } from './voltaje.model'

@Table({
  tableName: 'Users'
})
class User extends Model {
  @Column({
    type: DataType.INTEGER,
    comment: 'User id',
    primaryKey: true,
    autoIncrement: true
  })
    id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    comment: 'Username of the user'
  })
    userName!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Hashed password sha256'
  })
    password!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Password hash salt'
  })
    salt!: string

  @HasMany(() => Current)
    currentLecture!: Current[]

  @HasMany(() => Voltaje)
    voltajeLecture!: Voltaje[]
}

export { User }
