import { render } from '@testing-library/react'
import LoginPage from '../../Pages/auth/LoginPage'
import { Provider } from 'react-redux'

// Tira un error externo sobre 'axios' y me he quedado sin tiempo buscando en 'Stackoverflow' :)

describe('LoginPage', () => {
  const state = { ui: { pending: false, error: null } }
  const store = {
    dispatch: () => {},
    getState: () => state,
    subscribe: () => {},
  }
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    )

  test('snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
