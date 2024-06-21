import { logout } from '../service'
import { Link } from 'react-router-dom'
import Button from '../../../Components/form/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getIsLogged } from '../../../store/selectors'
import { authLogout } from '../../../store/actions'

function AuthButton({ className }) {
  const isLogged = useSelector(getIsLogged)
  const dispatch = useDispatch()

  const handleLogoutClick = () => {
    logout()
    dispatch(authLogout())
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
