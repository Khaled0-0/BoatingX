import React from 'react'
import Discover from '../components/Discover'
import ExploreByMatch from '../components/ExploreByMatch'
// import ExploreByType from '../components/ExploreByType'
import HelpSection from '../components/HelpSection'
import FeaturedBoats from "../components/FeaturedBoats";

const BrandModels = () => {
   return (
      <section>
         <Discover />
         <ExploreByMatch />
         <FeaturedBoats />
         {/* <ExploreByType /> */}
         <HelpSection />
      </section>
   )
}

export default BrandModels
