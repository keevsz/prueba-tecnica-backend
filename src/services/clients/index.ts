import fastify from 'fastify'
import { clientsRoutes } from './routes/clients.routes'

import './config/database'
import { parametersRoutes } from './routes/parameters.routes'
import cors from '@fastify/cors';

const fastifySv = fastify()

fastifySv.register(cors)
fastifySv.register(clientsRoutes)
fastifySv.register(parametersRoutes)

fastifySv.listen(
  {
    port: 3001,
  },
  (err, address) => {
    if (err) throw err
    console.log(`Microservicio de clientes: ${address}`)
  }
)
