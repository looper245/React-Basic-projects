import { createContext, useEffect, useState } from "react";

export const SearchContax = createContext()


function MyContaxSearchFun({children}){
    const [searchData,SetSearchData]=useState('')
 
    return (
        <SearchContax.Provider value={{searchData,SetSearchData}}>
            {children}
        </SearchContax.Provider>
    )
}

export default MyContaxSearchFun