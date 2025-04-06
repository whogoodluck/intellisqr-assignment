import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../lib/db'
import { IUser } from '../types/user'
import config from '@/utils/config'

async function hashPassword(password: string) {
  const salt = 10
  return await bcrypt.hash(password, salt)
}

async function comparePassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword)
}

async function signToken(id: string) {
  return await jwt.sign({ id }, config.JWT_SECRET!, { expiresIn: '1d' })
}

async function createNewUser(user: IUser) {
  return await prisma.user.create({ data: user })
}

async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } })
}

async function getAllUsers() {
  return await prisma.user.findMany()
}

export default {
  hashPassword,
  comparePassword,
  signToken,
  createNewUser,
  getUserByEmail,
  getAllUsers
}
