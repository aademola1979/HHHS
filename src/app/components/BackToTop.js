import { FaArrowUp } from "react-icons/fa6"

const BackToTop = () => {
  return (
    <a href="#header"
    className="fixed p-2 z-50 bottom-2 right-2 
    rounded-full p bg-orange-500 text-white"
    >
        <FaArrowUp/>
    </a>
  )
}

export default BackToTop