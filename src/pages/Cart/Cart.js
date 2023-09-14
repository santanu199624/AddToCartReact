import React from 'react'


import "./Cart.css"
import CartCard from '../../components/CartCard/CartCard'
import useTitle from '../../hooks/useTitle'
import { useCart } from "../../context/CartContext"

const Cart = () => {

  const { total, cartList } = useCart()

  useTitle("Cart")
  

  // const products = [
  //   {
  //     id: 1,
  //     name: "Samsung",
  //     price: "23",
  //     image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },

  //   {
  //     id: 2,
  //     name: "Samsung",
  //     price: "23",
  //     image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },

  //   {
  //     id: 3,
  //     name: "Samsung",
  //     price: "23",
  //     image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   }
  // ]
  

  return (
    <main>
      <h1>Cart Items: {cartList.length} / {total}</h1>
      { cartList.map((product) => (
        <CartCard product={product} key={product.id} />
      )) }
    </main>
  )
}

export default Cart
