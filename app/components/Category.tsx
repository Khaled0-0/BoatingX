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
         <div className='pt-25 px-30 flex flex-col gap-5'>
            <SearchInput />
         </div>

         <div className='pt-5 px-30 flex gap-3'>
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

         <div className='pt-5 px-30 max-w-fit flex gap-2 items-center'>
            <button
               onClick={handleClearAll}
               className='text-[#C7AB17] text-sm font-semibold not-italic cursor-pointer 
               hover:text-[#C7AB17]/60 '
            >
               CLEAR
            </button>

            <div className='border-1 border-gray-200 h-[16px] '></div>

            {Object.entries(selectedValues).map(([key, val]) =>
               val ? (
                  <div
                     key={key}
                     className='border-gray-200 border px-3  text- flex gap-2 items-center focus:outline-none focus:ring-2 focus:ring-gray-200/50'
                     tabIndex={0}
                     onKeyDown={(e) => {
                        if (e.key === 'Backspace' || e.key === 'Delete') {
                           handleClear(key as keyof typeof selectedValues);
                        }
                     }}
                  >
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
      </section>
   );
};

export default Category;
