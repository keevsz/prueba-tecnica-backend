import { FastifyInstance } from 'fastify'
import { getParameters } from '../controllers/parameters.controller'

export const parametersRoutes = (
  fastify: FastifyInstance,
  options: any,
  done: () => void
) => {
  fastify.get('/parameters', getParameters)
  done()
}
