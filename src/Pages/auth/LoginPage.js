import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './context'
import { login } from './service'
import Layout from '../../Components/layout/Layout'
import Button from '../../Components/form/Button'

export default function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { onLogin } = useAuth()

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

    const to = location.state?.from || '/'
    navigate(to)
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
        <Button type="submit" $variant="primary">
          Log in
        </Button>
      </form>
    </Layout>
  )
}
