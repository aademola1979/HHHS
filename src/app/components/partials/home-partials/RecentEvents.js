import Image from "next/image"
import {recentEvents } from "../../../../../public/data"
import Link from "next/link"
import Wrapper from "../../Wrapper"
import Carousel from "../../Carousel"




const RecentEvents = () => {
    
  return (
    <section id="recentEvents" className="max-w-[100vw] bg-slate-100 grid gap-4 py-[4rem]">
      <Wrapper introduction='Recent events' introClassName='uppercase gradient-text'className="container">
      <Carousel className="px-2 py-2 md:py-6 gap-2 sm:gap-5">
        {
          recentEvents.map((event, i)=>(
           
              <div key={i} className="min-w-[20rem] bg-white py-4 snap-start shadow-md rounded-md grid gap-1">
                <h1 className="h2 p-1 min-w-full flex justify-center gradient-text2">
                  {event.headline}
                </h1>
                <div className="grid gap-1">
                  <div className="min-w-full p-1">
                    <Image src={event.leadImage} alt="event"
                    height={230} width={130}
                    className="min-w-full h-[10rem]"/>
                  </div >
                  <div className="min-w-full px-2">
                    <p className=" text-gray-700 max-h-[5rem] py-1
                    overflow-y-hidden text-sm">
                      {event.description} 
                    </p>
                    <span className="py-2 cursor-pointer gradient-text">
                      <Link href='/'>... click to continue reading </Link>
                    </span>
                  </div>

                </div>
              </div>
            
          ))
        }
      </Carousel>
      </Wrapper>
    </section>
    

  )
}

export default RecentEvents