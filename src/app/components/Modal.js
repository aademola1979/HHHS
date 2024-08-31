import { AiFillCloseCircle } from "react-icons/ai"
import { FadeInComponent, StaggerContainer } from "./AnimatedComponents/AnimatedContainer";

const Modal = ({children, open, toggleOpen}) => {

    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') toggleOpen();

    }


  return (
      <StaggerContainer className={`${open ? 'block' : 'hidden'} z-20
        bg-black backdrop-blur bg-opacity-25 fixed min-w-[100vw] min-h-[100vh] left-0 top-0 inset-0
        container overflow-y-scroll no-scrollbar flex flex-col justify-center items-center`}
        id="wrapper" onClick={handleClose}>
          
          <FadeInComponent
          direction='down'
          type='tween'
          delay={0.25}
          duration={0.5} className="relative">
          <span  className="absolute top-4 right-5 text-gray-500 h1 cursor-pointer" onClick={toggleOpen}>
              <button className="text-[2.5rem] hover:text-gray-400">
                  <AiFillCloseCircle />
              </button>
          </span>
              {children}
          </FadeInComponent>
      </StaggerContainer>
  )
}

export default Modal