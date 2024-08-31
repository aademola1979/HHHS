import Link from "next/link";

const Button = ({className, children, linkTo, linkClassName}) => {
  return (
    <div className={`${className}`}>
        <Link 
        href={`${ linkTo }`} 
        className={`${linkClassName}text-white bg-orange-300 border-4
         hover:border-x-orange-400 hover:border-y-white border-y-orange-400 btn-sm`}>
          {children}
        </Link>
    </div>
  )
}

export default Button