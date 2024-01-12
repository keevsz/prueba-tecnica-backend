import { Sequelize } from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize(process.env.MYSQL_STRING_CONNECTION!, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
})

sequelize
  .authenticate()
  .then(async () => {
    await require('../models/client')
    await require('../models/parameters')
    console.log('Connection has been established successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error)
  })

export default sequelize
