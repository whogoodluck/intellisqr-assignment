import { Request, Response, NextFunction } from 'express'
import userService from '../services/user.service'
import { IUser } from '../types/user'

async function register(req: Request, res: Response, next: NextFunction) {
  const { email, password }: IUser = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'email and password are required' })
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'password must be at least 8 characters' })
    }

    const existingUser = await userService.getUserByEmail(email)
    if (existingUser) {
      return res.status(400).json({ message: 'email already in use' })
    }

    const hashedPassword = await userService.hashPassword(password)

    const user = await userService.createNewUser({ email, password: hashedPassword })

    const { password: _, ...userWithoutPassword } = user

    const token = await userService.signToken(user.id)

    return res
      .status(201)
      .json({ message: 'user created', data: { user: userWithoutPassword, token } })
  } catch (err) {
    next(err)
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password }: IUser = req.body
  try {
    const user = await userService.getUserByEmail(email)

    const correctPassword = !user
      ? false
      : await userService.comparePassword(password, user.password)

    if (!user || !correctPassword) {
      return res.status(401).json({ message: 'invalid credentials' })
    }

    const { password: _, ...userWithoutPassword } = user

    const token = await userService.signToken(user.id)

    return res.status(200).json({
      message: 'user logged in',
      data: { user: userWithoutPassword, token }
    })
  } catch (err) {
    next(err)
  }
}

async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const users = await userService.getAllUsers()
    res.status(200).json({ message: 'users fetched', total: users.length, data: { users } })
  } catch (err) {
    next(err)
  }
}

export default {
  register,
  login,
  getAll
}
