import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer"
import Wrapper from "../../Wrapper"


const CoIntro = () => {
  return (
    <FadeInComponent
    direction='left'
        delay={0.25}
        duration={1}
        viewport={{once:true }}
        type='tween'
        className='py-[4rem]'>
        <Wrapper 
        introduction='Co-curricular Activities'
        introClassName='uppercase gradient-text'
        className=''
        innerClassName='block md:grid md:items-between'>
        
        <p className="p text-gray-700">
            At De-World International Secondary School, learning is not 
           restricted to classrooms, the library or laboratries. We believe learning is not just about reading and performing laboratry 
          experiments. Co-curricular activities, such as physical exercise
            and social gatherings, are necessary for all-round development. 
            We therefore organise sports activities twice a week and social gatherings twice a week.
            </p>
           
              
        </Wrapper>
    </FadeInComponent>
  )
}

export default CoIntro