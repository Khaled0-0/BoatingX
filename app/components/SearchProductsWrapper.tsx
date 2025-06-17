"use client";

import React, { useState } from 'react';
import SearchInput from './ui/SearchInput';
import ProductsSelected from './ProductsSelected';
import Category from './Category';

const SearchProductsWrapper = () => {
   const [searchTerm, setSearchTerm] = useState('');

   return (
      <>
         <SearchInput setSearchTerm={setSearchTerm} />
         <Category />
         <ProductsSelected searchTerm={searchTerm} />
      </>
   );
};

export default SearchProductsWrapper;