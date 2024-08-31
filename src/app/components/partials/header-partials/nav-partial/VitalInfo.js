import { navData } from "../../../../../../public/data"
import MyNavLink from "./MyNavLink"
import NavDropDown from "@/app/components/NavDropDown"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
  
  const VitalInfo = () => {
    const bucket = []

    
    return (
        <>
            {
                navData.map((data, i) => (
                    data.nav && 
                    <li key={i} className="nav-list relative">
                        <span className="flex gap-1">
                            <span>{data.text}</span>
                            <span><MdOutlineKeyboardArrowDown className="text-[1.5rem]"/></span>
                        </span>
                        <NavDropDown className='top-[3.4rem] grid min-w-[30rem]'>             
                        {
                            data.nav?.map((data, i) => (
                               !( data.path === '/about' || data.path === '/admission') &&
                                (<ul key={i} className="">
                                    <li className="px-4 hover:bg-white hover:text-blue-800 min-w- 
                        full text-[1.2rem] p-2 font-bold">
                                        <MyNavLink path={data.path} text={data.navTitle}/>
                                    </li>
                                    <ul className="">
                                        {
                                            data.subNav?.map((sub, i)=>(
                                                <li key={i} className="px-4 hover:bg-white hover:text-blue-800 min-w-full p-2">
                                                    <MyNavLink path={sub.subNavPath} text={sub.subNavTitle}/>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </ul>)
                    
                            ))
                        } 

                        </NavDropDown> 

                    </li>
                ))
            }
        </>
    )
  }
  
  export default VitalInfo
