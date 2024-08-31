
import Link from "next/link";
import { LinkBtnComponent } from "../../AnimatedComponents/AnimatedContainer";
import { useNavContext } from "@/app/context/navigationContext";

export const NavLink = ({nav}) => {
  const {toggleSideBar} = useNavContext();
  return (
    <>
    {
        nav.subNav?.map((sub, i)=>(
          <LinkBtnComponent 
          onClick={toggleSideBar}>
            <Link 
            onClick={toggleSideBar}
                href={sub.subNavPath} 
                className="container rounded-sm p-2 
                            min-w-[100%]">
                {sub.subNavTitle}
            </Link>
          </LinkBtnComponent>
            
            ))
    }
    </>
  )
}
