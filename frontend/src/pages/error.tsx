import { useNavigate } from 'react-router-dom'
import Button from '../components/button'

const ErrorPage = () => {
  const navigate = useNavigate()

  const handleReloadPage = () => {
    navigate(0)
  }

  return (
    <div className='h-screen flex items-center justify-center flex-col gap-4'>
      <h2 className='text-2xl font-semibold'>Something went wrong!</h2>
      <Button text='Retry' className='w-xs' onClick={handleReloadPage} />
    </div>
  )
}

export default ErrorPage
