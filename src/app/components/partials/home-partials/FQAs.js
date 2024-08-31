import { faqsData } from "../../../../../public/data"
import Accordion from "../faqs-partial/Accordion"
import SmallBtn from "../../SmallBtn"




const FQAs = () => {
    return (
        <section id="faqs" className="grid bg-slate-200 py-5 gap-5 py-[4rem]">
            <div className="grid justify-center min-w-full ">
                <h1 className="h1 gradient-text flex justify-center">Do you have questions?</h1>
                <h2 className="h2 gradient-text3">See answers to Frequently Asked Questions (FAQs) below: </h2>
            </div>
            <div className="container">
                {
                    faqsData.map((data, i)=>(
                         i <= 4 && (
                            <Accordion data={data}
                       i={i} /> 
                        ) 
                    ))
                }
            </div>
            <div className="min-w-full flex justify-center">
                <SmallBtn
                path='/generalFaqs'
                text='See More'
                className='bg-orange-500 py-1 px-2 text-white p'
                iconClassName='font-xl' />
                
            </div>
        </section>
    )
}

export default FQAs