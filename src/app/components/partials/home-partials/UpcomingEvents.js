import { upcomingEvents } from "../../../../../public/data"
import Carousel from "../../Carousel"
import SmallBtn from "../../SmallBtn"
import { FadeInComponent, StaggerContainer } from "../../AnimatedComponents/AnimatedContainer"
import EventCard from "./EventCard"

const UpcomingEvents = () => {
 
  return (
    <FadeInComponent 
    id='upComingEvents'
      direction='right'
      type='tween'
      delay={0.25}
      duration={0.7}
      viewport={{ once: true }}
      className="flex-2 pt-2 md:pt-[5rem] md:min-w-[55%] 
      max-w-full" >
      <div className="pb-5 md:py-8  grid gap-2
     bg-blue-800 sm:rounded-md">
        <StaggerContainer className="bg-blue-800 md:rounded-md">
          <Carousel className='flex flex-wrap gap-5
          justify-center bg-blue-800 container
         '>
            {
              upcomingEvents.map((data, i ) => (
                i <= 1 &&
                  <EventCard 
                  index = {i}
                  data = {data}/>
                )
              )
            }

          </Carousel>
        </StaggerContainer>

        <div className="flex justify-center">
        <SmallBtn path='/events'
          text='See More'
          className='py-1 px-2 rounded-md bg-orange-500 
          text-white'/>
      </div>
      </div>
      

    </FadeInComponent>
  )
}

export default UpcomingEvents