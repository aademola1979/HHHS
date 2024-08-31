

const FormCard = ({logo, children, headline, description, logoClassName, className, headlineClassName, descriptionClassName}) => {
  return (
    <section className={`${className} flex flex-col
        sm:justify-center items-center pt-6 sm:pt-2`}>
          <div className={`${logoClassName} flex min-w-full justify-center`}>{logo}</div>
          <div className="">
            <h1 className={`${headlineClassName} gradient-text flex justify-center`}>{headline}</h1>
            <small className={`${descriptionClassName} gradient-text3`}>{description}</small>
          </div>
          

          <div className="min-w-full sm:min-w-[25rem] px-2 mt-6 py-4 bg-white
            shadow-md overflow-hidden sm:rounded-lg mb-6">
            {children}
          </div>

    </section>
  )
}

export default FormCard