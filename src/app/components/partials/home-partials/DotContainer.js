import { MdCircle } from "react-icons/md"

const DotContainer = ({homeWelcomeData, currentIndex, jumpToData}) =>{
  return (
    <div className="flex justify-center min-w-full z-[5] min-h-[2rem] gap-2 items-center glassmorphism absolute bottom-0">
      {
        homeWelcomeData.map((dot, dotIndex)=>(
          <div key={dotIndex} 
            className={`${currentIndex === dotIndex ? "text-[#ff552b]" : "text-white"} cursor-pointer`}
            onClick={()=>jumpToData(dotIndex)}>
                    <MdCircle className=" w-2 h-2 md:w-4 md:h-4"/>
          </div>
        ))
      }
    </div>
  )
}

export default DotContainer