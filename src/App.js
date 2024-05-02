import AdvertsPage from './Pages/adverts/AdvertsPage'
import NewAdvertPage from './Pages/adverts/NewAdvertPage'
import LoginPage from './Pages/auth/LoginPage'
import { useAuth } from './Pages/auth/context'

function App() {
  const { isLogged } = useAuth()
  return (
    <div>
      {isLogged ? (
        <AdvertsPage />
      ) : (
        // <NewAdvertPage />
        <LoginPage />
      )}
    </div>
  )
}

export default App
