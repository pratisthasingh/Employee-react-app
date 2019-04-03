import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup' style={{ textDecoration: 'none' }}>Signup</NavLink></li>
        <li><NavLink to='/signin' style={{ textDecoration: 'none' }}>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks