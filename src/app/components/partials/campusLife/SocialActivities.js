import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer"
import Carousel from "../../Carousel"
import CarouselCard from "../../CarouselCard"
import Wrapper from "../../Wrapper"
import gathering2 from "../../../../../public/images/gathering/gathering2.png"
import gathering3 from "../../../../../public/images/gathering/gathering3.png"
import gathering1 from "../../../../../public/images/gathering/gathering1.png"
import Image from "next/image"



const SocialActivies = () => {

  const imageList = [
    {
      image:gathering1,
      description:"Watching news and educative movies"
    },

    {
      image:gathering3,
      description:'Acting and general entertainment'
    }
  ]
    return (
      <FadeInComponent
      id='socialActivity'
      direction='left'
        delay={0.25}
        duration={1}
        viewport={{once:true }}
        type='tween'
      className="py-[4rem] bg-blue-800">
          <Wrapper 
          introduction='Social Gathering Time'
          introClassName='gradient-text'
          className=''
          >
             <Carousel>
              { 
                imageList?.map((img, i)=>(
                  <CarouselCard
                  i={i}
                  className='relative h-fit'>
                    <Image src={img.image}
                    alt="sports" 
                    width={120} 
                    height={130}
                    className="min-w-full h-full"/>
                  <span className="absolute top-6 p-1 right-2
                    bg-[rgba(224,120,120,0.3)] text-white">
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
  
  export default SocialActivies