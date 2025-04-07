import { useForm } from 'react-hook-form'
import Button from '../components/button'
import { RegisterForm, registerFormSchema } from '../validators/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleAlert } from 'lucide-react'
import { useRegister } from '../hooks/user.hooks'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../providers/auth-provider'
import { NavLink, useNavigate } from 'react-router-dom'

function RegisterPage() {
  const { session } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (session) {
      navigate('/')
    }
  }, [session])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerFormSchema)
  })

  const { mutate: signup, isPending, isError, error } = useRegister()

  const onSubmit = (data: RegisterForm) => {
    signup(data)
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='w-xs flex flex-col gap-6'>
        <h1 className='text-3xl font-semibold text-center'>Create Account!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
          <div>
            <input
              type='string'
              id='email'
              className='border-[1px] border-[#D6D6D6] rounded-lg px-[14px] py-3 w-full'
              placeholder='Email'
              {...register('email')}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type='password'
              id='password'
              className='border-[1px] border-[#D6D6D6] rounded-lg px-[14px] py-3 w-full'
              placeholder='Password'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>
            )}
          </div>
          <div className=''>
            {isError && (
              <p className='text-sm text-red-600'>
                <CircleAlert className='mr-1 inline h-4 w-4' /> {error?.message}
              </p>
            )}
          </div>
          <Button type='submit' text='Register' loading={isPending} className='w-full' />
        </form>
        <div className='text-center'>
          <p className='text-sm font-medium'>
            Have an account?{' '}
            <NavLink to={'/login'} className='text-[#2B3A67] hover:underline font-semibold'>
              login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
