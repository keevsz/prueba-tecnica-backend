import { DataTypes } from 'sequelize'
import sequelize from '../config/database'

const Client = sequelize.define(
  'Client',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Clients',
  }
)

Client.sync()

export default Client
