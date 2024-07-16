import React from 'react'

import {useHistory} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/login')
  }

  if (!user) {
    history.push('/login')
    return null
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.user_firstname}!</h1>
      <div className="user-info">
        <p>
          <strong>Email:</strong> {user.user_email}
        </p>
        <p>
          <strong>Company:</strong> {user.user_company}
        </p>
        <p>
          <strong>Phone::</strong> {user.user_phone}
        </p>
        <p>
          <strong>City:</strong> {user.user_city}
        </p>
        <p>
          <strong>Zip Code:</strong> {user.user_zipcode}
        </p>
        {/* Add more user information as needed */}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
