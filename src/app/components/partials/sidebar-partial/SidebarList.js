"use Client"
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import Nav from "./Nav";
import { useContext } from "react";
import { NavigationContext } from "@/app/context/navigationContext";

const SidebarList = ({sidebarItem}) => {
   const {toggleSideBar} = useContext(NavigationContext)

  return (
      <ul className="container">
          <li  className="grid gap-4">
              {
                !sidebarItem.nav ? (
                    <Link href={sidebarItem.url} className="flex gap-2 mb-4" onClick={toggleSideBar}>
                    <span>{sidebarItem.text}</span>
                    <span>{
                        sidebarItem.url === '/' && <AiFillHome />
                        }  
                    </span>
                    </Link> 
                ):(sidebarItem.nav && sidebarItem.nav?.map((nav, i)=>(
                    <ul key={i}>
                    <Nav nav ={nav} />
                    </ul>
                )))
              }
          </li>
      </ul>
  )
}

export default SidebarList