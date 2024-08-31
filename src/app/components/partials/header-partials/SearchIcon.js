"use client"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { NavigationContext } from "@/app/context/navigationContext";

const SearchIcon = () => {
    const {openInput, toggleOpenInput} = useContext(NavigationContext)
  return (
    <span className="mr-3 inline text-white" onClick={toggleOpenInput}>
            {
              openInput ? (<AiOutlineClose className="mr-3 text-2xl inline cursor-pointer"/>) 
              : (<AiOutlineSearch className="mr-3 text-2xl inline cursor-pointer"/>)
            }
            
    </span>
  )
}

export default SearchIcon