import { LoginForm, RegisterForm } from '../validators/auth-schema'

const API_URL = import.meta.env.VITE_API_URL

export const login = async (credentials: LoginForm) => {
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

  const data = await response.json()

  if (response.status !== 200) {
    throw new Error(data.message)
  }

  return data
}

export const register = async (credentials: RegisterForm) => {
  const response = await fetch(`${API_URL}/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

  const data = await response.json()

  if (response.status !== 201) {
    throw new Error(data.message)
  }

  return data
}
