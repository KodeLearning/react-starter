import { useState } from 'react'
import AdvertsPage from './Pages/adverts/AdvertsPage'
import NewAdvertPage from './Pages/adverts/NewAdvertPage'
import LoginPage from './Pages/auth/LoginPage'

function App({ isDefaultLogged }) {
  const [isLogged, setIsLogged] = useState(isDefaultLogged)

  const handleLogin = () => setIsLogged(true)
  const handleLogout = () => setIsLogged(false)

  return (
    <div>
      {isLogged ? (
        <AdvertsPage onLogout={handleLogout} isLogged={isLogged} />
      ) : (
        // <NewAdvertPage />
        <LoginPage onLogin={handleLogin} isLogged={isLogged} />
      )}
    </div>
  )
}

export default App
