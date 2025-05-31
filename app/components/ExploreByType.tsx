import React from 'react'
import EmblaSecondPage from './embla/EmblaSecondPage'
import { EmblaOptionsType } from 'embla-carousel'
import { NEW_SLIDE_DATA } from './secondembladata'

const ExploreByType = () => {

   const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

   return (
      <section>
         <div>
            <div className='flex flex-col items-center gap-3'>
               <h2 className='text-[#0F1A2B] text-center  text-5xl font-normal'>
                  Explore By Type
               </h2>
               <p className='text-center text-[#6C757D] text-lg font-normal'>Discover the entire Find yachts tailored to your activities
               </p>
            </div>
            <EmblaSecondPage slides={NEW_SLIDE_DATA} options={OPTIONS} />
         </div>
      </section>
   )
}

export default ExploreByType
