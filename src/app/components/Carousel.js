

const Carousel = ({children, className}) => {
  return (
    <div className={`${className} px-2 py-2 md:py-6 gap-2 sm:gap-5 snap-x  
    flex overflow-x-scroll no-scrollbar max-w-[100vw]`}>
        {children}
    </div>
  )
}

export default Carousel










