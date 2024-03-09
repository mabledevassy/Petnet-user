import React from 'react'
import Navbar from '../Navbar/Navbar'
import showcase_image from "../Assets/showcase.png"
import './Home.css'

const Home = () => {
  return (
    <div className='hero'> 
      <img src={showcase_image} alt="" />
    </div>
  )
}

export default Home
