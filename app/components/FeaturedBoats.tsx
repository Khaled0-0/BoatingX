import Image from 'next/image'
import React from 'react'
import { featuredBoats } from './featuredboatsdata'
import Link from 'next/link'

const FeaturedBoats = () => {
   return (
      <section className='my-10'>

         <div className='flex flex-col items-center gap-3 px-5 md:px-0'>
            <h2 className='text-[#0F1A2B] text-center text-xl  md:text-5xl font-normal'>
               Find The Featured Boats</h2>
            <p className='text-center text-[#6C757D] text-sm md:text-lg font-normal'>
               Discover the entire Explore our exceptional new range of boats!</p>
         </div>

         <div className='flex flex-col items-center justify-center h-full gap-10 mx-4 my-15 lg:flex-row lg:mx-10'>
            {featuredBoats.map((boat, idx) => (

               <div key={idx}
                  className='flex flex-col justify-between gap-4 border-gray-200 lg:w-screen border-1'
               >

                  <div className="relative w-full h-[280px] overflow-hidden">
                     <Image
                        src={boat.imageSrc}
                        alt={boat.title}
                        fill
                        className="object-cover"
                     />
                  </div>

                  <div className='flex flex-col gap-2 items-start justify-between mx-3 h-[110px]'>
                     <Image src={boat.logoSrc} alt={boat.title + ' logo'}
                        className='object-cover '
                        width={boat.logoSrc === '/assets/nord.png' ? 56 : 72}
                        height={boat.logoSrc === '/assets/nord.png' ? 100 : 100} />
                     <h2 className='text-lg lg:text-xl embla__slide__title'>{boat.title}</h2>
                     <p className='text-base embla__slide__price'>{boat.price}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center m-5 border border-gray-200">
                     {boat.details.map((detail: { iconSrc: string; label: string; value: string }, detailIndex: number) => (
                        <div
                           key={detailIndex}
                           className="flex flex-col items-center justify-center w-1/2 gap-2 p-3 md:w-1/3">
                           <Image
                              src={detail.iconSrc}
                              alt={detail.label}
                              width={24}
                              height={24}
                              className="mx-auto"
                           />
                           <div
                              className={`flex flex-col gap-3 ${detailIndex === 2 ? "items-center md:items-center w-[200px] lg:w-full" : "items-center"
                                 }`}>
                              <span className="text-sm md:text-base embla__slide__detail_label">
                                 {detail.label}
                              </span>
                              <span className="text-sm md:text-base embla__slide__detail_value">
                                 {detail.value}
                              </span>
                           </div>
                        </div>
                     ))}
                  </div>


               </div>
            ))}
         </div>

         <Link href="/catalog">
            <div className='flex justify-center'>
               <button className='text-[#C7AB17] text-center text-xl font-bold  border border-[#C7AB17] px-8 py-2 buttons_hover '>View All Boats</button>
            </div>
         </Link>
      </section>
   )
}

export default FeaturedBoats
