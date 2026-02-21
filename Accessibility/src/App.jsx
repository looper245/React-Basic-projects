import { useEffect, useState, useContext, useMemo } from 'react'
import { fetchProducts } from './Redux/Slice'
import { SearchContax } from './SearchContax'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { useNavigate } from 'react-router-dom'
import ProductSkeleton from './ProductSkeleton'
import { centralData } from './centralData'

function App() {

  let { data, loading, error } = useSelector((state) => state.product)
  console.log(data.map((item)=>{
    console.log(item);
    
  }));



  let getProductdata = useDispatch()

  useEffect(() => {
    getProductdata(fetchProducts())
  }, [getProductdata])

  let num = 5

  const { searchData, SetSearchData } = useContext(SearchContax)


  let productData = useMemo(() => {
    if (searchData) {
      return data.filter(t => t.title.includes(searchData))
    } else {
      return data

    }
  })

  console.log(searchData);
  
  
  

  


  return (
    <>
      <div className="product-container flex  flex-wrap gap-5 justify-center  ">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))
          : productData.map((item, i) => (
           <Product
           title={item.title}
           category={item.category.name}
           categoryImg={item.category.image}
           slug={item.slug}
           price={item.price}
           />
          ))
        }
      </div>
    </>
  )
}

export default App
