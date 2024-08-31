
import aeriel1 from '@../../public/images/premises/aeriel1.png';
import SectionLinkList from '../components/SectionLinkList';
import Process from '../components/partials/admission-partials/Process';
import Policy from '../components/partials/admission-partials/Policy';
import AdFaqs from '../components/partials/admission-partials/AdFaqs';
import WelcomeContainer from '../components/WelcomeContainer';

const admission = () => {
  const sectionLink = [
    {
      text:'Admission',
      link: '#admission'
    },
    {
      text:'Admission Policy',
      link: '#admissionPolicy',
    },

    {
      text:'Admission Process',
      link: '#admissionProcess'
    },

    {
      text:'Admission FAQs',
      link: '#admissionFaqs'
    }
  ]
  return (
    <>
      <WelcomeContainer welcomeImage={aeriel1}
      text='Admission Matters'/>
      <SectionLinkList
      top='#admission'
       data={sectionLink}/>
       <section id='admission' className='grid md:flex gap-2 bg-slate-200'>
       <Process />
       <Policy />

       </section>
       
       <AdFaqs />
      
    </>
  )
}

export default admission