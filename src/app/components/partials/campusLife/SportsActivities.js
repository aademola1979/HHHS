import Carousel from "../../Carousel";
import Wrapper from "../../Wrapper";
import basketball from "../../../../../public/images/sports/basketball.png"
import tennis from "../../../../../public/images/sports/tennis.png"

import runner2 from "../../../../../public/images/sports/runner1.png"
import runner1 from "../../../../../public/images/sports/runner2.png"
import runner3 from "../../../../../public/images/sports/runner3.png"
import field1 from "../../../../../public/images/sports/field.png"
import CarouselCard from "../../CarouselCard";
import Image from "next/image";
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer";
const SportsActivities = () => {
  const imageList = [
    
    {
      image:runner1
    },

    {
      image:runner2
    },

    {
      image:runner3
    },
    {
      image:tennis
    },
    {
      image:basketball
    },
   
    {
      image:field1
    }
  ]
    return (
      <FadeInComponent
      id='sportActivity'
      direction='left'
        delay={0.25}
        duration={1}
        viewport={{once:true}}
        type='tween'
      className="border-b-2 py-[4rem]">
          <Wrapper
          introduction='Sports Time on Campus'
          introClassName='gradient-text'
          className=''
          >
            <Carousel>
              {
                imageList.map((img, i)=>(
                  <CarouselCard
                  i={i}
                  className='relative h-fit'>
                    <Image src={img.image}
                    alt="sports" 
                    width={120} height={130}
                    className="min-w-full h-full"/>
                  <span className="absolute top-6 p-1 right-2
                    bg-[rgba(0,0,0,0.3)] text-white">
                      {`${i+1}/${imageList.length}`}
                    </span>
                  </CarouselCard>
                ))
              }
              
            </Carousel>

          </Wrapper>
  
      </FadeInComponent>
    )
  }
  
  export default SportsActivities