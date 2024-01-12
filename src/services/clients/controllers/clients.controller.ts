import { FastifyRequest, FastifyReply } from 'fastify'
import Client from '../models/client'
import { getParameters } from './parameters.controller'
import { CreateClientRequestBody, ParameterType } from '../types'
var amqp = require('amqplib/callback_api')

export const createClient = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { email, name, token } = request.body as CreateClientRequestBody

  if (!token) {
    return reply
      .status(401)
      .send({ message: 'Debe enviar el token', ok: false })
  }

  const responseTokenValid = await fetch('http://localhost:3003/verify-token', {
    method: 'POST',
    body: JSON.stringify({ token }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const isValidToken = await responseTokenValid.json()
  if (isValidToken.ok) {
    if (!email || !name) {
      return reply
        .status(400)
        .send({ message: 'Debe enviar el email y el nombre', ok: false })
    }
    const newClient = await Client.create({ name, email })

    const parameters: ParameterType = await getParameters()

    if (parameters.emailSender) {
      //TODO: "Enviar" correo mediante emails microservicio
      amqp.connect('amqp://localhost', function (error0: any, connection: any) {
        if (error0) {
          throw error0
        }
        connection.createChannel(function (error1: any, channel: any) {
          if (error1) {
            throw error1
          }

          const queue = 'emails'
          const emailData = {
            to: email,
            name,
          }

          channel.assertQueue(queue, {
            durable: false,
          })
          channel.sendToQueue(queue, Buffer.from(JSON.stringify(emailData)))
          console.log(' [x] Sent %s', emailData)
        })

        setTimeout(function () {
          connection.close()
        }, 500)
      })
      console.log('Email enviado, parametro activado')
    } else {
      console.log('Email no enviado, parametro desactivado')
    }

    return newClient.dataValues
  } else {
    reply.status(401).send({ message: 'Token no válido', ok: false })
  }
}
