import { FadeInComponent, StaggerContainer } from "../../AnimatedComponents/AnimatedContainer"
import { FaLocationDot } from "react-icons/fa6"
import Wrapper from "../../Wrapper"
import Welcome from "../../Welcome"
import nursery from "../../../../../public/images/nursery.png";

const NurseryAndPrimary = () => {
  return (
    <div className="bg-blue-800 py-[4rem] text-white border-b-[5px]" 
    id="nursery">
      <StaggerContainer
       className="gap-4 grid md:flex container">
      <FadeInComponent
      direction='up'
      type='tween'
      delay={0.25}
      duration={1}
      viewport={{ once: true }}
       className="border-0 md:border-r-2
       border-orange-500
        w-full md:w-[50%]">
        
        <Wrapper
        introduction='De-Wold International Nursery and Primary School'
         introClassName='gradient-text'
         className="grid min-w-full  gap-4">
          <div>
            <p className="p">
              De-World International Nursery and Primary School is a fully
              accredited, co-educational private school.
            </p>
          </div>
          <div className="mt-[2rem]">
            <h1 className="h1 flex justify-center pt-4 mb-[1rem] gap-2">
              <span className="gradient-text">Location</span>
              <span className="text-orange-600"><FaLocationDot /></span>
            </h1>
            <p className="p">
              DWISS is located at Km 16, Aba/Port Harcourt Express Way,
              Rumuokwurusi, Port Harcourt, Rivers State, Nigeria.
            </p>
          </div>
        </Wrapper>
      </FadeInComponent>
      <FadeInComponent
      direction='left'
      type='tween'
      delay={0.25}
      duration={1}
      viewport={{ once: true }}
      className=' min-w-full md:min-w-[50%]'
      >
        <Welcome
        image={nursery}
        imageClassName='w-full max-h-[20rem]' />
      </FadeInComponent>
      </StaggerContainer>
    </div>
  )
}

export default NurseryAndPrimary