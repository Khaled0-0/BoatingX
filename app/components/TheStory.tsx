import Image from 'next/image'
import React from 'react'

const TheStory = () => {
   return (
      <section className='py-20'>
         <div>

            <div className='flex flex-col items-center gap-3 m-5'>
               <h2 className='text-[#0F1A2B] text-center text-3xl md:text-4xl lg:text-5xl font-normal'>
                  Our mission is simple
               </h2>
               <p className='text-center text-[#6C757D] text-sm md:text-base lg:text-xl font-normal md:w-[70%] lg:w-full'>
                  To redefine boating in Egypt through design, performance, and unforgettable experiences.
               </p>
            </div>

            <div className="relative max-w-4xl px-4 py-20 mx-auto">
               {/* Dashed Vertical Line */}
               <div className="absolute left-1/2 top-15 h-[80%] border-l border-dashed border-[#C7AB17]/70 transform -translate-x-1/2 z-0 hidden md:block" />

               {/* Timeline Item 1 */}
               <div className="relative flex items-center mb-24">
                  <div className="items-center justify-end hidden w-1/2 gap-2 pr-2 text-right md:flex">
                     <p className="text-[#C7AB17] font-semibold text-lg ">2020</p>
                     <div className='border border-t border-[#C7AB17] w-12 '></div>
                  </div>
                  <div className="relative z-10 w-5 h-5 bg-[#C7AB17] rounded-full border-3 border-white hidden md:block" />
                  <div className="m-5 text-center md:w-1/2 md:pl-10 md:text-start md:m-0">
                     <p className="text-base italic font-semibold md:text-xl">Chapter 1</p>
                     <h3 className="mt-1 text-lg font-bold md:text-xl lg:text-2xl">
                        Founded in Hurghada
                     </h3>
                     <p className="text-xs md:text-sm lg:text-base mt-2 text-[#6C757D] 
                     md:max-w-4/5 ">
                        We formed a passionate team of three, each bringing unique skills and perspectives that shaped our future.
                     </p>
                     <p className="text-xs md:text-sm text-[#0F8B8D] mt-4 text-center md:text-start">
                        ⚓ Became Egypt&apos;s first Fjord dealer
                     </p>
                  </div>
               </div>

               {/* Timeline Item 2 */}
               <div className="relative flex items-center mb-24">
                  <div className="md:w-1/2 md:ml-10 md:max-w-[318px] lg:max-w-[382px] lg:mr- md:text-left text-center m-5 md:m-0">
                     <p className="text-base italic font-semibold md:text-xl">Chapter 2</p>
                     <h3 className="mt-1 text-lg font-bold md:text-xl lg:text-2xl">
                        Mediterranean Expansion
                     </h3>
                     <p className="text-xs md:text-sm lg:text-base mt-2 text-[#6C757D] 
                     md:max-w-4/5">
                        We&apos;ve expanded to the Mediterranean coast, opening new markets and connecting with a diverse clientele.
                     </p>
                     <p className="text-xs md:text-sm text-[#0F8B8D] mt-4 text-center md:text-start">
                        ⚓ Won &quot;Best Marine Dealer&quot; at Dubai Boat Show
                     </p>
                  </div>
                  <div className="relative z-10 w-5 h-5 bg-[#C7AB17] rounded-full border-3 border-white hidden md:block" />
                  <div className="items-center justify-start hidden w-1/2 gap-2 pl-2 md:flex">
                     <div className='border border-t border-[#C7AB17] w-12 '></div>
                     <p className="text-[#C7AB17] font-semibold text-lg">2023</p>
                  </div>
               </div>

               {/* Timeline Item 3 */}
               <div className="relative flex items-center md:mb-24">
                  <div className="items-center justify-end hidden w-1/2 gap-2 pr-2 text-right md:flex">
                     <p className="text-[#C7AB17] font-semibold text-lg ">2025</p>
                     <div className='border border-t border-[#C7AB17] w-12 '></div>
                  </div>
                  <div className="relative z-10 hidden w-5 h-5 md:block">
                     {/* Yellow Circle */}
                     <div className="w-full h-full bg-[#C7AB17] rounded-full border-[5px] border-white" />
                     {/* Boat Icon Positioned on Top */}
                     <Image
                        src="/assets/icon-boat.png"
                        alt="boat icon"
                        width={50}
                        height={50}
                        className="absolute top-[180%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                     />
                  </div>

                  <div className="m-5 text-center md:w-1/2 md:pl-10 md:text-start md:m-0">
                     <p className="text-base italic font-semibold md:text-xl">Chapter 3</p>
                     <h3 className="mt-1 text-lg font-bold md:text-xl lg:text-2xl">
                        Market Leadership
                     </h3>
                     <p className="text-xs md:text-sm lg:text-base mt-2 text-[#6C757D] 
                     md:max-w-4/5">
                        Delivered over fifty luxury yachts in Egypt, enhancing Mediterranean adventures with top-notch amenities for unforgettable journeys.
                     </p>
                     <p className="text-xs md:text-sm text-[#0F8B8D] mt-4 text-center md:text-start">
                        ⚓ Added Nordkapp & Fjord to our portfolio
                     </p>
                  </div>
               </div>

            </div>

         </div>
      </section>
   )
}

export default TheStory
