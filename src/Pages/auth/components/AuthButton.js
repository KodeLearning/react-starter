import { useAuth } from '../context'
import { logout } from '../service'
import { Link } from 'react-router-dom'
import Button from '../../../Components/form/Button'

function AuthButton({ className }) {
  const { isLogged, onLogout } = useAuth()

  const handleLogoutClick = () => {
    logout()
    onLogout()
  }

  return isLogged ? (
    <Button
      onClick={handleLogoutClick}
      $variant="primary"
      className={className}
    >
      Logout
    </Button>
  ) : (
    <Button $variant="primary" className={className} as={Link} to="/login">
      Login
    </Button>
  )
}

export default AuthButton
