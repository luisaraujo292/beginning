'use client'

import React from 'react'

function ProductCard(props) {
  const handleClick = () => {
    alert(`Added ${props.product.name} to cart!`)
  }
  return(
    <div className="product-card">
      <img src={props.product.name} alt={props.product.name}></img>
      <h2>{props.product.name}</h2>
      <p>Price: ${props.product.price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}

function App() {
  const product = {
    name: 'Laptop',
    price: '999,00',
    image: 'laptop.jpg'
  }
  return <ProductCard product={product}></ProductCard>
}

export default App