import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
export default function Description() {
  let product = useSelector(state => state.description.product)
  if (!product) {
    return <h2>No product selected</h2>
  }
console.log(product.name);

  return (
    <>
        <Product 
          image={product.image}
          name={product.name}
          category={product.category}
          description={product.description}
          price={product.price}
        />
    </>
  )
}
