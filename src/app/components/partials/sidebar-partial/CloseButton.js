import {AiFillCloseCircle} from 'react-icons/ai';

const CloseButton = ({toggleSideBar}) => {
  return (
    <div>
      <div className="flex min-w-full justify-end">
        <button className="text-[2.5rem] text-gray-200 hover:text-white" onClick={toggleSideBar}>
          <AiFillCloseCircle />
        </button>
      </div>
    </div>
  )
}

export default CloseButton