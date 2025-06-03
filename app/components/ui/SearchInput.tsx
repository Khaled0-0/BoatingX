import React from 'react'
import Image from 'next/image'

const SearchInput = () => {
   return (
      <div className="relative ">
         <Image
            src="/assets/search-md.svg"
            alt="search"
            width={20}
            height={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
         />
         <input
            type="text"
            placeholder="Search by brand or model"
            className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#C7AB17]/30 focus:shadow-lg focus:border-none focus:rounded-md transition duration-300 ease-in-out"
         />
      </div>
   )
}

export default SearchInput
