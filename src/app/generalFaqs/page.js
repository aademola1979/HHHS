import { faqsData } from "../../../public/data";
import FormCard from "../components/FormCard";
import Accordion from "../components/partials/faqs-partial/Accordion";
import InquiryForm from "../components/InquiryForm";




const generalFaqs = () => {
    return (
        <div className="min-w-full grid gap-0">
            <FormCard
                headline='Call: 07038032454'
                headlineClassName='h1'
                className='bg-slate-100 pt-4'
            >
                <div className="min-w-full sm:w-[550px] md:w-[640px]
                ">
                    {
                        faqsData.map((data, i) => (
                            <Accordion data={data}
                                i={i} />
                        ))
                    }
                </div>
            </FormCard>

            <FormCard
                className='bg-slate-100'
                headlineClassName='container h2'
                descriptionClassName='text-orange-500'>
                <div className='min-w-full sm:min-w-[550px] md:w-[640px]'></div>
                <div className="min-w-full -mt-4 mb-4 -mx-4 bg-[#0076ff] text-white">
                    <h1 className="h2 flex justify-center">
                        Do you have other questions?
                    </h1>
                    <h2 className="h3 flex justify-center">
                        Kindly fill this form and we will contact you.
                    </h2>

                </div>
                <InquiryForm />
            </FormCard>
        </div>
    )
}

export default generalFaqs