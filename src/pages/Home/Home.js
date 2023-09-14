import React from 'react'
import ProductCard from "../../components/ProductCard/ProductCard"

import "./Home.css"
import useTitle from '../../hooks/useTitle'

const Home = () => {

  useTitle("Home")

  const products = [
    {
      id: 1,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 2,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 3,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 4,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 5,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 6,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 7,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 8,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
      id: 9,
      name: "Samsung",
      price: "23",
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]

  return (
    <main className='products'>
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }
    </main>
  )
}

export default Home
