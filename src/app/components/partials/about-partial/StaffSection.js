import { staffData } from "../../../../../public/data"
import StaffCard from "../../StaffCard"


const StaffSection = () => {
  return (
    <section className="my-5 py-[4rem] bg-blue-800">
        <div className="container">
        <h1 className="min-w-full gradient-text mb-[1rem] flex justify-center h1">Academic Staff</h1>
        <div className="flex justify-center gap-4 
        flex-wrap flex-col sm:flex-row">
            {
                staffData.map((staff, i)=>(
                    i <= 3 &&
                    <StaffCard 
                    className='h-[20rem] sm:w-[15rem] w-full'
                    imageClassName='h-[14rem] w-full'
                    member={staff}
                    index={i}/>
                ))
            }

        </div>

        </div>
        

    </section>
  )
}

export default StaffSection