import { DataTypes } from 'sequelize'
import sequelize from '../config/database'
import { initParameters } from '../controllers/parameters.controller'

const Parameter = sequelize.define(
  'Parameter',
  {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailSender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'Parameters',
  }
)

Parameter.sync().then(async () => {
  await initParameters()
})

export default Parameter
