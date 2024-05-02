import { logout } from '../../Pages/auth/service'
import { ReactComponent as Icon } from '../../assets/logo.svg'

export default function Header({ isLogged, onLogout }) {
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
