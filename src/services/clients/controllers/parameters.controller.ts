import { redis } from '../config/redis'
import Parameter from '../models/parameters'

export const initParameters = async () => {
  const initialParamsFound = await Parameter.findOne({
    where: {
      user: 'kevin',
    },
  })

  if (initialParamsFound) return

  const result = await Parameter.create({
    user: 'kevin',
    emailSender: false, //TODO  Parametro de envio de email
  })

  redis.set('parameters', JSON.stringify(result.dataValues))

  return result.dataValues
}

export const getParameters = async () => {
  const result = await redis.get('parameters')
  if (!result) {
    return await initParameters()
  }
  const toObject = JSON.parse(result)
  return toObject
}
