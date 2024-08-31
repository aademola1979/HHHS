"use client"

import {  useNavContext } from "../context/navigationContext";
import CloseButton from "./partials/sidebar-partial/CloseButton";
import Search from "./Search";
import InquiryHolder from "./partials/sidebar-partial/InquiryHolder";
import { navData } from "../../../public/data";
import SidebarList from "./partials/sidebar-partial/SidebarList";
import Logo from "./Logo";
import {AnimatePresence } from "framer-motion";
import { SidebarNavComponent, StaggerContainer } from "./AnimatedComponents/AnimatedContainer";

const SideBar = () => {
  const {openSideBar, toggleSideBar} = useNavContext();
  
  const handleSidebarContainer = (e) =>{
    if(e.target.id === 'navContainer'){
      return toggleSideBar()

    }
  }
    
  
  return (
    
      <StaggerContainer className=' bg-black min-w-[100vw]'>
        <div className=" bg-black min-w-[100vw]">
        <AnimatePresence mode="wait">
          { openSideBar && (
          <SidebarNavComponent
          onClick={handleSidebarContainer}
          id='navContainer'
          className={`sidebar grid
          fixed h-[100vh] z-50 w-full pb-5 bg-[rgba(0,0,0,0.4)] top-[0px] 
          left-[0px] text-white overflow-y-scroll no-scrollbar`}
              >
            <div className="sm:max-w-[70%] pb-4 grid pt-4 max-w-full overflow-y-scroll no-scrollbar h-[100vh] opacity-100 bg-blue-800">
              <div className="flex justify-between mb-4 container">
                <span onClick={toggleSideBar}><Logo imageClassName='min-w-[3rem] min-h-[3rem]' ClassName=""/></span>
                
                <CloseButton toggleSideBar={toggleSideBar}/>
              </div>
              <div className="container">
              <Search className='pr-5' inputClassName='px-1'/> 
              </div>
              
      
              <div className="mt-4">
              {
                navData.map((data, i)=>(
                  <div key={i}>
                    <SidebarList sidebarItem={data}/>
                  </div>))  
              }
            </div>
            <InquiryHolder toggleSideBar={toggleSideBar}/>
            </div>
            
           
      
            
      
          </SidebarNavComponent>
        )

          }
    
    </AnimatePresence>
    </div>
    </StaggerContainer>
    
  )
}

export default SideBar