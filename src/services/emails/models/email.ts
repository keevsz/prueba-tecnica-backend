import { DataTypes } from 'sequelize'
import sequelize from '../config/database'

const Email = sequelize.define(
  'Email',
  {
    to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Emails',
  }
)

Email.sync()

export default Email
