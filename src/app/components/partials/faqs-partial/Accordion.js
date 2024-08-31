'use client'
import { useState } from "react"
import AContent from "./AContent"
import AccordingInput from "./AInput"
import AccordionLabel from "./AccordionLabel"


const Accordion = ({data, i}) => {
  return (
    <div key={i} className="accordion">
       <AccordingInput i = {i}
        />
        <AccordionLabel data={data}
        i={i}/>
        <AContent data={data}
         />
    </div>
  )
}

export default Accordion