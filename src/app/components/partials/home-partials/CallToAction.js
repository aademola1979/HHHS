 import SmallBtn from "../../SmallBtn";
import Welcome from "../../Welcome"
import action from '@../../public/images/action.svg';

const CallToAction = () => {
  return (
    <div 
    id="callToAction"
    className="bg-white">
        <Welcome image={action}
        imageClassName='max-h-[26rem] min-w-full'>
          <div className="gap-5 sm:flex 
          grid container
          sm:justify-between pt-[5rem] justify-center
          text-indigo-950 md:px-[5rem] px-[1rem]">  
            <SmallBtn 
            text='Inquire' 
            path='/inquiry'
            className='max-w-fit text-white
             bg-orange-500 rounded-2xl py-2 px-11 p'
             iconClassName='p pb-1'/> 

          <SmallBtn 
            text='Apply Online' 
            path='/application'
            className='text-white bg-indigo-800 
            rounded-md py-2 px-4 p max-w-fit'/> 
          </div>
         
         </Welcome>

    </div>
  )
}

export default CallToAction