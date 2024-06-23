import { AUTH_LOGIN_PENDING } from '../actionTypes'
import { authLogin, authLoginPending } from '../actions'

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
  const action = authLogin(credentials)

  const redirect = 'redirect'
  const dispatch = jest.fn()
  const services = { auth: {} }
  const router = {
    state: { location: { state: { from: redirect } } },
    navigate: jest.fn(),
  }

  test('when login resolve should follow the flow', async () => {
    services.auth.login = jest.fn().mockResolvedValue()

    action(dispatch, undefined, { services, router })
  })
  test('when login rejects should follow the error flow', () => {
    const error = new Error('Unauthorized')
    services.auth.login = jest.fn().mockRejectedValue(error)
  })
})
