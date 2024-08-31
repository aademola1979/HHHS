"use client"
import { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Welcome from "./Welcome";
import DotContainer from "./partials/home-partials/DotContainer";
import ArrowsContainer from "./partials/home-partials/ArrowsContainer";
import { SlidingVaraintComponent, SlidingVariantComponent2, StaggerContainer } from "./AnimatedComponents/AnimatedContainer";





const Slider = ({currentIndex, imageClassName, setCurrentIndex, data, interval, className}) => {
    
    const length = data.length;
    const timeout = useRef(null);


    useEffect(
        ()=>{
            const nextData = ()=>{
                setCurrentIndex(currentIndex => (currentIndex === length - 1 ? 0 : currentIndex + 1))
            }

            timeout.currentIndex = setTimeout(nextData, interval)

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

        const jumpToData = (dataIndex) => { return setCurrentIndex(dataIndex)}
         

        if(!Array.isArray(data) || data.length <= 0) {return null}

  return (
    <div className="relative h-[25rem]">
        <ArrowsContainer
            goToNextData={goToNextData}
            goToPreviousData={goToPreviousData}
         />
         <StaggerContainer  className='relative h-[25rem] bg-blue-400'>
            
         <AnimatePresence mode="wait">
                {
            data.map((single, index)=>(
                        index === currentIndex && (
                    <SlidingVaraintComponent
                    direction='right'
                    duration={1}
                 key={index} 
                 className={`${className} bg-blue-400 justify-between
                  flex`}>
                    <Welcome
                    image={single.image}
                    imageClassName={imageClassName}
                    className='min-w-full'
                    />
                </SlidingVaraintComponent>
                        ) 
            ))
        }
         </AnimatePresence>
        </StaggerContainer>
       { <DotContainer 
            homeWelcomeData={data}
            currentIndex={currentIndex}
            jumpToData={jumpToData} />}
            

    </div>
  )
}

export default Slider