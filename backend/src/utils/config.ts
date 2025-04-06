import { config } from 'dotenv'

config()

const PORT: number | undefined = Number(process.env.PORT) || 3001

const JWT_SECRET: string | undefined = process.env.JWT_SECRET

export default {
  PORT,
  JWT_SECRET
}
