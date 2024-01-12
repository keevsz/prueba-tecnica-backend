export const generateToken = ({ size }: { size: number }) => {
  let token = ''

  for (let i = 0; i < size; i++) {
    const number = Math.floor(Math.random() * 10)
    token += number
  }

  return token
}
