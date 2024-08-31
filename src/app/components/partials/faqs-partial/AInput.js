

const AccordingInput = ({i}) => {
  
  return (
    <input 
    type="radio"
    name="accordion"
    id={`accordion${i + 1}`}
    defaultChecked 
    className="hidden"/>
  )
}

export default AccordingInput