
import Wrapper from "../../Wrapper"

import bioLab1 from "../../../../../public/images/labs/bioLab1.png"
import bioLab2 from "../../../../../public/images/labs/bioLab2.png"
import chemLab from "../../../../../public/images/labs/chemLab.png"
import computerLab2 from "../../../../../public/images/labs/computerLab2.png"
import physicsLab from "../../../../../public/images/labs/physicsLab.png"
import classroom from "../../../../../public/images/classroom.png"

import Carousel from "../../Carousel"
import CarouselCard from "../../CarouselCard"
import Image from "next/image"
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer"


const LearningTime = () => {

  const imageList =[
    {
      image:classroom
    },
    {
      image:bioLab1
    },

    {
      image:bioLab2
    },

    {
      image:chemLab
    },

    {
      image:computerLab2,

    },

    {
      image:physicsLab
    }
  ]


    return (
      <FadeInComponent 
      id='learningTime'
      direction='left'
        delay={0.25}
        duration={1}
        viewport={{once:true }}
        type='tween'
      className=" border-b-2 pt-[4rem] pb-[] mt-[1rem] bg-blue-800">
          <Wrapper
          introduction='Lesson Time'
          introClassName='gradient-text'
          className=''>
            <Carousel
            className=''>
              {
                imageList.map((img, i)=>(
                  <CarouselCard
                  i={i}
                  className='relative h-fit'>
                    <Image src={img.image} 
                    width={120}
                    height={130}
                    alt="lessons"
                    className="h-full w-full"/>
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
  
  export default LearningTime