import { Route, Routes } from 'react-router-dom'
import AdvertsPage from './Pages/adverts/AdvertsPage'
import NewAdvertPage from './Pages/adverts/NewAdvertPage'
import LoginPage from './Pages/auth/LoginPage'
import { useAuth } from './Pages/auth/context'
import { Navigate } from 'react-router-dom'

function App() {
  const { isLogged } = useAuth()
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<AdvertsPage />} />
      <Route path="/adverts/new" element={<NewAdvertPage />} />
      <Route path="/adverts/:advertId" element={<div>Advert detail</div>} />

      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/404" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default App
