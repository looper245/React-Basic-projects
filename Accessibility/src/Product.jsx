import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { CartContax } from './CartContaxAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setDescription } from './Redux/DescriptionSlice'
import { WebMod } from './WebMod'
export default function Product(props) {

  // to Deliver Description Page
  let navigate = useNavigate()

  // Hide Description Button in description component
  let location = useLocation()
  let path = location.pathname

  // Load Description data in sessionStorage 
  let product = useSelector(state => state.description.product)
  let dispatch = useDispatch()




  // Load Card Data in sessionStorage
  const { data, SetData } = useContext(CartContax)
  let cart = []
  function cartFun() {
    let cartObj = {
      image: props.image,
      name: props.name,
      category: props.category,
      description: props.description,
      price: props.price,
    }
    cart.push(cartObj);
    SetData(prev => [...prev, cartObj])
  }



  let { colorMod, setColor } = useContext(WebMod)

  return (
       <main style={{ background: colorMod ? '#15181d' : 'white', border: colorMod ? '2px solid #3A3F45' : '2px solid black' ,marginTop:'10px'}} className=' w-60
    border-2
    rounded-[1rem]
    hover:translate-y-3
    flex flex-col 
    '> 
        <div className="product-img flex justify-center" >
          <img  className='w-50 h-50 ' src={props.image} alt="" />
        </div>
          <div style={{ backgroundColor: colorMod ? '#292525' : '#3a0473',padding:'10px' }} className=" product-info h-full rounded-b-xl hover:bg-blue-800 bg-blue-900 text-white p">
          <section className='h-10 flex flex-col gap-4'>
            <h2 className="name" style={{color:colorMod?'#B0B3B8':'#E6E8EB'}}>{props.name}</h2>
          </section>
          <section className=' h-10 '>
            <h2 className="brand" style={{color:colorMod?'#8A8F98':'#E6E8EB'}}>{props.category}</h2>
          </section>
          <section className='h-20 '>
            <h3 className="description">{props.description}</h3>
          </section>
          <section className='h-10'>
            <h3  className="price bg-yellow-500 w-15 text-center rounded-lg text-black font-bold p-1">{props.price}</h3>
          </section>
          <section className=' h-10 flex gap-5 '>         
            {path == '/' && <button style={{ backgroundColor: colorMod ? '#000000' : '#FFFFFF', color: colorMod ? 'white' : 'black' }} tabIndex={props.num} onClick={() => cartFun()} className='bg-black w-full rounded-lg font-bold outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-500'
          >Cart</button>}


            {path == '/' && <button style={{ backgroundColor: colorMod ? '#000000' : '#FFFFFF', color: colorMod ? 'white' : 'black' }} tabIndex={props.num} className='bg-black w-full rounded-lg font-bold outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-500'
          onClick={() => {
            dispatch(setDescription({
              image: props.image,
              name: props.name,
              category: props.category,
              description: props.description,
              price: props.price,
              }))
              navigate('/description')
              }}>Description</button>}

          </section>
          </div>
      </main> 
  )
}
