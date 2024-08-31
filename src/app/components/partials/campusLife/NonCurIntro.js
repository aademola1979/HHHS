import React from 'react'
import Wrapper from '../../Wrapper'
import { FadeInComponent } from '../../AnimatedComponents/AnimatedContainer'

const NonCurIntro = () => {
  return (
    <FadeInComponent
    direction='left'
        delay={0.25}
        duration={1}
        viewport={{once:true }}
        type='tween'
        className='pt-[4rem]'>
        <Wrapper
        introduction='Home Away from home'
        introClassName='uppercase gradient-text'
        >
            <div>
            <p className="p  pr-4 text-gray-700">
                    As a full boarding school, we are aware that we are more than a school, we are also a home. 
                    We, therefore, maintains excellent hostel facilities with standard primary health 
                    facilities and qualified medical personnel. 
                    The hostels are carefully designed to be secure, comfortable and attractive. 
                    Each hostel is under the watch of hostel parents.
                    Also, close to 100% of the staff live in the staff quarters inside 
                    the school. Therefore, our students are 24/7 under the watch and guidance of staff, who are always happy to 
                    provide supports for the students when necessary. 
                </p>
            </div>
        </Wrapper>
    </FadeInComponent>
  )
}

export default NonCurIntro