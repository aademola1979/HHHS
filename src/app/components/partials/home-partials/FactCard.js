
import { FadeInComponent } from "../../AnimatedComponents/AnimatedContainer"
import { FaDesktop } from "react-icons/fa6"

const FactCard = ({icon, text, figure, i}) => {
  return (
    <FadeInComponent
            key={i}
            direction='right'
            type='tween'
            delay={0.5 * (i + 1)}
            duration={0.5}
            viewport={{ once: true }}
             className="p-4 border-white border-2 
             justify-center items-center grid 
             w-[18rem]">
              <FadeInComponent
              direction='up'
              type='spring'
              delay={0.5}
              duration={1}
               className="flex justify-center gap-2 p">
                <span className="text-[1.5rem]">{icon}</span>
                <span className="pt-1">{text} </span>
                
               </FadeInComponent>
              <FadeInComponent
              direction='down'
              type='spring'
              delay={0.7}
              duration={1}
              viewport={{ once: true }}
               className="p flex justify-center">
                {figure}
               </FadeInComponent>
            </FadeInComponent>
  )
}

export default FactCard