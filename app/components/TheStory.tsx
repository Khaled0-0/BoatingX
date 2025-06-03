import Image from 'next/image'
import React from 'react'

const TheStory = () => {
   return (
      <section className='py-20'>
         <div>

            <div className='flex flex-col items-center gap-3'>
               <h2 className='text-[#0F1A2B] text-center  text-5xl font-normal'>
                  Our Story
               </h2>
               <p className='text-center text-[#6C757D] text-lg font-normal'>
                  From humble beginnings to market leadership, our journey reflects our commitment to excellence in marine luxury.
               </p>
            </div>

            <div className="relative max-w-4xl mx-auto py-20 px-4">
               {/* Dashed Vertical Line */}
               <div className="absolute left-1/2 top-15 h-[80%] border-l border-dashed border-[#C7AB17]/70 transform -translate-x-1/2 z-0" />
               {/* Timeline Item 1 */}
               <div className="relative flex items-center mb-24">
                  <div className="w-1/2 pr-2 text-right flex items-center gap-2 justify-end ">
                     <p className="text-[#C7AB17] font-semibold text-lg ">2020</p>
                     <div className='border border-t border-[#C7AB17] w-12 '></div>
                  </div>
                  <div className="relative z-10 w-5 h-5 bg-[#C7AB17] rounded-full border-3 border-white" />
                  <div className="w-1/2 pl-10">
                     <p className="italic font-semibold">Chapter 1</p>
                     <h3 className="font-bold text-lg mt-1">Founded in Hurghada</h3>
                     <p className="text-sm mt-2 text-[#6C757D] max-w-4/5">
                        We formed a passionate team of three, each bringing unique skills and perspectives that shaped our future.
                     </p>
                     <p className="text-xs text-[#0F8B8D] mt-4">
                        ⚓ Became Egypt&apos;s first Fjord dealer
                     </p>
                  </div>
               </div>

               {/* Timeline Item 2 */}
               <div className="relative flex items-center mb-24">
                  <div className="w-1/2 pr-10 text-left">
                     <p className="italic font-semibold">Chapter 2</p>
                     <h3 className="font-bold text-lg mt-1">Mediterranean Expansion</h3>
                     <p className="text-sm mt-2 text-[#6C757D] max-w-4/5">
                        We&apos;ve expanded to the Mediterranean coast, opening new markets and connecting with a diverse clientele.
                     </p>
                     <p className="text-xs text-[#0F8B8D] mt-4">
                        ⚓ Won &quot;Best Marine Dealer&quot; at Dubai Boat Show
                     </p>
                  </div>
                  <div className="relative z-10 w-5 h-5 bg-[#C7AB17] rounded-full border-3 border-white" />
                  <div className="w-1/2 pl-2  flex items-center gap-2 justify-start ">
                     <div className='border border-t border-[#C7AB17] w-12 '></div>
                     <p className="text-[#C7AB17] font-semibold text-lg">2023</p>
                  </div>
               </div>

               {/* Timeline Item 3 */}
               <div className="relative flex items-center mb-24">
                  <div className="w-1/2 pr-2 text-right flex items-center gap-2 justify-end ">
                     <p className="text-[#C7AB17] font-semibold text-lg ">2025</p>
                     <div className='border border-t border-[#C7AB17] w-12 '></div>
                  </div>
                  <div className="relative w-5 h-5 z-10">
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

                  <div className="w-1/2 pl-10">
                     <p className="italic font-semibold">Chapter 3</p>
                     <h3 className="font-bold text-lg mt-1">Market Leadership</h3>
                     <p className="text-sm mt-2 text-[#6C757D] max-w-4/5">
                        Delivered over fifty luxury yachts in Egypt, enhancing Mediterranean adventures with top-notch amenities for unforgettable journeys.
                     </p>
                     <p className="text-xs text-[#0F8B8D] mt-4">
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
