import React from 'react'
import Category from '../components/Category'
import ProductsSelected from '../components/ProductsSelected'
import HelpSection from '../components/HelpSection'
import WhyChooseUs from '../components/WhyChooseUs'




const Catalog = () => {
   return (
      <section>
         <Category />
         <ProductsSelected />
         <HelpSection />
         <WhyChooseUs />
      </section>
   )
}

export default Catalog
