import { useContext, useState } from 'react'
import { login } from './service'
import Layout from '../../Components/layout/Layout'
import { AuthContext } from './context'

export default function LoginPage() {
  const { onLogin } = useContext(AuthContext)

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await login(
      {
        email,
        password,
      },
      rememberPassword
    )
    onLogin(true)
  }

  const { email, password, rememberPassword } = formValues
  return (
    <Layout>
      <h1>Log in to Wallapoop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <input
          type="checkbox"
          value="1"
          name="rememberPassword"
          onChange={handleChange}
        />{' '}
        Remember password
        <button type="submit">Log in</button>
      </form>
    </Layout>
  )
}
