import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"

const Quote = ({children, className}) => {
  return (
    <div className={`${className}`}>
        <p className="md:text-[3rem] text-[2rem] flex
              justify-start 
              min-w-full quote-color bg-white">
                <BiSolidQuoteAltLeft className=" bg-white"/>
                </p>
              <div className="p text-gray-600 px-5  min-w-full
              "> 
              {children}
              </div>
              <p className="md:text-[3rem] text-[2rem] 
              flex justify-end
              min-w-full quote-color bg-white">
                <BiSolidQuoteAltRight className=" bg-white"/>
                </p>
    </div>
  )
}

export default Quote