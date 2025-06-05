import React from 'react'
import EmblaCarousel from './embla/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { SLIDE_DATA } from './slidedata'

const Products = () => {


   const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

   return (
      <section className='my-10'>
         <div className='flex flex-col items-center gap-3 px-5 md:px-0'>
            <h2 className='text-[#0F1A2B] text-center text-3xl  md:text-5xl font-normal'>Find The Perfect Yacht For You
            </h2>
            <p className='text-center text-[#6C757D] text-lg font-normal'>Discover the entire BENETEAU agenda and don&apos;t miss our boat shows, maritime events and private meetings.
            </p>
         </div>
         {/* Pass the new slide data array */}
         <EmblaCarousel slides={SLIDE_DATA} options={OPTIONS} />
         <div className='flex justify-center'>
            <button className='text-[#C7AB17] text-center text-xl font-semibold border border-[#C7AB17] px-6 py-2 cursor-pointer bg-gray-100'>View All Brands</button>
         </div>
      </section>
   )
}

export default Products
