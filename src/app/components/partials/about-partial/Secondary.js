import { FaLocationDot } from "react-icons/fa6"
import { FadeInComponent, StaggerContainer } from "../../AnimatedComponents/AnimatedContainer"
import Wrapper from "../../Wrapper"
import studentGroup from "../../../../../public/images/studentGroup2.png";
import Welcome from "../../Welcome";

const Secondary = () => {
  return (
    <div className="flex-1 py-[4rem] border-b-[5px] " id="secondary">
      <StaggerContainer
       className="gap-4 grid md:flex container">
      <FadeInComponent
      direction='up'
      type='tween'
      delay={0.25}
      duration={1}
      viewport={{ once: true }}
       className="grid border-0 md:border-r-2
       border-orange-500
        w-full md:w-[50%]">
        
        <Wrapper introduction='De-Wold International Secondary School' introClassName='gradient-text' className="grid min-w-full gap-4">
          <div>
            <p className="p text-gray-700">
              De-World International Secondary School (aka DWISS) is a fully
              accredited, full boarding, co-educational private school.
            </p>
          </div>
          <div className="mt-[2rem]">
            <h1 className="h1 pt-4 flex justify-center gap-2 mb-[1rem]">
              <span className="gradient-text">Location</span>
              <span className="text-orange-600"><FaLocationDot /></span>
            </h1>
            <p className="p text-gray-700">
              Km 16, Aba/Port Harcourt Express Way,
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
        image={studentGroup}
        imageClassName='min-w-full min-h-full' />
      </FadeInComponent>
      </StaggerContainer>
    </div>
  )
}

export default Secondary