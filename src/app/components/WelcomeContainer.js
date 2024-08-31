import Welcome from "./Welcome"



const WelcomeContainer = ({ welcomeImage, text, textClassName }) => {
    return (
        <div className='welcome-container'>
            <Welcome image={welcomeImage} imageClassName='h-[15rem] min-w-full'>
            </Welcome>
            <div className={`${textClassName} md:min-h-[15rem] relative flex 
      bg-orange-400 text-white items-center justify-center pt-3`}>
                <h1 className='h1 '>{text}</h1>
            </div>
        </div>
    )
}

export default WelcomeContainer