
import Category from '../components/Category'
import HelpSection from '../components/HelpSection'
import SearchProductsWrapper from '../components/SearchProductsWrapper'
import WhyChooseUs from '../components/WhyChooseUs'

const Catalog = () => {

   return (
      <section>
         <SearchProductsWrapper />
         <Category />
         <HelpSection />
         <WhyChooseUs />
      </section>
   )
}

export default Catalog
