

const NavDropDown = ({children, className}) => {
  return (
    <div className={`${className} absolute z-20 max-w-fit hidden
     text-white bg-blue-600 navDropDown shadow-md`}>
      {children}
    </div>
  )
}

export default NavDropDown