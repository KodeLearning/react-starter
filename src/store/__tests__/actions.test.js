import { AUTH_LOGIN_PENDING } from '../actionTypes'
import {
  authLogin,
  authLoginFulfilled,
  authLoginPending,
  authLoginRejected,
} from '../actions'

// SYNC
describe('authLoginPending', () => {
  test('should return an "AUTH_LOGIN_PENDING" action', () => {
    const expectedAction = {
      type: AUTH_LOGIN_PENDING,
    }

    const action = authLoginPending()

    expect(action).toEqual(expectedAction)
  })
})

// ASYNC
describe('authLogin', () => {
  const credentials = 'credentials'
  const rememberMe = true
  const action = authLogin(credentials, rememberMe)

  const redirect = 'redirect'
  const dispatch = jest.fn()
  const services = { auth: {} }
  const router = {
    state: { location: { state: { from: redirect } } },
    navigate: jest.fn(),
  }

  test('when login resolve should follow the flow', async () => {
    services.auth.login = jest.fn().mockResolvedValue()

    await action(dispatch, undefined, { services, router })

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, authLoginPending())
    expect(services.auth.login).toHaveBeenCalledWith(credentials, rememberMe)
    expect(dispatch).toHaveBeenNthCalledWith(2, authLoginFulfilled())
    expect(router.navigate).toHaveBeenCalledWith(redirect)
  })
  test('when login rejects should follow the error flow', async () => {
    const error = new Error('Unauthorized')
    services.auth.login = jest.fn().mockRejectedValue(error)

    await action(dispatch, undefined, { services, router })

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, authLoginPending())
    expect(services.auth.login).toHaveBeenCalledWith(credentials, rememberMe)
    expect(dispatch).toHaveBeenNthCalledWith(2, authLoginRejected(error))
    expect(router.navigate).not.toHaveBeenCalledWith()
  })
})
