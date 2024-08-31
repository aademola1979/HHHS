import { FadeInComponent, StaggerContainer } from "../../AnimatedComponents/AnimatedContainer"
import { FaLocationDot } from "react-icons/fa6"
import Wrapper from "../../Wrapper";
import univeristy from "../../../../../public/images/university.png";
import Welcome from "../../Welcome";

const University = () => {
  return (
    <div className="py-[4rem] border-b-[5px] bg-blue-800 text-white"
     id="university">
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
        
        <Wrapper
        introduction='De-Wold University'
        introClassName='gradient-text'
        className="grid min-w-full gap-4 py-[1rem]">
          <div>
            <p className="p">
              De-World University is a proposed
              unversity currently under-going accreditation processes 
              with Nigerian University Commission (NUC). It promises to be 
              one of the best private universities in Nigeria when fully 
              accredited.
            </p>
          </div>
          <div className="mt-[2rem]">
            <h1 className="h1 pt-4 flex justify-center gap-2 mb-[1rem]">
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
        image={univeristy}
        imageClassName='min-w-full min-h-[20rem]' />
      </FadeInComponent>
      
      </StaggerContainer>
    </div>
  )
}

export default University