import { createContext, useState } from "react";

const centralData = createContext([])

function centralApiData({children}){
    const [dataApi,setDataApi]=useState([])
    return (
        <centralData.Provider value={{dataApi,setDataApi}}>
            {children}
        </centralData.Provider>
    )
}

export {centralData,centralApiData}