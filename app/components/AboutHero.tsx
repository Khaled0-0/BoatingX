import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
   return (
      <section>
         <div className='relative w-full h-screen overflow-hidden'>
            {/* Background Image */}
            <Image
               src="/assets/about-bg.jpg"
               alt="Boat on water"
               fill
               className="z-0 object-cover "
               priority
            />
            {/* the foam */}
            <Image
               src="/assets/Foam.png"
               alt="foam texture"
               fill
               className="z-10 object-cover opacity-60"
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 z-15"></div>
            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
               <div className="w-full mx-5 ">
                  <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
                     Where Passion Meets the Sea
                  </h1>
                  <p className="text-base font-light md:text-2xl lg:text-3xl opacity-90">
                     Egypt&apos;s premier curator of marine excellence
                  </p>
               </div>
            </div>
         </div>
      </section >
   )
}

export default AboutHero
