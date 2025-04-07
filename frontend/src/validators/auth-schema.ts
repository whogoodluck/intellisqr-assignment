import { z } from 'zod'

import { requiredString } from './helpers'

export const loginFormSchema = z.object({
  email: requiredString('Email').email({ message: 'Invalid email' }).default(''),
  password: requiredString('Password').default('')
})

export type LoginForm = z.infer<typeof loginFormSchema>

export const registerFormSchema = z.object({
  email: requiredString('Email').email({ message: 'Invalid email' }).default(''),
  password: requiredString('Password').default('')
})

export type RegisterForm = z.infer<typeof registerFormSchema>
