import { authLoginFulfilled, authLogout } from '../actions'
import { auth, defaultState } from '../reducers'

describe('auth', () => {
  test('should manage "AUTH_LOGIN_FULFILLED', () => {
    const state = defaultState.auth
    const action = authLoginFulfilled()
    expect(auth(state, action)).toEqual({ auth: true })
  })

  test('should manage "AUTH_LOGOUT" action', () => {
    const state = defaultState.auth
    const action = authLogout()
    expect(auth(state, action)).toEqual({ auth: false })
  })
})
