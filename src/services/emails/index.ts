import fastify from 'fastify'
import { emailRoutes } from './routes/emails.routes'
import 'dotenv/config'

import './config/database'
import { saveEmail } from './controllers/emails.controller'
let amqp = require('amqplib/callback_api')

const fastifySv = fastify()

amqp.connect('amqp://localhost', function (error0: any, connection: any) {
  if (error0) {
    throw error0
  }
  connection.createChannel(function (error1: any, channel: any) {
    if (error1) {
      throw error1
    }
    var queue = 'emails'

    channel.assertQueue(queue, {
      durable: false,
    })

    channel.consume(
      queue,
      async function (msg: any) {
        const emailData: { to: string; name: string } = JSON.parse(
          msg.content.toString()
        )
        const newEmail = await saveEmail({
          body: `Este es un email de prueba ${emailData.name}!`,
          subject: 'Email de prueba',
          to: emailData.to,
        })

        console.log('Email enviado:', newEmail)
      },
      {
        noAck: true,
      }
    )
  })
})

fastifySv.register(emailRoutes)
fastifySv.listen(
  {
    port: +process.env.PORT_EMAILS! || 3002,
  },
  (err, address) => {
    if (err) throw err
    console.log(`Microservicio de correos: ${address}`)
  }
)
