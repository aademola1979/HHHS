"use client"
import { useContext } from "react";
import { NavigationContext } from "@/app/context/navigationContext";

const Toggle = () => {
    const {toggleSideBar} = useContext(NavigationContext);
  return (
      <button onClick={toggleSideBar} className="toggle-sidebar">
          <div className="mb-0 text-2xl 
             text-white cursor-pointer px-2 
            hover:text-blue-700 hover:bg-white rounded-md">&#9776;
          </div>
      </button>

  )
}

export default Toggle