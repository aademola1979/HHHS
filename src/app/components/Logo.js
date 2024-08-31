import Link from 'next/link'

const Logo = ({wrapperClassName, imageClassName}) => {
  return (
    <div className={`flex gap-2 ${wrapperClassName}`}>
      <Link href='/' className={`${imageClassName} bg-white text-sm rounded-full flex justify-center text-blue-800 items-center`}>
     
    </Link>
    </div>

    
  )
}

export default Logo