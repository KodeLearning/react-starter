import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context'

export default function RequireAuth({ children }) {
  const location = useLocation()
  const { isLogged } = useAuth()

  return isLogged ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}