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
