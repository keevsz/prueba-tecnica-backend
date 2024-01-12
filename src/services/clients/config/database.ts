import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://localhost:3306/dbprueba', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  username: 'root',
  password: 'password',
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
