import { RequestHandler, Router } from 'express'
import userController from '../controllers/user.controller'

const userRoutes = Router()

userRoutes.post('/register', userController.register as RequestHandler)
userRoutes.post('/login', userController.login as RequestHandler)
userRoutes.get('/', userController.getAll)

export default userRoutes
