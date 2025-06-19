"use client";

import React, { useState } from 'react';
import SearchInput from './ui/SearchInput';
import ProductsSelected from './ProductsSelected';
import Category from './Category';
import { SLIDE_DATA } from './slidedata';
import { useSearchParams } from 'next/navigation';

const SearchProductsWrapper = () => {
   const searchParams = useSearchParams();
   const initialBrand = searchParams.get('brand') || '';
   const [searchTerm, setSearchTerm] = useState('');
   const [filteredProducts, setFilteredProducts] = useState(SLIDE_DATA);

   return (
      <>
         <SearchInput setSearchTerm={setSearchTerm} />
         <Category products={SLIDE_DATA} setFilteredProducts={setFilteredProducts} initialBrand={initialBrand} />
         <ProductsSelected searchTerm={searchTerm} products={filteredProducts} />
      </>
   );
};

export default SearchProductsWrapper;