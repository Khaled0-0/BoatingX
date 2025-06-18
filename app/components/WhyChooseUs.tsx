import Image from 'next/image'
import React from 'react'
import { whyChooseUsData } from './whychoseusdata'



const WhyChooseUs = () => {
   return (
      <section className='px-5 my-20 '>

         <div className='flex flex-col items-center gap-3 md:px-0'>
            <h2 className='text-[#0F1A2B] text-center text-xl  md:text-5xl font-semibold'>
               Why Choose BoatingX?
            </h2>
            <p className='text-center text-[#6C757D] text-lg md:text-lg font-normal'>
               Discover the entire Explore our exceptional new range of boats!</p>
         </div>

         <div className='flex flex-col gap-5 m-2 mt-8 lg:flex-row md:mt-10 md:mx-10'>
            {/* the data in the data.ts file will be used here */}
            {whyChooseUsData.map((item) => (
               <div key={item.id} className='flex flex-col items-center justify-start gap-3 p-4 mt-3 border border-gray-200 shadow-sm '>
                  <Image src={item.src} alt={item.alt} width={48} height={48} />
                  <h2 className='text-[#0F1A2B] text-center text-xl md:text-2xl font-semibold w-full'>
                     {item.h2_text}
                  </h2>
                  <p className='text-center text-[#6C757D] text-sm md:text-lg font-normal w-full '>
                     {item.p_text}
                  </p>
               </div>
            ))}
         </div>

      </section>
   )
}

export default WhyChooseUs
