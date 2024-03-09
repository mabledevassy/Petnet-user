import React from 'react'
import './Logo.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
   
      <div className='navbar'>
      
      <div className="nav-logo">
      <img src= {logo}alt="" />
        <p>PETNET</p>
      </div>
      <button className='button'><Link to='/login'>Logout</Link></button>
    </div>
  )
}

export default Logo
