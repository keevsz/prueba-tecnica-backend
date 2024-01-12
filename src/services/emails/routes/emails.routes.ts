import { FastifyInstance } from 'fastify'

export const emailRoutes = (
  fastify: FastifyInstance,
  options: any,
  done: () => void
) => {
  fastify.get('/', () => {
    return 'Email microservice'
  })
  done()
}
