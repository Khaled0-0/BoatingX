'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { SelectableDropdown } from './ui/SelectableDropdown';
import { SlideData } from './embla/EmblaCarousel';

const getPriceNumber = (price: string) => {
   const match = price.replace(/,/g, '').match(/\d+/g);
   return match ? parseInt(match[0], 10) : 0;
};

const getBrandFromTitle = (title: string) => {
   return title.split(' ')[0];
};

const getModelFromTitle = (title: string) => {
   const parts = title.split(' ');
   return parts.length > 2 ? parts.slice(1, 3).join(' ') : title;
};

const getPriceRange = (price: number) => {
   if (price < 50000) return '0 - 50K €';
   if (price < 100000) return '50K - 100K €';
   if (price < 150000) return '100K - 150K €';
   if (price < 200000) return '150K - 200K €';
   return '200K - 250K €';
};

interface CategoryProps {
   products: SlideData[];
   setFilteredProducts: React.Dispatch<React.SetStateAction<SlideData[]>>;
}

const Category = ({ products, setFilteredProducts }: CategoryProps) => {
   const [selectedValues, setSelectedValues] = useState({
      Brands: '',
      Models: '',
      Price_range: '',
   });

   // Memoize options to avoid recalculating on every render
   const brands = useMemo(() =>
      Array.from(new Set(products.map(p => getBrandFromTitle(p.title))))
         .map(b => ({ label: b, value: b })),
      [products]
   );
   const models = useMemo(() =>
      Array.from(new Set(products.map(p => getModelFromTitle(p.title))))
         .map(m => ({ label: m, value: m })),
      [products]
   );
   const priceRanges = useMemo(() =>
      Array.from(new Set(products.map(p => getPriceRange(getPriceNumber(p.price)))))
         .map(pr => ({ label: pr, value: pr })),
      [products]
   );

   const handleChange = (key: keyof typeof selectedValues, value: string) => {
      setSelectedValues((prev) => ({ ...prev, [key]: value }));
   };

   const handleClear = (key: keyof typeof selectedValues) => {
      setSelectedValues((prev) => ({ ...prev, [key]: '' }));
   };

   const handleClearAll = () => {
      setSelectedValues({
         Brands: '',
         Models: '',
         Price_range: '',
      });
   };

   useEffect(() => {
      const applyFilters = () => {
         let currentFilteredProducts = products;

         if (selectedValues.Brands) {
            currentFilteredProducts = currentFilteredProducts.filter((product) =>
               getBrandFromTitle(product.title) === selectedValues.Brands
            );
         }
         if (selectedValues.Models) {
            currentFilteredProducts = currentFilteredProducts.filter((product) =>
               getModelFromTitle(product.title) === selectedValues.Models
            );
         }
         if (selectedValues.Price_range) {
            currentFilteredProducts = currentFilteredProducts.filter((product) =>
               getPriceRange(getPriceNumber(product.price)) === selectedValues.Price_range
            );
         }

         setFilteredProducts(currentFilteredProducts);
      };

      applyFilters();
   }, [selectedValues, products, setFilteredProducts]);

   return (
      <section>

         <div className="flex gap-4 px-5 py-2 overflow-x-auto md:px-10 scrollbar-hide">
            <div className="flex gap-4 flex-nowrap">
               <SelectableDropdown
                  label="Brands"
                  placeholder="Brands"
                  value={selectedValues.Brands}
                  onChange={(val) => handleChange('Brands', val)}
                  options={brands}
               />
               <SelectableDropdown
                  label="Models"
                  placeholder="Models"
                  value={selectedValues.Models}
                  onChange={(val) => handleChange('Models', val)}
                  options={models}
               />
               <SelectableDropdown
                  label="Price range"
                  placeholder="Price range"
                  value={selectedValues.Price_range}
                  onChange={(val) => handleChange('Price_range', val)}
                  options={priceRanges}
               />
            </div>
         </div>


         <div className='flex flex-col-reverse items-start justify-start gap-4 m-5 md:flex-row md:items-center md:ml-10'
         >

            {Object.values(selectedValues).some(val => val) && (
               <div className='flex gap-2 '>
                  <button
                     onClick={handleClearAll}
                     className='text-[#C7AB17] text-sm font-semibold not-italic cursor-pointer 
                  hover:text-[#C7AB17]/60 '
                  >
                     CLEAR
                  </button>
                  <div className='border-1 border-gray-200 h-[16px] '></div>
               </div>
            )}

            <div className='flex flex-wrap gap-2 md:gap-4'>
               {Object.entries(selectedValues).map(([key, val]) =>
                  val ? (
                     <div
                        key={key}
                        className='flex items-center justify-between gap-3 px-3 py-1 border border-[#C7AB17] focus:outline-none focus:ring-2 focus:ring-gray-200/50'
                        tabIndex={0}
                        onKeyDown={(e) => {
                           if (e.key === 'Backspace' || e.key === 'Delete') {
                              handleClear(key as keyof typeof selectedValues);
                           }
                        }}>
                        <p className='text-sm font-normal text-gray-600'>{val}</p>
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
