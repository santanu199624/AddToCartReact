import React from 'react'
import { Link, NavLink } from "react-router-dom"

import "./Header.css"
import { useCart } from '../../context/CartContext'

const Header = () => {

  const {cartList} = useCart()

  return (
    <nav>
      <Link to="/">
        <h1>ShopingCart</h1>
      </Link>
      <div className="nav_items">
        <NavLink to="/" className="nav_links">HOME</NavLink>
        <NavLink to="/cart" className="nav_links">CART</NavLink>
      </div>
      <div className="cart_links">
        <NavLink className="cart_items">Cart:{cartList.length}</NavLink>
      </div>
    </nav>
  )
}

export default Header
