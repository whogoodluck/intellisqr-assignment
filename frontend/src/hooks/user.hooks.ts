import { useMutation } from '@tanstack/react-query'
import { login } from '../actions/user.api'
import { LoginForm } from '../validators/auth-schema'
import { AuthContext } from '../../providers/auth-provider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const { setSession } = useContext(AuthContext)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: LoginForm) => login(data),
    onSuccess: data => {
      if (data) {
        setSession(data.data)
        navigate('/')
      }
    }
  })
}
