import fastify from 'fastify'

const fastifySv = fastify()

fastifySv.get('/', async () => {
  return { message: 'hi' }
})

fastifySv.listen(
  {
    port: 3000,
  },
  (err, address) => {
    if (err) throw err
  }
)
