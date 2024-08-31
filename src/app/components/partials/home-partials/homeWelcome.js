"use client"
import { useState, useRef, useEffect } from "react";
import { homeWelcomeData } from "../../../../../public/data";
import Welcome from "../../Welcome";
import ArrowsContainer from "./ArrowsContainer";
import SmallBtn from "../../SmallBtn";
import { SlidingVaraintComponent, StaggerContainer, TextContainer, TextVariant } from "../../AnimatedComponents/AnimatedContainer";


const homeWelcome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = homeWelcomeData.length;
    const timeout = useRef(null);


    useEffect(
        ()=>{
            const nextData = ()=>{
                setCurrentIndex(currentIndex => (currentIndex === length - 1 ? 0 : currentIndex + 1))
            }

            timeout.currentIndex = setTimeout(nextData, 10000)

            return function(){
                if(timeout.currentIndex){
                    clearTimeout(timeout.currentIndex)
                }
            }
        }, [length, currentIndex])


        const goToPreviousData = () => {
            if(timeout.currentIndex){
                clearTimeout(timeout.currentIndex)
            }

            setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
        }

        const goToNextData = () => {
            if(timeout.currentIndex){
                clearTimeout(timeout.currentIndex)

                setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
            }
        }

        if(!Array.isArray(homeWelcomeData) || homeWelcomeData.length <= 0) {return null}

  return (
    <StaggerContainer
    id='homeWelcome' className=" relative min-h-[22rem] bg-white">
        <ArrowsContainer
            goToNextData={goToNextData}
            goToPreviousData={goToPreviousData}
            rightClassName='md:bottom-2 md:right-[40rem] xl:right-[70rem] bottom-1/2 right-6'
            leftClassName='md:bottom-2 md:left-2 bottom-1/2 left-2'
         />  
                {
                 homeWelcomeData.map((singleWelcome, index)=>(
                <SlidingVaraintComponent
                 key={index} className={`${index === currentIndex ? " bg-blue-800 md:bg-white welcome-container" : "hidden"} bg-blue-800 grid`}>
                    <div className=" ">
                    <Welcome image={singleWelcome.image}
                    imageClassName='h-[22rem] min-w-full'
                    className='h-[22rem] relative'>
                        <div className='absolute top-0 left-0 min-w-full min-h-full bg-[rgba(40,20,10,0.2)]' />

                        <p className="absolute top-2 right-5 text-white py-1 px-2 rounded-sm z-10 bg-[rgba(0,0,0,0.3)]">{`${currentIndex+1}/${length}`}</p>
                    </Welcome>

                    </div>
                    
                    <div className="hidden bg-orange-400 h-[22rem]
                     min-h-[15rem] md:flex justify-center py-2">
                        <TextContainer 
                            className='max-w-fit h-full hidden 
                            sm:grid justify-center text-white'>
                            <TextVariant className='max-w-[25rem] mb-2 grid gap-2 p-4'>
                                <h1 className="h1 flex justify-center">{singleWelcome.headline}</h1>
                                <p className="p"> {singleWelcome.description}</p>
                                <div className="flex justify-center">
                            <SmallBtn 
                            path={singleWelcome.link} 
                            text={singleWelcome.btnText}
                            className='bg-blue-800 self-end p capitalize text-white flex justify-center md:w-[10rem] w-[8rem] items-center py-1 pl-2'
                            iconClassName='text-white p'/>
                            </div> 
                            </TextVariant>
                        </TextContainer>
                        </div>

                    <div className="min-h-[10rem] md:hidden bg-orange-400  relative text-white  grid justify-center pt-3">
                        <div className="container grid">
                            <h1 className="h2 px-5 flex justify-center  "> 
                            {singleWelcome.headline}
                            </h1>
                            <div>
                                <p className="p">{singleWelcome.description}</p>
                            </div>
                            <div className="flex self-end justify-center">
                            <SmallBtn 
                            path={singleWelcome.link} 
                            text={singleWelcome.btnText}
                            className='bg-blue-800 p capitalize flex my-2 justify-center w-[8rem] items-center py-1 pl-2'
                            iconClassName='text-white p'/>

                            </div>
                            
                        </div>
                        
                    </div>
                </SlidingVaraintComponent>
            ))
        }
        

    </StaggerContainer>
  )
}

export default homeWelcome