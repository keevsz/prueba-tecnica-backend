import fastify from 'fastify'
import { clientsRoutes } from './routes/clients.routes'
import { parametersRoutes } from './routes/parameters.routes'
import cors from '@fastify/cors'

import 'dotenv/config'
import './config/database'

const fastifySv = fastify()

fastifySv.register(cors)
fastifySv.register(clientsRoutes)
fastifySv.register(parametersRoutes)

fastifySv.listen(
  {
    port: +process.env.PORT_CLIENT! || 3001,
  },
  (err, address) => {
    if (err) throw err
    console.log(`Microservicio de clientes: ${address}`)
  }
)
