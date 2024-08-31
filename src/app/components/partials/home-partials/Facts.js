import { factData } from "../../../../../public/data"
import { StaggerContainer } from "../../AnimatedComponents/AnimatedContainer";
import Wrapper from "../../Wrapper"
import FactCard from "./FactCard"


const Facts = () => {
  return (
    <section id="facts" className="min-w-full bg-indigo-800 text-white py-[4rem]">
       <Wrapper  introduction='Fact' introClassName='text-white uppercase mb-4 text-mono' className=''>
        <StaggerContainer className="container flex flex-wrap justify-center items-center">
            {
              factData.map((fact, i)=>(
                <FactCard
                key={i}
                {...fact} />
              ))
            }
        </StaggerContainer>
        </Wrapper>
    </section>
  )
}

export default Facts