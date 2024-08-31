import Logo from "@/app/components/Logo"
import Link from "next/link"


const NavLogo = () => {
  return (
    <div className="flex gap-4">
        <Logo wrapperClassName='pb-2' imageClassName='h-[2.5rem] w-[2.5rem]' />
        <Link href='/'>
        <div className="flex flex-col pt-[1rem] sm:pt-0 sm:gap-0 gap-4 font-mono">
            <span className="text-xs sm:text-sm leading-[0rem]">GILGAL HEIGHT</span>
            <span className="text-xs sm:text-sm leading-[0rem]">HIGH SCHOOL</span>
      
        </div>
        </Link>
    </div>
  )
}

export default NavLogo