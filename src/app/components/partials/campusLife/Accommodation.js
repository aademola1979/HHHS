import Wrapper from "../../Wrapper"
import nurse from "../../../../../public/images/nurse3.png";
import hostel1 from "../../../../../public/images/premises/hostel.png";
import hostel2 from "../../../../../public/images/premises/hostel2.png";
import hostel3 from "../../../../../public/images/premises/hostel3.png";
import Carousel from "../../Carousel";
import CarouselCard from "../../CarouselCard";
import Image from "next/image";
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer";

const Accommodation = () => {
  const imageList =[
    {
      image:hostel2
    },

    {
      image:hostel1
    },

    {
      image:hostel3
    },

    {
      image:nurse
    }
  ]
    return (
      <FadeInComponent
      id='accommodation'
        direction='left'
        delay={0.25}
        duration={1}
        viewport={{once: true }}
        type='tween'
        >
        <Wrapper
        introduction='Accommodation'
       introClassName='gradient-text'
       className='py-[4rem]'>
        
        <Carousel className=''>
          {
            imageList.map((img, i)=>(
              <CarouselCard
              i={i}
              className='relative h-fit'>
                <Image src={img.image}
                alt="accommodation"
                width={120}
                height={130}
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
  
  export default Accommodation