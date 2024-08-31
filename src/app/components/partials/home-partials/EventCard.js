'use client'
import Image from "next/image";
import { LinkBtnComponent, ZoomInComponent, ZoomOutComponent } from "../../AnimatedComponents/AnimatedContainer";
import { useState } from "react";
import Modal from "../../Modal";

const EventCard = ({ data, index }) => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open)

    return (
        <ZoomOutComponent
        direction='bottom'
        type='tween'
        delay={(index +1) * 0.5 }
        duration={1}
        viewport={{ once: true }}


         key={data.id} className=" 
              border-4 py-1 border-orange-400
               relative px-[3rem] m-2 grid min-w-full sm:min-w-fit
               rounded-md shadow-orange-500 shadow-md">
            <h3 className="h3 gradient-text flex justify-center">
                {data.topic}
            </h3>
            <div className="flex justify-center">
                <Image alt="event" src={data.image} width={100} height={100} />
            </div>
            <div className="flex justify-center">
                <LinkBtnComponent
                    onClick={toggleOpen}
                    className='flex cursor-pointer rounded-md justify-center
                         py-1 px-2 bg-orange-500 text-white my-2'>
                    See Details
                </LinkBtnComponent>
            </div>
            <div className="absolute bg-orange-500
                   top-0 left-0 text-white p-1 grid rounded-br-md">
                <span className="min-w-full border-1 border-b sm:text-base text-xs
                    border-slate-100">{data.date.day}</span>
                <span className="min-w-full border-1 border-b
                    border-slate-100">{data.date.Month}</span>
                <span className="min-w-full
                    ">{data.date.Year}</span>

            </div>
            <Modal open={open}
                toggleOpen={toggleOpen}>
                <div className="bg-white container grid gap-3 py-2
                        rounded-md">
                    <h3 className="h1 gradient-text flex justify-center">
                        {data.topic}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                    <div className="flex justify-center">
                        <Image alt="event" src={data.image} width={130} height={100} />
                    </div>
                    <p className="p text-gray-700">
                        {data.description}
                    </p>
                    <div className="p">
                        <p>Date:</p>
                        <span>{data.date.day}   </span>
                        <span>{data.date.Month},&nbsp;</span>
                        <span>{data.date.Year}</span>
                    </div>
                        
                    </div>
                </div>

            </Modal>
        </ZoomOutComponent>
    )
}

export default EventCard