

const Label = ({className, children, ...props}) => {
  return (
    <label 
    className={`${className} block font-medium text-indigo-900`}
    {...props}>{children}</label>
  )
}

export default Label