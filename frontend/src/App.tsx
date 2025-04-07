import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LoginPage from './pages/login-page'
import NotFoundPage from './pages/not-found'
import { AuthProvider } from '../providers/auth-provider'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
