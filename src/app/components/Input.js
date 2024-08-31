

const Input = ({disabled=false, className, ...props}) => {
  return (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm border-2 border-gray-300
            focus:border-indigo-300 focus:ring min-w-full py-1 pl-2
            focus:ring-indigo-200 outline-0 focus:ring-opacity-50 placeholder:text-gray-400`}
            {...props} />
  )
}

export default Input