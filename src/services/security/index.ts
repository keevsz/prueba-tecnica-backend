import fastify from 'fastify'
import { seguridadRoutes } from './routes/security.routes'
import cors from '@fastify/cors'

import './config/database'

const fastifySv = fastify()

fastifySv.register(cors)
fastifySv.register(seguridadRoutes)
fastifySv.listen(
  {
    port: 3003,
  },
  (err, address) => {
    if (err) throw err
    console.log(`Security microservice: ${address}`)
  }
)
