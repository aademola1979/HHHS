
import { parentComments } from "../../../../../public/data";
import Carousel from "../../Carousel";
import CarouselCard from "../../CarouselCard";
import Quote from "../../Quote";
import Wrapper from "../../Wrapper";
const LearnersBlogs = () => {




  return (
    <section
    id="learnersBlogs"
     className="px-2 bg-blue-500 md:py-10 py-5">
      <Wrapper 
      introduction="Learners' Blog Articles" 
      introClassName='uppercase text-white'
      className="container">
        
        <Carousel className={``}>
        {
            parentComments.map((data, i)=>(
              <CarouselCard i={i} className="">
              <div className="grid p-1 min-w-full
              ">
              <Quote>
                {data.comment}
              </Quote>
              <p className="pt-2 gradient-text 
              min-w-full flex justify-center p">{data.name}</p>
            </div>
            <p className="absolute top-2 right-2 text-white
            flex justify-center items-center p rounded-sm
            h-[2rem] w-[2rem] bg-[rgba(0,0,0,0.4)]">
              {`${1+i}/${parentComments.length}`}
            </p>
            </CarouselCard>

            ))
          }
        </Carousel>
        
          
          
    </Wrapper>
    </section>
  )
}

export default LearnersBlogs