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
               <div className="flex flex-col items-center w-full gap-2 mx-5">
                  <h1 className="text-3xl font-light leading-tight md:text-5xl lg:text-6xl">
                     Elevating Boating in Egypt
                  </h1>
                  <p className="text-sm font-light md:text-base lg:text-lg opacity-90 md:max-w-[79%]">
                     At BoatingX, we&apos;re not just selling boats — we&apos;re creating a new standard for premium maritime lifestyle in Egypt. As the exclusive dealer for Nordkapp and Fjord boats, we bring world-renowned Scandinavian innovation and German engineering to one of the most beautiful coastlines in the world.
                  </p>
               </div>
            </div>
         </div>
      </section >
   )
}

export default AboutHero
