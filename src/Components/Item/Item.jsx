import React, { useEffect, useState } from 'react'

import './Item.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import axios from 'axios'

const Item = (props) => {

  console.log(props)



  const navigate = useNavigate()


  const handleClick = (id) => {

    console.log(id)
    navigate(`/view/${id}`)

  }

  return (
    <div className='item'>
      <div className="item-listing-details">
        <img src={props.image} alt="" />
        <h3>{props.subcategory}</h3>
        <p className='t'>{props.category}</p>

        <div className="item-price-new">
          &#8377;{props.price}
        </div>
        <Button onClick={() => handleClick(props.id)} variant="contained" >View</Button>

      </div>
    </div>
  )
}

export default Item
