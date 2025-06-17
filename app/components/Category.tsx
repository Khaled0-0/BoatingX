'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SelectableDropdown } from './ui/SelectableDropdown';
import { SlideData } from './embla/EmblaCarousel';

const options = {
   RIB: [
      { label: 'Airborne', value: 'airborne' },
   ],
   Bow_Rider: [
      { label: 'Avant', value: 'avant' },
   ],
   Center_console: [
      { label: 'Enduro', value: 'enduro' },
   ],
   Day_Cruiser: [
      { label: 'Noblese', value: 'noblese' },
   ],
   Wheelhouse: [
      { label: 'Coupe', value: 'coupe' },
   ],
   Luxury_day_cruisers: [
      { label: 'All Fjord', value: 'all-fjord' },
   ],
};

interface CategoryProps {
   products: SlideData[];
   setFilteredProducts: React.Dispatch<React.SetStateAction<SlideData[]>>;
}

const Category = ({ products, setFilteredProducts }: CategoryProps) => {
   const [selectedValues, setSelectedValues] = useState({
      RIB: '',
      Bow_Rider: '',
      Center_Console: '',
      Day_Cruiser: '',
      Wheelhouse: '',
      Luxury_day_cruisers: '',
   });

   const handleChange = (key: keyof typeof selectedValues, value: string) => {
      setSelectedValues((prev) => ({ ...prev, [key]: value }));
   };

   const handleClear = (key: keyof typeof selectedValues) => {
      setSelectedValues((prev) => ({ ...prev, [key]: '' }));
   };

   const handleClearAll = () => {
      setSelectedValues({
         RIB: '',
         Bow_Rider: '',
         Center_Console: '',
         Day_Cruiser: '',
         Wheelhouse: '',
         Luxury_day_cruisers: '',
      });
   };

   useEffect(() => {
      const applyFilters = () => {
         let currentFilteredProducts = products;

         if (selectedValues.Luxury_day_cruisers === 'all-fjord') {
            currentFilteredProducts = products;
         } else {
            Object.entries(selectedValues).forEach(([, selectedValue]) => {
               if (selectedValue) {
                  currentFilteredProducts = currentFilteredProducts.filter((product) =>
                     product.title.toLowerCase().includes(selectedValue.toLowerCase())
                  );
               }
            });
         }

         setFilteredProducts(currentFilteredProducts);
      };

      applyFilters();
   }, [selectedValues, products, setFilteredProducts]);

   return (
      <section>

         <div className=' md:mx-10 lg:mx-15 m-5 gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8
         justify-items-center lg:justify-items-start lg:gap-0 selectable__style'>
            <SelectableDropdown
               label="RIB"
               placeholder="RIB"
               value={selectedValues.RIB}
               onChange={(val) => handleChange('RIB', val)}
               options={options.RIB}
            />
            <SelectableDropdown
               label="Bow Rider"
               placeholder="Bow Rider"
               value={selectedValues.Bow_Rider}
               onChange={(val) => handleChange('Bow_Rider', val)}
               options={options.Bow_Rider}
            />
            <SelectableDropdown
               label="Center Console"
               placeholder="Center Console"
               value={selectedValues.Center_Console}
               onChange={(val) => handleChange('Center_Console', val)}
               options={options.Center_console}
            />
            <SelectableDropdown
               label="Day Cruiser"
               placeholder="Day Cruiser"
               value={selectedValues.Day_Cruiser}
               onChange={(val) => handleChange('Day_Cruiser', val)}
               options={options.Day_Cruiser}
            />
            <SelectableDropdown
               label="Wheelhouse"
               placeholder="Wheelhouse"
               value={selectedValues.Wheelhouse}
               onChange={(val) => handleChange('Wheelhouse', val)}
               options={options.Wheelhouse}
            />
            <SelectableDropdown
               className='md:w-fit'
               label="Luxury Day Cruisers"
               placeholder="Luxury Day Cruisers"
               value={selectedValues.Luxury_day_cruisers}
               onChange={(val) => handleChange('Luxury_day_cruisers', val)}
               options={options.Luxury_day_cruisers}
            />
         </div>

         <div className='md:mt-5 lg:ml-20  mx-5 md:ml-8 w-[90%] md:max-w-fit flex flex-col md:flex-row  gap-2 items-center md:items-center justify-center'>
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

            <div className='grid grid-cols-2 gap-5 md:gap-2 md:grid-cols-6 w-fit h-fit'>
               {Object.entries(selectedValues).map(([key, val]) =>
                  val ? (
                     <div
                        key={key}
                        className='border-gray-200 border p-2  text- flex gap-2 items-center focus:outline-none focus:ring-2 focus:ring-gray-200/50 justify-around'
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
