import { navData } from "../../../../../../public/data"
import MyNavLink from "./MyNavLink"
import NavDropDown from "@/app/components/NavDropDown"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const AdmissionNav = () => {
  return (
      <>
          {
              navData.map((data, i) => (
                  data.nav && data.nav.map((data, i) => (
                      data.path === '/admission' &&
                      <li key={i} className="relative nav-list">
                        {
                            data.subNav ? (
                                <>
                                <span className='flex gap-1'>
                              <span>{data.navTitle}</span>
                              <span ><MdOutlineKeyboardArrowDown className="text-[1.5rem]" /></span>
                          </span>

                          <NavDropDown className='top-[3.4rem]'>
                              <ul className="min-w-[33.7rem]  grid gap-1">
                                  <li className="flex justify-center py-2 hover:bg-white hover:text-blue-800 min-w- 
                        full text-[1.2rem] p-2 font-bold"><MyNavLink path={data.path} text={data.navTitle} /></li>
                                  <ul className="flex justify-center">
                                  {
                                      data.subNav?.map((sub, i) => (
                                          <li key={i}
                                              className="px-4 hover:bg-white hover:text-blue-800  py-2">
                                              <MyNavLink path={sub.subNavPath}
                                                  text={sub.subNavTitle} />

                                          </li>

                                      ))
                                  }
                                  </ul>

                              </ul>

                          </NavDropDown>
                                </>
                                
                            ) : (
                            <>
                            <MyNavLink path={data.path}
                            text={data.navTitle} />
                            </>)
                        }
                          
                      </li>

                  ))

              ))
          }
      </>
  )
}

export default AdmissionNav