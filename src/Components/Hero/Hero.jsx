import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image  from '../Assets/hero_image.png'
import Logo from '../Logo/Logo'

import Popular from '../Popular/Popular'


const Hero = () => {
  return (
    <div>
        <Logo/>
    <div className='hero'>
    
      <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className="hero-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="" />

    </div>
    <p>categories</p>
    <p>of pets</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Pets</div>
    <img src={arrow_icon} alt="" />
</div>
      </div>
      <div className="hero-right">
<img src={hero_image} alt="" />
      </div>
      </div>
      <Popular/>
    </div>
  )
}

export default Hero
