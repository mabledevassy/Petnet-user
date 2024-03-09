import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Home/>
      <div className="nav-logo">
      <img src= {logo}alt="" />
        <p>PETNET</p>
      </div>
      <div className="nav-login-cart">
       <Link to='/login'><button>Sign Up</button></Link> 
       </div>
       
    </div>
  )
}

export default Navbar
