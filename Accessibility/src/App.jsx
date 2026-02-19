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
  let a = data.filter(t=>t.id==1).map((item)=>(
    console.log(item)
    
  ))
  console.log(a);
  
  let getProductdata = useDispatch()

  useEffect(() => {
    getProductdata(fetchProducts())
  }, [getProductdata])

  let num = 5

  const { searchData, SetSearchData } = useContext(SearchContax)


  let ProductData = useMemo(() => {
    if (searchData) {
      return data.filter(t => t.name.includes(searchData))
    } else {
      return data
    }
  })








  return (
    <>
      <div className="product-container flex  flex-wrap gap-5 justify-center  ">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))
          : ProductData.map((item, i) => (
            <Product key={i}
              image={item.image}
              name={item.name}
              category={item.category}
              description={item.description}
              price={item.price}
              num={++num}
            />
          ))
        }

      </div>
    </>
  )
}

export default App
