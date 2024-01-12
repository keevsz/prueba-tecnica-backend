import { FastifyInstance } from 'fastify'
import { createClient } from '../controllers/clients.controller'

export const clientsRoutes = (
  fastify: FastifyInstance,
  options: any,
  done: () => void
) => {
  fastify.get('/', (request, reply) => {
    reply.send({
      message: 'Clients microservice',
    })
  })
  fastify.post('/clients', createClient)
  done()
}
