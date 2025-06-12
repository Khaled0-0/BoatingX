import Image from 'next/image'
import React from 'react'
import { featuredBoats } from './featuredboatsdata'

const FeaturedBoats = () => {
   return (
      <section className='my-10'>
         <div className='flex flex-col items-center gap-3 px-5 md:px-0'>
            <h2 className='text-[#0F1A2B] text-center text-3xl  md:text-5xl font-normal'>Find The Featured Boats</h2>
            <p className='text-center text-[#6C757D] text-lg font-normal'>Discover the entire Explore our exceptional new range of boats!</p>
         </div>

         <div className='my-15 flex flex-col lg:flex-row items-center justify-center gap-10 mx-4 lg:mx-10'>
            {featuredBoats.map((boat, idx) => (
               <div key={idx} className='flex flex-col justify-between gap-5 border-1 border-gray-200'>
                  <div>
                     <Image src={boat.imageSrc} alt={boat.title} width={600} height={280} className='!h-[280px]' />
                  </div>
                  <div className='mx-3'>
                     <div className='flex justify-between items-center'>
                        <h2 className='embla__slide__title text-2xl'>{boat.title}</h2>
                        <Image src={boat.logoSrc} alt={boat.title + ' logo'}
                           width={boat.logoSrc === '/assets/nord.png' ? 46 : 72}
                           height={boat.logoSrc === '/assets/nord.png' ? 24 : 14} />
                     </div>
                     <p className='embla__slide__price'>{boat.price}</p>
                  </div>
                  <div className='border border-gray-200 flex items-center justify-between p-1 mx-3 mb-3 lg:justify-around'>
                     {boat.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className='embla__slide__detail_item'>
                           <Image src={detail.iconSrc} alt={detail.label} width={24} height={24} />
                           <span className='embla__slide__detail_label text-sm md:text-base'>{detail.label}</span>
                           <span className='embla__slide__detail_value text-sm md:text-base'>{detail.value}</span>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>

         <div className='flex justify-center'>
            <button className='text-[#C7AB17] text-center text-xl font-semibold border border-[#C7AB17] px-6 py-2 cursor-pointer bg-gray-100'>View All Brands</button>
         </div>
      </section>
   )
}

export default FeaturedBoats
