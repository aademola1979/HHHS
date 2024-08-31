import { campusLife } from "../../../../../public/data"
import Wrapper from "../../Wrapper"
import LifeCard from "./LifeCard"


const LifeOnCampus = () => {
  return (
    <section
    id="lifeOnCampus" 
    className=" bg-blue-800/70 py-[4rem]">
      <Wrapper
      introduction='Life on Campus'
      className='mb-[1rem]'
      introClassName='py-[1rem] uppercase text-white'
      >
        <div className="flex gap-4 
        flex-wrap justify-center">
          {
            campusLife.map((data, i)=>(
              i <= 3 &&
              <LifeCard {...data} i ={i}/>
            ))
          }
        </div>

      </Wrapper>
      
    </section>
  )
}

export default LifeOnCampus