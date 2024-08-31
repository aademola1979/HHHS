


import Nav from "./Nav"
import Button from "../../Button";
import Toggle from "../sidebar-partial/Toggle";
import HeaderSearch from "./HeaderSearch";
import SearchIcon from "./SearchIcon";
import NavLogo from "./nav-partial/NavLogo";
import {HeaderNavComponent, StaggerContainer } from "../../AnimatedComponents/AnimatedContainer";

const Combiner = () => {


  return (
    <StaggerContainer className="flex pt-4 justify-between h-full relative text-white px-4 md:px-[4rem] bg-blue-800">
      <HeaderSearch />
      <NavLogo />
      <Nav />
      <div className="nav-enquiry">
        <HeaderNavComponent
          className='inline'
        >
          <Button linkTo='/inquiry' className='inline' linkClassName='btn'>Contact Us</Button>
        </HeaderNavComponent>
      </div>
      <Toggle />
    </StaggerContainer>
  )
}

export default Combiner