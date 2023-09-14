import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { NavLink } from 'react-router-dom'

import { useCart } from '../../context/CartContext'

const ProductCard = ({product}) => {

  const { addToCart, cartList, removeFromCart } = useCart()

  const [isInCart, setIsInCart] = useState(false)

  const{id,name,price, image} = product

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id)
    if(productIsInCart){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    }
  },[cartList, id])

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="card_content">
        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
        {isInCart ? <button className='remove_btn' onClick={() => removeFromCart(product)} >Remove</button> : <button className='add_to_cart' onClick={() => addToCart(product)} >Add to Cart</button> }
        
        
      </div>
    </div>
  )
}

export default ProductCard
