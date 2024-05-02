import storage from '../../Utils/storage'
import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from '../../api/client'

export const login = (credentials, rememberPassword) => {
  return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken)

    if (rememberPassword) {
      storage.set('auth', accessToken)
    }
  })
}

export const logout = () => {
  storage.remove('auth')
  removeAuthorizationHeader()

  return
}
