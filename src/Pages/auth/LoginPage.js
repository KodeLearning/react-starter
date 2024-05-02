import { useState } from 'react'
import { login } from './service'

export default function LoginPage({ onLogin }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await login({
      email,
      password,
    })
    onLogin(true)
  }

  const { email, password } = formValues
  const buttonDisabled = !email || !password
  return (
    <div>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
