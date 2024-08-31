
import aeriel1 from '@../../public/images/premises/schoolBuilding.png';
import Image from 'next/image';
import { StaggerContainer, ZoomInComponent, ZoomOutComponent } from '../../AnimatedComponents/AnimatedContainer';
import Link from 'next/link';


const Welcome = () => {
  return (
    <StaggerContainer
    id='welcome'
      className="container py-[4rem] min-w-full">
      <div className='mb-[2rem] container'>
        <h1 className='h1 flex  gradient-text3 uppercase justify-center'>de-world international secondary school welcomes you. </h1>
      </div>

      <div className='container flex flex-col md:flex-row gap-2 md:gap-[5rem]'>
        <ZoomOutComponent delay={0.25} duration={1.25} viewport={{ once: true }}
          className="md:pl-[2rem] text-gray-600 max-w-full flex flex-col md:max-w-[45%]">
          <p className='p'>
            We are pleased to have you take a virtual tour of 
            our serene school environment and world-class facilities. 
             We are certain you will be pleased to have glimpses 
             of our engaging daily academic and social activities, 
            and in particular our unique curriculum. <br/>
             <span className='inline'> If you have 
            any question, please <Link href='/inquiry' className='p gradient-text'>contact us</Link>
            </span>
            .
          </p>
        </ZoomOutComponent>
        <ZoomInComponent delay={0.25} duration={1.25} viewport={{ once: true }}
          className='relative md:mt-[5rem] mt-4'>
            <div className='absolute top-0 left-0 min-w-full min-h-full bg-[rgba(40,20,10,0.2)]' />
          <Image src={aeriel1} alt='campus' height={350} width={450}
            className='min-w-full md:min-w-[55%] h-[20rem] md:min-h-[25rem] shadow-md rounded-md' />
        </ZoomInComponent>
      </div>
    </StaggerContainer>
  )
}

export default Welcome