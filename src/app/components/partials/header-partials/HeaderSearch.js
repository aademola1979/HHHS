"use client"

import Search from "../../Search";
import { useContext } from "react";
import { NavigationContext } from "@/app/context/navigationContext";
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer";

const HeaderSearch = () => {
    const {openInput} = useContext(NavigationContext)
  return (
    <FadeInComponent
    delay={0.25}
    duration={0.5}
    type='tween'
    className={`${openInput ? 'md:block' : 'hidden'} 
    hidden absolute top-6 right-[20rem] max-w-full w-[50%] h-[100%] `}
    >
      <Search className={``} />
    </FadeInComponent>
  )
}

export default HeaderSearch