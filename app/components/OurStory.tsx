import React from 'react'
import Image from 'next/image'





const OurStory = () => {
   return (
      <section>

         <article className='flex flex-col items-center gap-5 p-5'>
            <h2 className='text-[#C7AB17] text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-5 md:mt-10
               '>
               Egypt&apos;s Premier Gateway to
               <br className='hidden md:block' />
               Luxury Yachting Brands
            </h2>
            <p className='text-[#6C757D] text-base md:text-2xl md:w-[80%]  font-normal  text-center md:leading-8 leading-6  '>
               As an authorized dealer, we proudly represent some of the most prestigious yacht brands in the world, offering our clients unparalleled access to luxury vessels that embody elegance,
               performance, and innovation.
            </p>
         </article>

         <div className="relative h-[200px] my-50 flex  ">
            {/* Background Image */}
            <Image
               src="/assets/frameimg.png"
               alt="Background"
               className="w-full h-full object-cover hidden md:block"
               width={400}
               height={100}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,53,0)_0%,rgba(10,26,53,0.7)_100%)] "></div>
            {/* Overlay Card */}

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:shadow-md shadow-none bg-white p-5 md:w-[80%] w-full flex md:flex-row flex-col md:gap-5 md:py-12 md:my-0">

               <div className='flex flex-col items-center gap-5 border-b border-gray-300 md:border-none'>
                  <Image src={'/assets/nord.png'} alt='ourstory' width={140} height={100}
                     className='w-[150px] h-[90px] md:w-[100px] md:h-[60px] '
                  />

                  <p className='text-[#6C757D] text-base  lg:text-xl font-normal text-center  leading-6 lg:max-w-[80%]'>
                     British luxury since 1968, pioneers of the 100 Yacht series, merging performance with craftsmanship.
                  </p>

                  <button className="px-6 py-2 border-2 border-[#C7AB17] text-[#C7AB17]  hover:text-black hover:border-black transition-all duration-300 text-xl font-medium tracking-wider cursor-pointer mb-8 md:mb-0">
                     Book a Consultation
                  </button>
               </div>

               {/* border line */}
               <div className='hidden md:block border-r border-gray-300 h-[200px] '></div>
               <br className=' md:hidden block' />

               {/* 2nd card */}
               <div className='flex flex-col items-center gap-5'>
                  <Image src={'/assets/image15.png'} alt='ourstory' width={100} height={100}
                     className='w-[230px] h-[80px] md:w-[150px] md:h-[60px] '
                  />

                  <p className='text-[#6C757D] text-base  lg:text-xl font-normal text-center  leading-6 lg:max-w-[80%]'>
                     Italian excellence since 1969. Creators of the award-winning Magellano line, renowned for innovative naval architecture.
                  </p>

                  <button className="px-6 py-2 border-2 border-[#C7AB17] text-[#C7AB17]  hover:text-black hover:border-black transition-all duration-300 text-xl font-medium tracking-wider cursor-pointer mb-8 md:mb-0">
                     Book a Consultation
                  </button>

               </div>

            </div>
         </div>

         <div className=' flex flex-col items-center p-5'>
            <p className='text-[#C7AB17] text-center text-sm font-normal uppercase tracking-wider'>Discover Our Models</p>
            {/* Vertical line */}
            <div className='w-[2px] h-15 bg-[#C7AB17] mt-4'></div>
         </div>

      </section>
   )
}

export default OurStory
