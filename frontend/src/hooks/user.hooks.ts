import { useMutation } from '@tanstack/react-query'
import { login } from '../actions/user.api'
import { LoginForm } from '../validators/auth-schema'

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginForm) => login(data)
  })
}
