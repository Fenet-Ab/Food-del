import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
    console.log('Login attempt:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='login-popup-overlay' onClick={() => setShowLogin(false)}>
      <div className='login-popup' onClick={(e) => e.stopPropagation()}>
        <div className='login-popup-header'>
          <h2>Login</h2>
          <button 
            className='close-btn' 
            onClick={() => setShowLogin(false)}
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </div>
          
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              required
            />
          </div>
          
          <button type='submit' className='login-btn'>
            Login
          </button>
        </form>
        
        <div className='login-footer'>
          <p>Don't have an account? <span className='signup-link'>Sign up</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPopup