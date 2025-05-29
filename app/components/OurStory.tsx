import React from 'react'
import Image from 'next/image'





const OurStory = () => {
   return (
      <section className=''>

         <article className='flex flex-col items-center gap-5 my-10'>
            <h2 className='text-[#C7AB17] text-center text-4xl font-normal w-[499px]'>
               Egypt&apos;s Premier Gateway to
               Luxury Yachting Brands
            </h2>
            <p className='text-[#6C757D] text-lg font-normal  text-center w-[650px] leading-6'>
               As an authorized dealer, we proudly represent some of the most prestigious yacht brands in the world, offering our clients unparalleled access to luxury vessels that embody elegance,
               performance, and innovation.
            </p>
         </article>

         <div className="relative h-[200px] my-50 ">
            {/* Background Image */}
            <Image
               src="/assets/frameimg.png"
               alt="Background"
               className="w-full h-full object-cover bg-[]"
               width={400}
               height={100}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,53,0)_0%,rgba(10,26,53,0.7)_100%)]"></div>
            {/* Overlay Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl bg-white p-10  ">
               <div className='flex items-center justify-between gap-10'>

                  <div className='flex flex-col items-center gap-5'>
                     <Image src={'/assets/nord.png'} alt='ourstory' width={140} height={100} />
                     <p className='text-[#6C757D] text-lg font-normal  text-center w-[350px] leading-6'>
                        British luxury since 1968, pioneers of the 100 Yacht series, merging performance with craftsmanship.
                     </p>
                     <button className="px-8 py-3 border-2 border-[#C7AB17] text-[#C7AB17]  hover:text-black hover:border-black transition-all duration-300 text-xl font-medium tracking-wider min-w-[200px] cursor-pointer">
                        Book a Consultation
                     </button>
                  </div>
                  {/* border line */}
                  <div className='border-r border-gray-300 h-[200px]'></div>
                  {/* 2nd card */}
                  <div className='flex flex-col items-center gap-5'>
                     <Image src={'/assets/image15.png'} alt='ourstory' width={400} height={100} />
                     <p className='text-[#6C757D] text-lg font-normal  text-center w-[350px] leading-6'>
                        Italian excellence since 1969. Creators of the award-winning Magellano line, renowned for innovative naval architecture.
                     </p>
                     <button className="px-8 py-3 border-2 border-[#C7AB17] text-[#C7AB17]  hover:text-black hover:border-black transition-all duration-300 text-xl font-medium tracking-wider min-w-[200px] cursor-pointer  ">
                        Book a Consultation
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div className='my-15 flex flex-col items-center '>
            <p className='text-[#C7AB17] text-center text-sm font-normal uppercase tracking-wider'>Discover Our Models</p>
            {/* Vertical line */}
            <div className='w-[2px] h-15 bg-[#C7AB17] mt-4'></div>
         </div>

      </section>
   )
}

export default OurStory
