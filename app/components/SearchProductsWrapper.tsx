"use client";

import React, { useState } from 'react';
import SearchInput from './ui/SearchInput';
import ProductsSelected from './ProductsSelected';
import Category from './Category';
import { SLIDE_DATA } from './slidedata';

const SearchProductsWrapper = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [filteredProducts, setFilteredProducts] = useState(SLIDE_DATA);

   return (
      <>
         <SearchInput setSearchTerm={setSearchTerm} />
         <Category products={SLIDE_DATA} setFilteredProducts={setFilteredProducts} />
         <ProductsSelected searchTerm={searchTerm} products={filteredProducts} />
      </>
   );
};

export default SearchProductsWrapper;