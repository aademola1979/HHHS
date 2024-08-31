'use client'
import Image from 'next/image';
import { useState } from 'react';
import { StaggerContainer, ZoomInComponent, ZoomOutComponent } from '../../AnimatedComponents/AnimatedContainer';
import SmallBtn from '../../SmallBtn';
const LifeCard = ({image, headline, description, time, i}) => {
    const [open, setOpen] = useState(false);

    const toggleOPen = () => setOpen(!open);
    return (
        <div key={i} className='w-[16.2rem] h-[15rem] flex-col flex border-[5px] rounded relative gap-3'>

            <div className='flex justify-center'>
                <Image src={image}
                    alt='Life on Campus'
                    height={250} width={250}
                    className='h-[14.3rem] min-w-full' />
            </div>
            <StaggerContainer className='absolute top-0 leff-0 cursor-pointer
        min-w-full min-h-full flex justify-center py-4 px-2
         text-white bg-[rgba(0,0,0,0.3)]'
                onClick={toggleOPen}
            >
                {!open
                    && <ZoomOutComponent
                       
                        delay={0.25}
                        duration={1}
                        type='spring'
                        viewport={{ once: true }}
                        className='grid justify-center 
           min-w-full self-center gap-8' >

                        <h1 className='uppercase'>{headline}</h1>
                        <p>See details</p>
                    </ZoomOutComponent>
                }
                {open
                    && <ZoomInComponent
                    
                        delay={0.25}
                        duration={2}
                        type='spring'
                        viewport={{ once: true }}
                        className='grid min-w-[80%] min-h-[90%] 
            justify-center gap-1 items-center bg-[rgba(0,0,0,0.5)]
            border-2 border-white pb-2'>
                        <h2 className=' flex text-[1rem]  justify-center'>{headline}</h2>
                        <div className='justify-center text-sm grid p-1' >
                            <p className='border-b-2'>
                               {description}
                            </p>
                            <p className='text-xs grid justify-center'>
                                {
                                time.map((time, i)=>(
                                    <span key={i}>{time}</span>
                                ))
                                }

                            </p>
                        </div>
                        <div className='min-w-full flex justify-center'>
                            <SmallBtn path='/campusLife'
                                text='See More'
                                className='bg-orange-500 text-white
            flex justify-center items-center'>
                            </SmallBtn>

                        </div>

                    </ZoomInComponent>}

            </StaggerContainer>

        </div>
    )
}

export default LifeCard