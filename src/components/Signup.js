import React, {useState} from 'react'
import axios from 'axios'
import {useHistory, Link} from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_lastname: '',
    user_email: '',
    user_phone: '',
    user_password: '',
    user_city: '',
    user_zipcode: '',
    user_company: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const history = useHistory()

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://syoft.dev/Api/user_registeration/api/user_registeration',
        formData,
      )
      if (response.status === 200) {
        localStorage.setItem('signupData', JSON.stringify(formData))
        history.push('/login')
      }
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="welcome-section">
          <h1>Welcome to our community</h1>
          <p class="par">
            Fuse helps developers to build organized and well-coded dashboards
            full of beautiful and rich modules. Join us and start building your
            application today.
          </p>
          <p class="par">More than 17k people joined us, it’s your turn</p>
        </div>
        <div className="form-section">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/e_improve:indoor/apvjhcbxn0kqhy3vhbhp.jpg"
            className="image"
            alt="Profile"
          />
          <form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
            <div className="form-group">
              <label htmlFor="user_firstname">First Name *</label>
              <input
                type="text"
                name="user_firstname"
                id="user_firstname"
                value={formData.user_firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_lastname">Last Name *</label>
              <input
                type="text"
                name="user_lastname"
                id="user_lastname"
                value={formData.user_lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email address *</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_phone">Phone Number *</label>
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_password">Password *</label>
              <div style={{position: 'relative'}}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="user_password"
                  id="user_password"
                  value={formData.user_password}
                  onChange={handleChange}
                  required
                />
                <i
                  className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}
                  id="togglePassword"
                  onClick={toggleShowPassword}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                  }}
                ></i>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="user_city">City *</label>
              <input
                type="text"
                name="user_city"
                id="user_city"
                value={formData.user_city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_zipcode">Zip Code *</label>
              <input
                type="text"
                name="user_zipcode"
                id="user_zipcode"
                value={formData.user_zipcode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_company">Company *</label>
              <input
                type="text"
                name="user_company"
                id="user_company"
                value={formData.user_company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="terms">
              <input type="checkbox" required />
              <label>
                I agree to the <Link to="/terms">Terms of Service</Link> and{' '}
                <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>
            <button type="submit" className="button">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
