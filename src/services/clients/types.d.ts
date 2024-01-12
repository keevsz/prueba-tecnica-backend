export interface ParameterType {
  id: number
  user: string
  emailSender: boolean
  updatedAt: string
  createdAt: string
}

export type CreateClientRequestBody = {
  name: string
  email: string
  token: string
}
