import { useState } from 'react'
import AdvertsPage from './Pages/adverts/AdvertsPage'
import NewAdvertPage from './Pages/adverts/NewAdvertPage'
import LoginPage from './Pages/auth/LoginPage'
import { AuthContext } from './Pages/auth/context'

function App({ isDefaultLogged }) {
  const [isLogged, setIsLogged] = useState(isDefaultLogged)

  const handleLogin = () => setIsLogged(true)
  const handleLogout = () => setIsLogged(false)

  const authValue = {
    isLogged,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return (
    <AuthContext.Provider value={authValue}>
      <div>
        {isLogged ? (
          <AdvertsPage />
        ) : (
          // <NewAdvertPage />
          <LoginPage />
        )}
      </div>
    </AuthContext.Provider>
  )
}

export default App
