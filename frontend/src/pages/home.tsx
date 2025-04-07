import { useContext } from 'react'
import { AuthContext } from '../../providers/auth-provider'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button'

function Home() {
  const { setSession } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('session')
    setSession(null)
    navigate('/login')
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6 h-screen w-full'>
      <h1 className='text-5xl font-semibold text-center text-[#a726a0]'>IntelliSQR Assignment</h1>
      <Button text='Logout' className='w-xs' onClick={handleLogout} />
    </div>
  )
}

export default Home
