
import NurseryAndPrimary from './NurseryAndPrimary'
import Secondary from './Secondary'
import University from './University'

const Introduction = () => {
  return (
    <section id='introduction' className='py-[2rem]' >
      <h1 className='mb-4 container py-[1rem] flex justify-center text-gray-700 h1'>
        De-World, as a group of schools, is a complete package, comprising 
        a nursery and primary school, a secondary school and 
        a univeristy. 
      </h1>
      <div className='grid gap-4'>
      <NurseryAndPrimary />
      <Secondary />
      <University />
      </div>
    </section>
  )
}

export default Introduction