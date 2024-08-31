import Accordion from "../faqs-partial/Accordion"
import { admissionFaqsAndAnswer } from "../../../../../public/data"; 
import { ZoomInComponent } from "../../AnimatedComponents/AnimatedContainer"

const AdFaqs = () => {
    
  return (
    <section
    id="admissionFaqs"
     className="py-5 min-w-full">
        <ZoomInComponent
        delay={0.25}
        duration={1}
        viewport={{ once: true }}
        className='container'
        >
        <div className="flex justify-center">
            <h1 className="h1 gradient-text">Admission Frquently Asked Questions</h1>
        </div>
        <div>
        {
            admissionFaqsAndAnswer.map((questionAndAnswer, i)=>(
                <Accordion data={questionAndAnswer}
                i={i}/>
            ))
        }
        </div>
        </ZoomInComponent>
    </section>
  )
}

export default AdFaqs