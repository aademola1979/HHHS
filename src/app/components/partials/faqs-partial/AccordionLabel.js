import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const AccordionLabel = ({ data, i, ...props }) => {
  return (
    <label  className="accordion-label py-2
   text-white p cursor-pointer
    bg-[#0076ff] pl-2 sm:pl-4 pr-6 sm:pr-10 flex justify-between "
      htmlFor={`accordion${i + 1}`}
      {...props}>
      <div className="flex gap-2 sm:gap-5">
        <span>{i + 1}.</span>
        <span>{data.question}</span>
      </div>
      <div className="arrow-container font-bold text-lg pt-1">
        <MdKeyboardArrowDown className="arrow-down" />
        <MdKeyboardArrowRight className="arrow-right"/> 
      </div>

    </label>
  )
}

export default AccordionLabel