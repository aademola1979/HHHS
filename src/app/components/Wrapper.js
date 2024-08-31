

const Wrapper = ({ children, innerClassName, introClassName, introduction, className, ...props }) => {
    return (
        <div
        {...props}
         className={`${className} container py-2`}>
            <h1 className={`${introClassName} heading h1`}>{introduction}</h1>
            <div className={`${innerClassName}`}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper