import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import userRoutes from './routes/user.route'

import errorHandler from './middlewares/error-handler'
import unknownEndpoint from './middlewares/unknown-endpoint'

const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', userRoutes)

app.use(errorHandler as unknown as express.ErrorRequestHandler)
app.use(unknownEndpoint)

export default app
