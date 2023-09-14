import React from 'react'
import { useCart } from '../../context/CartContext'

import "./CartCard.css"

const CartCard = ({ product }) => {

  const { removeFromCart } = useCart()

  const{ name, image, price} = product
  
  return (
    <div className='cartCard'>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
      <p>Price: ${price}</p>
      <button className='remove_btn' onClick={() => removeFromCart(product)} >Remove</button>
    </div>
  )
}

export default CartCard
