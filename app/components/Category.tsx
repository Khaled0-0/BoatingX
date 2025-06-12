'use client';
import React, { useState } from 'react';
import SearchInput from './ui/SearchInput';
import Image from 'next/image';
import { SelectableDropdown } from './ui/SelectableDropdown';

const options = {
   type: [
      { label: 'Sedan', value: 'sedan' },
      { label: 'SUV', value: 'suv' },
   ],
   class: [
      { label: 'Economy', value: 'economy' },
      { label: 'Luxury', value: 'luxury' },
   ],
   make: [
      { label: 'Toyota', value: 'toyota' },
      { label: 'Honda', value: 'honda' },
   ],
   year: [
      { label: '2020 - 2025', value: '2020 - 2025' },
      { label: '2015 - 2015', value: '2015 - 2015' },
   ],
};

const Category = () => {
   const [selectedValues, setSelectedValues] = useState({
      type: '',
      class: '',
      make: '',
      year: '',
   });

   const handleChange = (key: keyof typeof selectedValues, value: string) => {
      setSelectedValues((prev) => ({ ...prev, [key]: value }));
   };

   const handleClear = (key: keyof typeof selectedValues) => {
      setSelectedValues((prev) => ({ ...prev, [key]: '' }));
   };

   const handleClearAll = () => {
      setSelectedValues({
         type: '',
         class: '',
         make: '',
         year: '',
      });
   };

   return (
      <section>
         <div className='pt-25 md:mx-10 m-5 flex flex-col lg:mx-20'>
            <SearchInput />
         </div>

         <div className=' md:mx-10 lg:mx-25 m-5 gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8
         justify-items-center lg:justify-items-start lg:gap-0 selectable__style'>
            <SelectableDropdown
               label="Type"
               placeholder="Type"
               value={selectedValues.type}
               onChange={(val) => handleChange('type', val)}
               options={options.type}
            />
            <SelectableDropdown
               label="Class"
               placeholder="Class"
               value={selectedValues.class}
               onChange={(val) => handleChange('class', val)}
               options={options.class}
            />
            <SelectableDropdown
               label="Make"
               placeholder="Make"
               value={selectedValues.make}
               onChange={(val) => handleChange('make', val)}
               options={options.make}
            />
            <SelectableDropdown
               label="Year"
               placeholder="Year"
               value={selectedValues.year}
               onChange={(val) => handleChange('year', val)}
               options={options.year}
            />
         </div>

         <div className='md:mt-5 lg:ml-30 mx-5 md:ml-20 w-[90%] md:max-w-fit flex flex-col md:flex-row  gap-2 items-center md:items-center justify-center'>
            <div className='flex gap-2'>
               <button
                  onClick={handleClearAll}
                  className='text-[#C7AB17] text-sm font-semibold not-italic cursor-pointer 
               hover:text-[#C7AB17]/60 '
               >
                  CLEAR
               </button>
               <div className='border-1 border-gray-200 h-[16px] '></div>
            </div>

            <div className='grid grid-cols-2 gap-2 md:grid-cols-4 w-[90%] h-fit'>
               {Object.entries(selectedValues).map(([key, val]) =>
                  val ? (
                     <div
                        key={key}
                        className='border-gray-200 border p-1  text- flex gap-2 items-center focus:outline-none focus:ring-2 focus:ring-gray-200/50 justify-around'
                        tabIndex={0}
                        onKeyDown={(e) => {
                           if (e.key === 'Backspace' || e.key === 'Delete') {
                              handleClear(key as keyof typeof selectedValues);
                           }
                        }}>
                        <p className='text-lg font-medium'>{val}</p>
                        <Image
                           onClick={() => handleClear(key as keyof typeof selectedValues)}
                           className='cursor-pointer hover:bg-red-500 hover:rounded-full '
                           src='/assets/close.svg'
                           alt='close'
                           width={14}
                           height={14}
                        />
                     </div>
                  ) : null
               )}
            </div>
         </div>
      </section >
   );
};

export default Category;
