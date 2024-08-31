import Wrapper from "../../Wrapper"
import vocational1 from "../../../../../public/images/vocational/vocational1.png"
import vocational2 from "../../../../../public/images/vocational/vocational2.png"
import vocational3 from "../../../../../public/images/vocational/vocational3.png"
import Carousel from "../../Carousel"
import CarouselCard from "../../CarouselCard"
import Image from "next/image"
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer"

const Vocational = () => {
    const imageList = [
        {
            image:vocational1
        },
        {
            image:vocational2
        },
        {
            image:vocational3
        }
    ]
  return (
    <FadeInComponent
    id='vocational'
    direction='left'
        delay={0.25}
        duration={1}
        viewport={{ once: true }}
        type='tween'
    className="border-b-2 py-[4rem]">
        <Wrapper
        introduction='Vocational training'
        introClassName='capitalize gradient-text'>
            <Carousel
            className=''>
                {
                    imageList.map((img, i)=>(
                        <CarouselCard
                        className='relative'>
                            <Image src={img.image} 
                            alt='vocational'
                            height={130} width={120}
                            className="h-full min-w-full"/>
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

export default Vocational