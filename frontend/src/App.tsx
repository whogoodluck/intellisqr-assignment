import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NotFoundPage from './pages/not-found'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
