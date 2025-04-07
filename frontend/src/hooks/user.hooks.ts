import { useMutation } from '@tanstack/react-query'
import { login, register } from '../actions/user.api'
import { LoginForm, RegisterForm } from '../validators/auth-schema'
import { AuthContext } from '../../providers/auth-provider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useLogin() {
  const { setSession } = useContext(AuthContext)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: LoginForm) => login(data),
    onSuccess: data => {
      if (data.data) {
        setSession(data.data)
        localStorage.setItem('session', JSON.stringify(data.data))
        navigate('/')
        toast.success('Login successful')
      }
    }
  })
}

export function useRegister() {
  const { setSession } = useContext(AuthContext)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: RegisterForm) => register(data),
    onSuccess: data => {
      if (data.data) {
        setSession(data.data)
        localStorage.setItem('session', JSON.stringify(data.data))
        navigate('/')
        toast.success('Registration successful')
      }
    }
  })
}
