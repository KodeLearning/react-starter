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
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }))

    resetError()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await login(
        {
          email,
          password,
        },
        rememberPassword
      )
      setIsLoading(false)

      onLogin(true)
      const to = location.state?.from || '/'
      navigate(to)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  const resetError = () => setError(null)

  const { email, password, rememberPassword } = formValues
  const emptyForm = !email || !password || isLoading
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
        <Button type="submit" $variant="primary" disabled={emptyForm}>
          Log in
        </Button>
      </form>

      {error && <div className="loginPage-error">{error.message}</div>}
    </Layout>
  )
}
