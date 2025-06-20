"use client";

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'





const OurStory = () => {
   const router = useRouter();

   return (
      <section>

         <header className='flex flex-col items-center gap-5 p-5'>

            <h2 className='text-[#C7AB17] text-center text-xl md:text-2xl lg:text-3xl font-semibold mt-5 md:mt-10
               '>
               Egypt&apos;s Premier Gateway <span className='text-xl italic font-semibold md:text-2xl lg:text-4xl'>to</span>{' '}
               Luxury Yachting Brands
            </h2>
            <p className='text-[#6C757D] text-sm md:text-base font-normal text-center 
            md:max-w-[75%] lg:max-w-[50%]'>
               As an authorized dealer, we proudly represent some of the most prestigious yacht brands in the world, offering our clients unparalleled access to luxury vessels that embody elegance,
               performance, and innovation.
            </p>
         </header>

         <div className="relative h-[230px] my-55 md:my-30 md:mb-30 flex  ">
            {/* Background Image */}
            <Image
               src="/assets/frameimg.png"
               alt="Background"
               className="hidden object-cover w-full md:block"
               width={400}
               height={100}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,53,0)_0%,rgba(10,26,53,0.7)_100%)] "></div>

            {/* Overlay Card */}
            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:shadow-md shadow-none bg-white p-5 md:w-[90%] w-full flex md:flex-row flex-col md:gap-8 md:p-8 md:my-0  border-y border-gray-200 md:border-none items-end justify-center lg:w-[70%]">

               <div className='flex flex-col items-center gap-5 mt-10 border-b border-gray-300 md:border-none md:mt-0 lg:max-w-[400px] md:min-w-[300px]'>
                  <Image src={'/assets/nord.png'} alt='ourstory' width={80} height={48}
                     className=' md:w-[100px] md:h-fit lg:w-[133px] lg:h-fit'
                  />

                  <p className='text-[#6C757D] text-sm md:text-base font-normal text-center'>
                     Nordkap
                     Creating memories at sea since 1966 - crafted in Scandinavia.
                  </p>


                  <button className="px-15 py-2 border-2 border-[#C7AB17] text-[#C7AB17]   transition-all duration-300 text-base w-fit buttons_hover tracking-wider  mb-10 md:mb-0 bg-transparent font-semibold"
                     onClick={() => router.push('/catalog?brand=Nordkapp')}>
                     Explore Boats
                  </button>
               </div>

               {/* border line */}
               <div className='hidden md:block border-r border-gray-300 h-[200px] '></div>
               <br className='block md:hidden' />

               {/* 2nd card */}
               <div className='flex flex-col items-center gap-5 mt-10 md:border-none md:mt-0 lg:max-w-[400px] md:min-w-[300px]'>
                  <Image src={'/assets/fjord-black.svg'} alt='ourstory' width={140} height={48}
                     className=' md:w-[190px] md:h-fit lg:w-[250px] lg:h-fit'
                  />

                  <p className='text-[#6C757D] text-sm md:text-base font-normal text-center   '>
                     The audacity to innovate, the determination to diverge from the norm, and the unwavering belief in our approach...
                  </p>

                  <button className="px-15 py-2 border-2 border-[#C7AB17] text-[#C7AB17]  buttons_hover transition-all duration-300 text-base w-fit  tracking-wider cursor-pointer mb-10 md:mb-0 bg-transparent font-semibold"
                     onClick={() => router.push('/catalog?brand=all')}>
                     Explore Boats
                  </button>
               </div>

            </div>
         </div>

         <div className='flex flex-col items-center p-5 '>
            <p className='text-[#C7AB17] text-center text-sm font-normal uppercase tracking-wider'>Discover Our Models</p>
            {/* Vertical line */}
            <div className='w-[2px] h-15 bg-[#C7AB17] mt-4'></div>
         </div>

      </section>
   )
}

export default OurStory
