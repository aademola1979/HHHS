"use client"
import Link from "next/link"
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useNavContext } from "@/app/context/navigationContext";
import { NavLink } from "./NavLink";
import { LinkBtnComponent, SidebarNavComponent} from "../../AnimatedComponents/AnimatedContainer";
import { AnimatePresence } from "framer-motion";

const Nav = ({ nav }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  const { toggleSideBar } = useNavContext()
  return (
    <ul>

      <li>
        {
          !nav.subNav &&
          <>
            <LinkBtnComponent
            onClick={toggleSideBar}
              className="p-1">
              <Link href={nav.path} className="">
                {nav.navTitle}
              </Link>
            </LinkBtnComponent>
          </>
        }

        {
          nav.subNav &&
          <>
            <div className="grid grid-cols-2 cursor-pointer p-1 hover:bg-blue-600" onClick={toggleOpen}>
              <span>{nav.navTitle}</span>
              {
                open ? (<span className="text-xl pt-[.18rem]"><MdKeyboardArrowDown /></span>)
                  : (<span className="text-xl pt-[.18rem]"><MdKeyboardArrowRight /></span>)
              }
            </div>
            <AnimatePresence mode='wait'>
              <SidebarNavComponent
                direction='right'
                type='tween'
                duration={0.5}
                delay={0.25}
                className={`${open ? 'grid' : 'hidden'} py-2 bg-blue-700 rounded-md container`} onClick={toggleSideBar}>

                <LinkBtnComponent
                  className="p-1">
                  <Link href={nav.path} className="">
                    {nav.navTitle}
                  </Link>
                </LinkBtnComponent>

                <NavLink nav={nav} />
              </SidebarNavComponent>
            </AnimatePresence>

          </>
        }

      </li>

    </ul>
  )
}

export default Nav