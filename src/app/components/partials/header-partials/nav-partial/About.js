import Link from "next/link"
import { navData } from "../../../../../../public/data"
import MyNavLink from "./MyNavLink"
import NavDropDown from "@/app/components/NavDropDown"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const About = () => {
  return (
        <>
            {
                navData.map((data, i) => (
                    data.nav && data.nav?.map((data, i) => (
                        data.path === '/about' &&
                        <li key={i} className="relative nav-list">
                            <span className='flex gap-1'>
                                 {
                                    !data.subNav && <Link href={data.path}>{data.navTitle}</Link>
                                 }

                                 {
                                    data.subNav && 
                                    (
                                        <>
                                    <span>{data.navTitle}</span>
                                <MdOutlineKeyboardArrowDown className="text-[1.5rem]" />
                                </> )
                                 }
                                
                                
                                    
                                
                                
                            </span>
                            {
                                data.subNav &&
                                <NavDropDown className='top-[3.4rem]'>
                                <ul className="min-w-[35rem] flex flex-col">
                                    <li className=" hover:bg-white hover:text-blue-800 py-2 flex justify-center
                         text-[1.2rem] font-bold border-b-2 border-b-gray-200"><MyNavLink path={data.path} text={data.navTitle} />
                                    </li>
                                    <ul className="flex justify-center">
                                    {
                                        data.subNav?.map((sub, i) => (
                                            <li key={i}
                                            className="px-4 flex py-2 justify-center hover:bg-white hover:text-blue-800">
                                                <MyNavLink path={sub.subNavPath}
                                                    text={sub.subNavTitle} />

                                            </li>

                                        ))
                                    }
                                    </ul>
                                    

                                </ul>

                            </NavDropDown>
                            }

                            
                        </li>

                    ))

                ))
            }
        </>
    )
}

export default About