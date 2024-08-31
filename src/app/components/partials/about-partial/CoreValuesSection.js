import { spaceFiller } from "../../../../../public/data"
import { ZoomInComponent } from "../../AnimatedComponents/AnimatedContainer"
import SmallBtn from "../../SmallBtn"



const CoreValuesSection = () => {
  return (
    <section id="coreValues" className="bg-blue-800 px-2 md:px-4 py-[4rem]">
      <ZoomInComponent
      delay={0.25}
      duration={1}
      viewport={{ once: true }}
       className="container">
        <h2 className="flex justify-center h1 gradient-text">Our Core Values</h2>
        <div className=" flex gap-1 container">
            <p className="p text-white">
                {spaceFiller.content} 
            </p>
        </div>
        <div className="flex justify-center">
        <SmallBtn text='Learn more' 
        path='/about/coreValues' 
        className='bg-orange-500 text-white 
        p py-1 px-2 mt-2'
        iconClassName=''/>
        </div>
        </ZoomInComponent>
    </section>
  )
}

export default CoreValuesSection