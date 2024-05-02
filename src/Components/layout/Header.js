import { ReactComponent as Icon } from '../../assets/logo.svg'

import { useAuth } from '../../Pages/auth/context'
import { logout } from '../../Pages/auth/service'

export default function Header() {
  const { isLogged, onLogout } = useAuth()

  const handleLogout = () => {
    logout()
    onLogout()
  }

  return (
    <header>
      <div>
        <Icon width={32} height={32} />
      </div>
      <nav>
        {isLogged ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </nav>
    </header>
  )
}
