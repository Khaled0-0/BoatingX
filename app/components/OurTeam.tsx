import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
   return (
      <section className='flex flex-col gap-15 mb-25'>

         <div className="flex flex-col items-center gap-5 px-5 mb-10 text-center">
            <h2 className="text-[#0F1A2B] text-3xl md:text-4xl lg:text-5xl font-medium">
               Meet Our Team
            </h2>
            <p className="text-[#6C757D] text-sm  md:text-base leading-6 lg:w-full">
               From humble beginnings to market leadership, our journey reflects our commitment to excellence in marine luxury.
            </p>
         </div>

         <div className='grid w-full grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-5 md:gap-3'>
            <div className="relative group">
               <Image src="/assets/m1.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px] md:h-[120px] lg:h-[110px] gap-3 flex flex-col">
                  <h3 className="text-sm font-semibold text-white md:text-base lg:text-lg">
                     Leslie Alexander
                  </h3>
                  <p className="text-xs text-[#D4D4D4D8] opacity-90">
                     Co-Founder of BoatingX
                  </p>
               </div>
            </div>

            <div className="relative group">
               <Image src="/assets/w.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px] md:h-[120px] lg:h-[110px] gap-3 flex flex-col">
                  <h3 className="text-sm font-semibold text-white md:text-base lg:text-lg">
                     Marvin McKinney
                  </h3>
                  <p className="text-xs text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>

            <div className="relative col-span-2 group md:col-span-1">
               <Image src="/assets/m2.jpg" alt="Boat" className="w-full md:h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px] md:h-[120px] lg:h-[110px] gap-3 flex flex-col">
                  <h3 className="text-sm font-semibold text-white md:text-base lg:text-lg">
                     Cody Fisher
                  </h3>
                  <p className="text-xs text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>

            <div className="relative group">
               <Image src="/assets/m3.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px] md:h-[120px] lg:h-[110px] gap-3 flex flex-col">
                  <h3 className="text-sm font-semibold text-white md:text-base lg:text-lg">
                     Savannah Nguyen
                  </h3>
                  <p className="text-xs text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>

            <div className="relative group">
               <Image src="/assets/m4.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px] md:h-[120px] lg:h-[110px] gap-3 flex flex-col">
                  <h3 className="text-sm font-semibold text-white md:text-base lg:text-lg">
                     Ralph Edwards
                  </h3>
                  <p className="text-xs text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>
         </div>

      </section>
   )
}

export default OurTeam
