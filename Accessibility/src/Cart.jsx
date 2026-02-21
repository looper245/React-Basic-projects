import React from 'react'
import Product from './Product';

export default function Cart() {
  let getCartData = JSON.parse(sessionStorage.getItem('cart'))

  return (
    <div className='flex flex-wrap gap-5 p-10'>
      {getCartData.map((item, i) => (
        <Product key={i}
            category={item.category}
           categoryImg={item.categoryImg}
          title={item.title}
          slug={item.slug}
          price={item.price}
        />
      ))}
    </div>
  )
}
