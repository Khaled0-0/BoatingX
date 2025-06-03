import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
   return (
      <section>
         <div className='relative h-screen w-full overflow-hidden'>
            {/* Background Image */}
            <Image
               src="/assets/about-bg.jpg"
               alt="Boat on water"
               fill
               className=" object-cover z-0"
               priority
            />
            {/* the foam */}
            <Image
               src="/assets/Foam.png"
               alt="foam texture"
               fill
               className="object-cover z-10 opacity-60"
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 z-15"></div>
            {/* Content */}
            <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
               <div className="max-w-4xl mx-auto">
                  <h1 className="text-6xl md:text-7xl font-light  leading-tight">
                     Where Passion Meets the Sea
                  </h1>
                  <p className="text-base md:text-2xl max-w-2xl mx-auto opacity-90 font-light">
                     Egypt&apos;s premier curator of marine excellence
                  </p>
               </div>
            </div>
         </div>
      </section >
   )
}

export default AboutHero
