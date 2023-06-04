import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript'

import { User } from './user.model'

@Table({
  tableName: 'Voltages'
})
class Voltage extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Voltage reading id',
    primaryKey: true,
    autoIncrement: true,
    unique: true
  })
    id!: number

  @Column({
    type: DataType.DATE,
    allowNull: false,
    comment: 'Date and time when the voltage lecture was made'
  })
    date!: string

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    comment: 'Value of the voltage lecture'
  })
    lecture!: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Cell the voltage corresponds to'
  })
    cellNumber!: number

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'User that has made the lecture'
  })
    user!: number
}

export {
  Voltage
}
