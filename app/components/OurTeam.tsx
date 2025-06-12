import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
   return (
      <section className='flex flex-col gap-15 mb-25'>

         <div className="flex flex-col items-center gap-5 mb-10 text-center px-5">
            <h2 className="text-[#0F1A2B] text-3xl md:text-4xl lg:text-5xl font-medium">
               Meet Our Team
            </h2>
            <p className="text-[#6C757D] text-base md:text-lg leading-6 lg:w-full">
               From humble beginnings to market leadership, our journey reflects our commitment to excellence in marine luxury.
            </p>
         </div>

         <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 md:gap-3 w-full'>
            <div className="relative group">
               <Image src="/assets/m1.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px]">
                  <h3 className="font-semibold text-base lg:text-xl text-white">Leslie Alexander</h3>
                  <p className="text-base text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>

            <div className="relative group">
               <Image src="/assets/w.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0
                  bg-[#49494933] backdrop-blur-[5px] text-white p-2
                  text-center h-[100px]">
                  <h3 className="font-semibold text-base lg:text-xl mt-1 text-white">Marvin McKinney</h3>
                  <p className="text-base text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>

            <div className="relative group col-span-2 md:col-span-1">
               <Image src="/assets/m2.jpg" alt="Boat" className="w-full md:h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0
                  bg-[#49494933] backdrop-blur-[5px] text-white p-3
                  text-center h-[100px]">
                  <h3 className="font-semibold text-base lg:text-xl text-white">Cody Fisher</h3>
                  <p className="text-base text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>

            <div className="relative group">
               <Image src="/assets/m3.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px]">
                  <h3 className="font-semibold text-base lg:text-xl text-white">Savannah Nguyen</h3>
                  <p className="text-base text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>

            <div className="relative group">
               <Image src="/assets/m4.jpg" alt="Boat" className="w-full h-[450px] object-cover" width={280} height={400} />
               <div className="absolute bottom-0 left-0 right-0 
               bg-[#49494933] backdrop-blur-[5px] text-white p-3
               text-center h-[100px]">
                  <h3 className="font-semibold text-base lg:text-xl text-white">Ralph Edwards</h3>
                  <p className="text-base text-[#D4D4D4D8] opacity-90">Co-Founder of BoatingX</p>
               </div>
            </div>
         </div>

      </section>
   )
}

export default OurTeam
