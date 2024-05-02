import { useState } from 'react'
import AdvertsPage from './Pages/adverts/AdvertsPage'
import LoginPage from './Pages/auth/LoginPage'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = () => setIsLogged(true)

  return isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />
}

export default App
