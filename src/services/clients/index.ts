import fastify from 'fastify'
import { clientsRoutes } from './routes/clients.routes'

import './config/database'
import { parametersRoutes } from './routes/parameters.routes'

const server = fastify()

server.register(clientsRoutes)
server.register(parametersRoutes)
server.listen(
  {
    port: 3001,
  },
  (err, address) => {
    if (err) throw err
    console.log(`Microservicio de clientes: ${address}`)
  }
)
