import Image from 'next/image'
import React from 'react'
import { whyChooseUsData } from './data'



const WhyChooseUs = () => {
   return (
      <section className=' my-20'>

         <div className='flex flex-col items-center gap-3'>
            <h2 className='text-[#0F1A2B] text-center  text-5xl font-normal'>
               Why Choose BoatingX?
            </h2>
            <p className='text-center text-[#6C757D] text-lg font-normal'>
               Experience quality, reliability, and lifestyle with Egypt&apos;s leading marine dealership.
            </p>
         </div>

         <div className='flex mt-20 justify-evenly'>
            {/* the data in the data.ts file will be used here */}
            {whyChooseUsData.map((item) => (
               <div key={item.id} className='p-4 flex flex-col items-center max-w-90 shadow-sm gap-3'>
                  <Image src={item.src} alt={item.alt} width={48} height={48} />
                  <h2 className='text-[#0F1A2B] text-center  text-3xl font-semibold'>
                     {item.h2_text}
                  </h2>
                  <p className='text-center text-[#6C757D] text-lg font-normal max-w-68 '>
                     {item.p_text}
                  </p>
               </div>
            ))}
         </div>

      </section>
   )
}

export default WhyChooseUs
