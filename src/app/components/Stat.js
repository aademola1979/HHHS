
'use client'
import { useState, useEffect } from "react";


const Stat = () => {
    const [initial, setInitial] = useState(0);
    
    

    

    useEffect(
        ()=>{

          const myInterval = setInterval(()=>{
            setInitial((init)=>init + 1);
          }, 1000);
           return clearInterval(myInterval)
    }, [])

  return (
    <span>
        {initial}
    </span>
  )
}

export default Stat