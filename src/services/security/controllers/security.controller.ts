import { FastifyRequest, FastifyReply } from 'fastify'
import { generateToken } from '../../../utils/tokens'
import Token from '../models/token'

export const createToken = async (_: FastifyRequest, __: FastifyReply) => {
  const token = generateToken({ size: 8 })
  const tokenCreated = await Token.create({ value: token, active: true })

  return tokenCreated.dataValues
}

export const verifyToken = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { token } = request.body as { token: string }
  const tokenFound = await Token.findOne({
    where: {
      value: token,
      active: true,
    },
  })

  if (tokenFound) {
    reply.status(200).send({ message: 'Token válido', ok: true })
  } else {
    reply.status(401).send({ message: 'Token no válido', ok: false })
  }
}
