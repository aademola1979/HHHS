
import aeriel1 from '@../../public/images/premises/aeriel1.png';
import SectionLinkList from '../components/SectionLinkList';
import SportsActivities from '../components/partials/campusLife/SportsActivities';
import SocialActivies from '../components/partials/campusLife/SocialActivities';
import Accommodation from '../components/partials/campusLife/Accommodation';
import LearningTime from '../components/partials/campusLife/LearningTime';
import PrepTime from '../components/partials/campusLife/PrepTime';
import WelcomeContainer from '../components/WelcomeContainer';
import CurIntro from '../components/partials/campusLife/CurIntro';
import CoIntro from '../components/partials/campusLife/CoIntro';
import NonCurIntro from '../components/partials/campusLife/NonCurIntro';
import { FadeInComponent, StaggerContainer } from '../components/AnimatedComponents/AnimatedContainer';
import Vocational from '../components/partials/campusLife/Vocational';


const campusLife = () => {
  const sectionLink = [
    {
      text: 'Lesson Time',
      link: '#learningTime'
    },

    {
      text: 'Vocational Activities',
      link: '#vocational'
    },

    {
      text: 'Prep Time',
      link: '#prepTime'
    },

    {
      text: 'Sports Time on Campus',
      link: '#sportActivity'
    },

    {
      text: 'Social Activities',
      link: '#socialActivity'
    },
    {
      text: 'Campus Accommodation',
      link: '#accommodation'
    }
  ]
  return (
    <>
      <WelcomeContainer
        welcomeImage={aeriel1}
        text='Life on Campus' />

      <SectionLinkList top='#learningTime' data={sectionLink} />
      <section className='grid relative'>
        <section className='' id='learning'>
          <StaggerContainer className='container grid md:flex '>
            <FadeInComponent
              direction='up'
              delay={0.25}
              duration={1}
              type='tween'
              className='w-full md:w-[40%] '>
              <CurIntro />
            </FadeInComponent>
            <FadeInComponent
              direction='right'
              delay={0.25}
              duration={1}
              type='tween'
              className='bg-slate-100 w-full md:w-[60%] border-b-4'>
              <LearningTime />
              <Vocational />
              <PrepTime />
            </FadeInComponent>
          </StaggerContainer>
        </section>

        <section className=''>
          <StaggerContainer className='container grid md:flex '>
            <FadeInComponent
              direction='up'
              delay={0.25}
              duration={1}
              type='tween'
              className='w-full md:w-[40%]'>
              <CoIntro />
            </FadeInComponent>
            <FadeInComponent
              direction='right'
              delay={0.25}
              duration={1}
              type='tween'
              className='bg-slate-100 w-full md:w-[60%] border-b-4'>
              <SportsActivities />
              <SocialActivies />
            </FadeInComponent>
          </StaggerContainer>
        </section>

        <section className='border-b-4'>
          <StaggerContainer className='container grid md:flex '>
            <FadeInComponent
              direction='up'
              delay={0.25}
              duration={1}
              type='tween'
              className='w-full md:w-[40%]'>
              <NonCurIntro />
            </FadeInComponent>
            <FadeInComponent
              direction='right'
              delay={0.25}
              duration={1}
              type='tween'
              className='bg-slate-100 w-full md:w-[60%] border-b-4'>
              <Accommodation />
            </FadeInComponent>
          </StaggerContainer>
        </section>
         
      </section>

    </>
  )
}

export default campusLife