import React from 'react';
import Image from 'next/image';

const Hero = () => {
   return (
      <div className="relative w-full h-screen overflow-hidden">
         {/* Background Image */}
         <Image
            src="/assets/bg-hero.png"
            alt="Boat on water"
            fill
            className="z-0 object-cover"
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
         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 text-center text-white ">

            <div className="flex flex-col items-center max-w-4xl text-center">
               <h1 className="mt-20 mb-4 text-3xl font-medium leading-10 lg:leading-18 md:text-4xl lg:text-6xl md:mt-10">
                  Elevate Your Marine Journey {" "}
                  <span className='italic'>With {' '}</span>
                  BoatingX
               </h1>
               <p className="mb-12 text-base not-italic font-normal text-center text-gray-200 lg:text-2xl">
                  Egypt&apos;s premier destination for luxury
                  <br className='block md:hidden ' />
                  yachts and premium boating experiences.
               </p>

               {/* Action Buttons */}
               <div className="flex flex-col items-center justify-center w-full gap-5 sm:flex-row md:w-[80%]">

                  <button className="w-full p-2 text-xl font-medium tracking-wider text-white transition-all duration-300 border-2 border-white md:w-[80%] buttons_hover">
                     Explore Brands
                  </button>
                  <button className="w-full p-2 text-xl font-medium tracking-wider text-white transition-all duration-300 border-2 border-white buttons_hover">
                     Book a Consultation
                  </button>

               </div>
            </div>
         </div>

      </div>
   );
};

export default Hero;