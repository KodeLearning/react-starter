import Button from '../../../Components/form/Button'
import { useAuth } from '../context'
import { logout } from '../service'

function AuthButton({ className }) {
  const { isLogged, onLogout } = useAuth()

  const handleLogoutClick = () => {
    logout()
    onLogout()
  }

  return isLogged ? (
    <Button onClick={handleLogoutClick} className={className}>
      Logout
    </Button>
  ) : (
    <Button $variant="primary" className={className}>
      Login
    </Button>
  )
}

export default AuthButton
