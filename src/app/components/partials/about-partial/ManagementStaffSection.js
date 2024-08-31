
import { managementData } from "../../../../../public/data";
import StaffCard from "../../StaffCard";



const ManagementSection = () => {
  return (
    <section className="py-[4rem] container" id="management">
      <h1 className="h1 flex justify-center gradient-text mb-[2rem]">DWISS's Management Members</h1>
      <div className="sm:flex grid justify-center  sm:justify-between gap-4 container">
        {
          managementData.map((member, index)=>(
            <StaffCard
            className='h-[15rem] md:min-w-[12rem] min-w-full'
            imageClassName='h-[10rem] w-full'
             key={index} index={index} member={member}/>
          ))
        }
      </div>
    </section>
  )
}

export default ManagementSection