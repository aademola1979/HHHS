import { upcomingEvents } from "../../../public/data"
import EventCard from "../components/partials/home-partials/EventCard"

const events = () => {
  return (
    <section className='py-4 bg-slate-200'>
      <div className="container">
      <div className=" container px-5 flex flex-wrap">
        {
          upcomingEvents.map(data =>(
            <EventCard data={data} />
          ))
        }

      </div>

      </div>
      
    </section>
  )
}

export default events