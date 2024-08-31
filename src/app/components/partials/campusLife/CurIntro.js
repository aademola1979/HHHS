import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer"
import Wrapper from "../../Wrapper"


const CurIntro = () => {
    return (
      <FadeInComponent
      direction='left'
        delay={0.25}
        duration={1}
        viewport={{once:true }}
        type='tween'
      className="pt-[4rem]">
        <Wrapper
        className=''
        introduction='Curricular Activities'
        introClassName='uppercase gradient-text mb-[1rem]'
        >
        <div className="grid gap-4 md:gap-8">
            <p className="p  pr-4 text-gray-700">
                De-World International Secondary School can boast of well-equipped modern learning facilities, 
                such as a well-stocked library,  well-equipped laboratries and classrooms with modern teaching aids 
                that can transorm any learner to a champion.
            </p>

            <p className="p pr-4 md:place-self-end text-gray-700">
              We believe in hands-on learning, learning by doing. 
              Every lesson is backed by a practical activity. 
            </p>
           
          </div>
  
        </Wrapper>
          
      </FadeInComponent>
    )
  }
  
  export default CurIntro