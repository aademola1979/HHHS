     
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const ArrowsContainer = ({rightClassName, leftClassName, goToPreviousData, goToNextData}) => {
  return (
    <>
    <div className={`${leftClassName} absolute z-[15]
     text-white text-[2.5rem]  
      rounded-full glassmorphism cursor-pointer`} 
            onClick={goToPreviousData}>
              <MdKeyboardArrowLeft className=""/>
          </div>
          <div className={`${rightClassName} absolute z-[15]
           text-white text-[2.5rem] glassmorphism
             rounded-full] cursor-pointer rounded-full`}
            onClick={goToNextData}>
              <MdKeyboardArrowRight />
          </div>
        

    </>
  )
}

export default ArrowsContainer