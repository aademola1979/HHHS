

const AContent = ({data, ...props}) => {
  return (
    <div 
    {...props}
    className='accordion-content border-2 
    border-b-gray-500 py-1 bg-white px-10 '
    >{data.answer}</div>
  )
}

export default AContent