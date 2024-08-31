
import FormCard from "../components/FormCard"
import InquiryForm from "../components/InquiryForm"
import Logo from "../components/Logo"

const inquiry = () => {
  


  return (
    <section className="">
      <FormCard 
      headlineClassName='h1'
        className='min-h-screen bg-slate-100'
        headline='Enquiry Form'
        descriptin='Fill the form below for us to contact you.'
        descriptionClassName='mt-5'
        logo={<Logo imageClassName='min-h-[5rem] my-5 min-w-[5rem]'/>}>

        <InquiryForm />
      </FormCard>

    </section>
  )
}

export default inquiry