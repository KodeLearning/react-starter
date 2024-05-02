import { useState } from 'react'
import AdvertsPage from './Pages/adverts/AdvertsPage'
import LoginPage from './Pages/auth/LoginPage'

function App({ isDefaultLogged }) {
  const [isLogged, setIsLogged] = useState(isDefaultLogged)

  const handleLogin = () => setIsLogged(true)
  const handleLogout = () => setIsLogged(false)

  return isLogged ? (
    <AdvertsPage onLogout={handleLogout} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  )
}

export default App
