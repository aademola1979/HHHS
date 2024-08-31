'use client'
import Image from "next/image";

import { useState } from "react";
import Modal from "./Modal";
import { FadeInComponent, LinkBtnComponent } from "./AnimatedComponents/AnimatedContainer";
const StaffCard = ({ member, index, imageClassName, className}) => {

  const [open, setOpen] = useState(false);

  const toggleOPen = () => setOpen(!open);


  return (
    <FadeInComponent
    direction='right'
    type='tween'
    delay={0.5 * index}
    duration={0.25}
      viewport={{ once: true }}
      className={`${className}flex-1 px-4 py-2 border-l-4 border-[#eb7d00ee]
        shadow-md
        items-center rounded-md mana-gradient relative`}>
      <div className=" min-w-full min-h-full ">
        <Image src={member.image}
          height={130} width={130} alt="management staff"
          className={`${imageClassName} rounded-xl mb-2`} />

        <div className="absolute z-10 bottom-0 rounded-br-md min-w-full max-w-full left-0 grid justify-center">
          <div className="text-black/90 flex py-1 gap-1">
            <h2 className="text-base">{member.name}</h2>
            <p className="text-xs pt-1">({member.position})</p>
          </div>
          <div className="flex justify-center w-full pb-1">
          <LinkBtnComponent
            className="rounded-xl text-white my-1 bg-orange-500 font-base w-[6rem] items-center py-1
        cursor-pointer flex justify-center" onClick={toggleOPen}>
            See Bio
          </LinkBtnComponent>

          </div>
          
        </div>
      </div>


      <Modal open={open}
        toggleOpen={toggleOPen}>

        <div className=' bg-white container rounded-md p-5'>
          <div className="grid justify-center min-w-[10rem]">
            <Image src={member.image}
              height={130} width={130} alt="management staff"
              className="rounded-xl min-h-[8rem] min-w-[8rem]" />
            <div className="text-black flex gap-2">
              <h2 className="">{member.name}</h2>
              <p className="text-gray-700 text-sm">({member.position})</p>
            </div>
          </div>
          <p className="p text-gray-700 ">
            {member.description}
          </p>
        </div>

      </Modal>
    </FadeInComponent>
  )
}

export default StaffCard