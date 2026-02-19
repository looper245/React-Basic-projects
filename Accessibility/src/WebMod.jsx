import { createContext, useState } from "react";

export const WebMod = createContext()

function WebSiteColorMod({children }){
    const [colorMod,setColor]=useState(false)
    return(
        <WebMod.Provider value={{colorMod,setColor}}>
            {children }
        </WebMod.Provider>
    )
}

export default WebSiteColorMod