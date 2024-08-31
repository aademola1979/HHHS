import Wrapper from "../../Wrapper";
import lib1 from "../../../../../public/images/libReading2.png";
import lib2 from "../../../../../public/images/libReading.png";
import students from "../../../../../public/images/studentsReading.png";
import Carousel from "../../Carousel";
import CarouselCard from "../../CarouselCard";
import Image from "next/image";
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer";

const PrepTime = () => {

  const imageList = [
    {
      image:lib1,
      description:"Individual studies, assignments and projects"
    },
    
    {
      image:lib2,
      description: 'Reading for pleasure'
    },
    {
      image:students,
      description:'Discussion and group work'
    },
  ]
    return (
      <FadeInComponent
      id='prepTime'
      direction='left'
        delay={0.25}
        duration={1}
        viewport={{once:true }}
        type='tween'
      className="py-[4rem] bg-blue-800">
          <Wrapper
          introduction='Prep Time' 
          introClassName='gradient-text'
          className=''
          >
            <Carousel>
              {
                imageList.map((img, i)=>(
                  <CarouselCard
                  className='relative h-fit'
                  key={i}>
                    <Image src={img.image}
                    alt="students reading"
                    height={130} width={120}
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
  
  export default PrepTime