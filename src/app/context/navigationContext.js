"use client"

import {createContext, useContext, useState} from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = ({children})=>{
    const [openSideBar, setOpenSideBar] = useState(false);
    const [openInput, setOpenInput] = useState(false);
   
    
    const toggleSideBar = ()=>setOpenSideBar(!openSideBar);
   
    const toggleOpenInput = ()=>setOpenInput(!openInput)

    return (
        <NavigationContext.Provider value={{ openSideBar, toggleSideBar, 
        openInput, toggleOpenInput }}>
             {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContextProvider

export const useNavContext = ()=> useContext(NavigationContext)