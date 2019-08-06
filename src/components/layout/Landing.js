import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <header>
        <h1>Flash Study Landing Page</h1>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </header>
    </div>
  )
}

export default Landing
