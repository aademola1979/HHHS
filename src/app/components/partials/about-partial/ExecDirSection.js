 
import man from '@../../public/images/man.jpg';
import Image from 'next/image';
import { FadeInComponent, StaggerContainer } from '../../AnimatedComponents/AnimatedContainer';
import Quote from '../../Quote';




const DirectorSection = () => {
  return (
    <div id='executive' className='container border-b-2 py-[4rem]'>
      <h2 className='flex justify-center py-4 h1 gradient-text'>Our Leaders</h2>
      <StaggerContainer
        className="section flex flex-col md:flex-row md:px-[5rem] gap-4 md:gap-[4rem] py-2">
          
        <FadeInComponent
          direction='up'
          delay={1}
          duration={1}
          viewport={{ once: true }}
          className='md:min-w-[10rem]'
        >
          <div className='container md:max-w-[35rem] w-full p text-gray-500'>
            <div className='p mb-2'>
              <span className='font-bold text-black'>Rev. Kevin Chukwudebelu Eze,</span> a God-fearing
                educationist, is the <span className='font-bold text-black'>founder, father, and overseer</span> of the schools.
                He estblished <span className='font-bold text-black'>De-World Secondary School International</span> in 1993. In his words, 
            </div>
            <Quote>
              My profound gratitude is to God, the Father of my 
              Lord Jesus Christ, Chairman of this great institution
               for making everything possible.
            </Quote> 
          </div>
        </FadeInComponent>
      </StaggerContainer>
    </div>
  )
}

export default DirectorSection