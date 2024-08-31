import { spaceFiller } from "../../../../../public/data"
import { ZoomOutComponent } from "../../AnimatedComponents/AnimatedContainer"
import SmallBtn from "../../SmallBtn"

const VisionSection = () => {
  return (
    <section id="vision" className="container py-[4rem]">
        <ZoomOutComponent
        delay={0.25}
        duration={1} 
        viewport={{ once: true }}
        className="container section py-2 pb-2">
        <h2 className="flex justify-center h1 gradient-text">Our Vision</h2>
        <div className="p text-gray-500">
            {spaceFiller.content}
            
        </div>
        <div className="flex justify-center">
        <SmallBtn text='Learn more' 
        path='/about/missionVision' 
        className='bg-orange-500 text-white 
        p py-1 px-2 mt-2'
        iconClassName=''/>
        </div>
        </ZoomOutComponent>
    </section>
  )
}

export default VisionSection