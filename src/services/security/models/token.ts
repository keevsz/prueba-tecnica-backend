import { DataTypes } from 'sequelize'
import sequelize from '../config/database'

const Token = sequelize.define(
  'Token',
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'Tokens',
  }
)

Token.sync()

export default Token
