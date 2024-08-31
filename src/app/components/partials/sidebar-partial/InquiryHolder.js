
import Button from '../../Button'

const InquiryHolder = ({toggleSideBar}) => {
  return (
    <div className='mt-5 container self-end min-w-full
     flex justify-between text-black rounded-sm py-1'
    >
      <div onClick={toggleSideBar}>
        <Button linkTo='/inquiry' linkClassName=''>
          Enquire
        </Button>
      </div>
      <div onClick={toggleSideBar}>
        <Button linkTo='/application' linkClassName=''>
          Apply Onlline
        </Button>
      </div>

    </div>
  )
}

export default InquiryHolder