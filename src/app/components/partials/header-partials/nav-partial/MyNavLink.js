import Link from "next/link"

const MyNavLink = ({path, text, className}) => {
  return (
    <Link href={path} className={`${className}`}>
        {text}
    </Link>
  )
}

export default MyNavLink