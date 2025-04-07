import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import LoginPage from './pages/login-page'
import NotFoundPage from './pages/not-found'
import { AuthContext, AuthProvider } from '../providers/auth-provider'
import { useContext, useEffect } from 'react'
import RegisterPage from './pages/register-page'
import { Toaster } from 'react-hot-toast'

function App() {
  const { setSession } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const currentSession = localStorage.getItem('session')
    if (currentSession) {
      const session = JSON.parse(currentSession)
      setSession(session)
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </AuthProvider>
  )
}

export default App
