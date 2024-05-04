import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Icon } from '../../assets/logo.svg'

import { useAuth } from '../../Pages/auth/context'
import { logout } from '../../Pages/auth/service'
import AuthButton from '../../Pages/auth/components/AuthButton'

export default function Header() {
  const { isLogged, onLogout } = useAuth()

  const handleLogout = () => {
    logout()
    onLogout()
  }

  return (
    <header>
      <div>
        <Link to="/">
          <Icon width={32} height={32} />
        </Link>
      </div>
      <div>
        <nav className="header-nav">
          <NavLink to="/adverts/new">New Advert</NavLink> |
          <NavLink to="/adverts" end>
            Latest adverts
          </NavLink>
        </nav>
        <AuthButton className="auth-button"></AuthButton>
      </div>
    </header>
  )
}
