'use client'
import Link from "next/link"
import{ MdKeyboardArrowRight } from "react-icons/md";
import { LinkBtnComponent } from "./AnimatedComponents/AnimatedContainer";

const SmallBtn = ({path, text, className, iconClassName}) => {
  return (
    <LinkBtnComponent
    className={`${className} rounded-md px-1 min-w-fit font-mono flex`}>
            <Link href={path} className="">{text} </Link> 
            <span className={`${iconClassName} pt-[.4rem] md:pt-[6px] p-1`}><MdKeyboardArrowRight /></span>
    </LinkBtnComponent>
  )
}

export default SmallBtn