import { FastifyInstance } from 'fastify'
import { createToken, verifyToken } from '../controllers/security.controller'

export const seguridadRoutes = (
  fastify: FastifyInstance,
  options: any,
  done: () => void
) => {
  fastify.get('/', (request, reply) => {
    reply.send({
      message: 'Security microservice',
    })
  })
  fastify.get('/token', createToken)
  fastify.post('/verify-token', verifyToken)
  done()
}
