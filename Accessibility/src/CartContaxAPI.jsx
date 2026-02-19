import { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

export const CartContax = createContext()


function MyContaxFun({children}){
    let getCartData = sessionStorage.getItem('cart')
    const [data,SetData]=useState(getCartData?JSON.parse(getCartData):[])
    useEffect(()=>{
        sessionStorage.setItem('cart',JSON.stringify(data))
    },[data])
    return (
        <CartContax.Provider value={{data,SetData}}>
            {children}
        </CartContax.Provider>
    )
}

export default MyContaxFun