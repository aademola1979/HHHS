
import Image from "next/image";
import { StaggerContainer } from "./AnimatedComponents/AnimatedContainer";


const Welcome = ({image, veil, className, imageClassName, children, once}) => {
  return (
      <div className={`${className} relative max-h-fit`}>
        {image && <Image src={image} height={150} width={250} alt="banner" 
        className={`${imageClassName}`} />
        }
          <div className={`absolute top-0 left-0 max-h-[50%] z-10 min-w-full ${veil}`}>
              <StaggerContainer
              viewport={{ once:false, amount:0.25 }}
               className="min-h-full">
                {children}
              </StaggerContainer>
          </div>
      </div>
  )
}

export default Welcome