import Link from 'next/link'


const LowerFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='grid md:flex p-4 text-white justify-center text-[.8rem] container'>
      <div className='inline-block justify-center gap-1'>
        <span>Copyright &copy; {year}: Designed and developed by </span>
        
        <Link href='/' className='font-semibold'><span className='gradient-text uppercase'>PragmaTech</span></Link> 
        <span> for </span> 
        <Link href='/'><span className='font-semibold gradient-text'>DWISS</span></Link>.
        <span> All right reserved.</span>
      </div>
    </div>
  )
}

export default LowerFooter