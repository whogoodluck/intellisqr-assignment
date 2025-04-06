import { Router } from 'express'
import userController from '../controllers/user.controller'

const userRoutes = Router()

userRoutes.post('/register', userController.register)
userRoutes.post('/login', userController.login)
userRoutes.get('/', userController.getAll)

export default userRoutes
