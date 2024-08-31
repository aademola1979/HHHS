
import LeadersSection from "../components/partials/about-partial/LeadersSection";
import MissionSection from "../components/partials/about-partial/MissionSection";
import aeriel1 from '@../../public/images/premises/aeriel1.png';
import SectionLinkList from "../components/SectionLinkList";
import WelcomeContainer from "../components/WelcomeContainer";
import Introduction from "../components/partials/about-partial/Introduction";
import History from "../components/partials/about-partial/History";

const About = () => {

  const sectionLinkList = [
    
    {
      link:'#introduction',
      text:'Contact'
    },
    {
      link:'#nursery',
      text:'De-World Nursery and Primary School'
    },
    {
      link:'#secondary',
      text:'De-World International Secondary School'
    },
    {
      link:'#university',
      text:'De-World University'
    },
    {
      link:'#history',
      text:'Our History'
    },
    {
      link:'#mission',
      text:'Mission & Vision'
    },

    {
      link:'#coreValues',
      text:'Core Values'
    },
    {
      link:'#management',
      text:'Managment'
    }
  
  ]

  return (
    <>
     <WelcomeContainer welcomeImage={aeriel1}
     text='About Us'/>
      <SectionLinkList top='#introduction' data={sectionLinkList}
      />
      <Introduction />
      <History/>
      <MissionSection />
      <LeadersSection />

      
    </>
  )
}

export default About