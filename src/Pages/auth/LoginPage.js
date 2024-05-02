import { login } from './service'

export default function LoginPage({ onLogin }) {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await login({
      email: e.target.email.value,
      password: e.target.password.value,
    })
    onLogin(true)
  }

  return (
    <div>
      <h1>Log in to Wallapoop</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
