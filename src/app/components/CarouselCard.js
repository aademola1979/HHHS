 

const CarouselCard = ({i, children, className}) => {
  return (
    <div key={i} className={`${className} grid mt-5 bg-white !min-h-[12rem] py-5 relative snap-start p-1 rounded-md min-w-full sm:min-w-[15rem]`}>
        {children}
    </div>
  )
}

export default CarouselCard