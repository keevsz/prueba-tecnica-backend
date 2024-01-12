import Email from '../models/email'
import { EmailType } from '../types'

export const saveEmail = async (emailData: EmailType) => {
  const newEmailSaved = await Email.create({
    to: emailData.to,
    subject: emailData.subject,
    body: emailData.body,
  })
  return newEmailSaved.dataValues
}
