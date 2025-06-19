import { Suspense } from 'react';
import HelpSection from '../components/HelpSection'
import SearchProductsWrapper from '../components/SearchProductsWrapper'
import WhyChooseUs from '../components/WhyChooseUs'

const Catalog = () => {

   return (
      <section>
         <Suspense>
            <SearchProductsWrapper />
         </Suspense>
         <HelpSection />
         <WhyChooseUs />
      </section>
   )
}

export default Catalog
