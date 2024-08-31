"use client"
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavContext } from "@/app/context/navigationContext";

const Search = ({className, inputClassName, formClassName}) => {
  const {toggleOpenInput} = useNavContext()
  
    const [searchText, setSearchText] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(searchText)
        toggleOpenInput

    }
  return (
    <div className={`${className}`}>
        <form onSubmit={handleSubmit} className={`${formClassName} rounded-xl flex h-full
            justify-between items-center container gap-1`}>
        <input 
            type="search"
            name="searchText"
            id="sarchText"
            value={searchText}
            onChange={e=>setSearchText(e.target.value)} 
            placeholder="search site..." 
            className={`${inputClassName} focus:border-2 rounded-xl h-[2rem] px-2 
            outline-none text-gray-700
                placeholder:text-gray-500 min-w-[95%]
                placeholder:text-lg
                bg-slate-100`}/>
        <button className="text-[1.5rem] hover:bg-white py-1 px-2 h-[2rem]
        hover:text-blue-700 rounded-sm text-white bg-blue-400" 
        onClick={toggleOpenInput}>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  )
}

export default Search