
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer";
import {GiCheckMark} from 'react-icons/gi';

const MissionSection = () => {
  return (
    <section id="mission" className="px-2 md:px-4 py-[4rem] bg-blue-800">
      <FadeInComponent
      direction='up'
      delay={0.25}
      duration={1}
      viewport={{ once: true }}
      type='tween'
      className="container">
      <h2 className="h1 gradient-text mb-[1rem] flex justify-center">Our Vision and Mission</h2>
        <div className="">
            <ul className="p grid gap-8 text-white">
              <li className="grid gap-2 visionList grid-cols-2">
                <span className="pt-1 quote-color"><GiCheckMark /></span>
                <p>
                  To build foundation for young generation, 
                  whose aspiration and quest are to labour and achieve
                  success.

                </p>
              </li>
              <li className="grid gap-2 visionList grid-cols-2">
                <span className="pt-1 quote-color"><GiCheckMark /></span>
                <p>
                  To secure a generation with the resolve to conquer
                  even in the midst of seeming overwhelming challenge.

                </p>
              </li>
              <li className="grid gap-2 visionList grid-cols-2">
                <span className="pt-1 quote-color"><GiCheckMark /></span>
                <p>
                  To educate and develop the child with great sciencesof purpose and responsibility;
                  equip the students to become transformative teachers with ethical living
                  and training desire to accomplish desired objectives.

                </p>
              </li>

              <li className="grid gap-2 visionList grid-cols-2">
                <span className="pt-1 quote-color"><GiCheckMark /></span>
                <p>
                  To nurture great teachers with integrity and respect
                  for themselves and others.

                </p>
              </li>
              
                   
            </ul>
        </div>

      </FadeInComponent>
        
    </section>
  )
}

export default MissionSection