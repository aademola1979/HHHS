'use client'


import {useNavContext } from "@/app/context/navigationContext";
import Home from "./nav-partial/Home";
import About from "./nav-partial/About";
import AdmissionNav from "./nav-partial/AdmissionNav";
import { FadeInComponent} from "../../AnimatedComponents/AnimatedContainer";
import CampusLink from "./nav-partial/CampusLink";
import BlogArticles from "./BlogArticles";

const Nav = () => {
  const {openInput} = useNavContext()
  return (
    <FadeInComponent
   
    type='tween'
    delay={0.5}
    duration={0.25}

      className={`${openInput ? 'hidden' : 'nav'} h-full relative`}>
      <ul className="flex h-full px-1 pt-4 gap-4 font-sans text-base">
        <Home />
        <About />
        <AdmissionNav />
        <CampusLink />
        <BlogArticles />
      </ul>
    </FadeInComponent>
  )
}

export default Nav