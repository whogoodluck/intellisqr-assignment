import { LoginForm, RegisterForm } from '../validators/auth-schema'
import { ApiResponse } from '../types/api.types'
import { Session } from '../types/user.types'

const API_URL = import.meta.env.VITE_API_URL

export const login = async (credentials: LoginForm): Promise<ApiResponse<Session>> => {
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  return response.json().then(data => {
    console.log('ld', data)
    if (!data.success) {
      throw new Error(data.message)
    }
    return data
  })
}

export const register = async (credentials: RegisterForm): Promise<ApiResponse<Session>> => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  return response.json().then(data => {
    if (!data.success) {
      throw new Error(data.message)
    }
    return data
  })
}
