import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

import { User } from "./user.model";

@Table({
  tableName: "Currents"
})
class Current extends Model {

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "Current reading id",
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    comment: "Date and time when the current lecture was made"
  })
  time!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
    comment: "Value of the current lecture"
  })
  lecture!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "User that has made the lecture"
  })
  user!: number;

}


export{
  Current
};