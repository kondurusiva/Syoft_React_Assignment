import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const handleLogin = e => {
    e.preventDefault()
    const signupData = JSON.parse(localStorage.getItem('signupData'))
    if (
      signupData &&
      signupData.user_email === email &&
      signupData.user_password === password
    ) {
      localStorage.setItem('user', JSON.stringify(signupData))
      history.push('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
