'use client'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { LinkBtnComponent, StaggerContainer } from "./AnimatedComponents/AnimatedContainer";
const SectionLinkList = ({data, top}) => {
    const [open, setOpen] = useState(false);

    const toggleOPen = () => setOpen(!open);
    return (
        <div className="container py-1 
          ">
            <div onClick={toggleOPen}
                className="cursor-pointer p pr-[5rem] 
                flex justify-between bg-blue-800 p-2">
                <span className="block gradient-text p">Links to Contents</span>
                <span className="text-[1.5rem] md:text-[2rem] text-red-500">
                    {
                        open ? (<MdKeyboardArrowDown />) 
                        : (<MdKeyboardArrowRight />)
                    }
                </span>

            </div>
            <StaggerContainer>
                {open && (
                    <ul className="container ">
                        {data.map((singleLink, i)=>(
                            <li key={i} className={`${singleLink.link === top ?'quote-color' : 'text-indigo-950'} border-b-2 py-1 border-gray-400`}>
                                <LinkBtnComponent>
                                <a href={singleLink.link} >
                                    {singleLink.text}
                                </a>
                                </LinkBtnComponent>  
                            </li>
                        ))}
                    </ul>
                )
                }
            </StaggerContainer>
        </div>
    )
}

export default SectionLinkList