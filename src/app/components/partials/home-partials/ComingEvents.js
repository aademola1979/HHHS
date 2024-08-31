
import { StaggerContainer, ZoomInComponent } from "../../AnimatedComponents/AnimatedContainer";
import UpcomingEvents from "./UpcomingEvents";
import { upcomingEventIntro } from "../../../../../public/data";


const ComingEvents = () => {
  return (
    <section
    id="comingEvent"
     className="py-[4rem] container">
      <div className="container grid gap-4 py-5">
        <div className="grid mb-[1rem]">
          <h1 className="h1 mb-[1rem] flex uppercase justify-center gradient-text">Upcoming Events</h1>
          <StaggerContainer className="md:flex grid gap-1 md:gap-2 md:justify-between" id="event-container">
            <UpcomingEvents />
            <ZoomInComponent
              direction='left'
              delay={0.25}
              type='tween'
              duration={1}
              viewport={{ once: true }}
              className="p text-gray-500 container flex-1 min-w-[35%] max:w-full">
              <p>{upcomingEventIntro.intro}</p>
            </ZoomInComponent>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default ComingEvents