import React from 'react';
import Image from 'next/image';

const Hero = () => {
   return (
      <div className="relative h-screen w-full overflow-hidden">
         {/* Background Image */}
         <Image
            src="/assets/bg-hero.png"
            alt="Boat on water"
            fill
            className="object-cover z-0"
            priority
         />

         {/* Foam Overlay */}
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
               <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
                  Elevate Your Marine Journey
                  With BoatingX
               </h1>
               <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto opacity-90 font-light">
                  Egypt&apos;s premier destination for luxury yachts and premium boating experiences.
               </p>

               {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-medium tracking-wider min-w-[200px] cursor-pointer">
                     Explore Brands
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-xl font-medium tracking-wider min-w-[200px] cursor-pointer">
                     Book a Consultation
                  </button>

               </div>
            </div>
         </div>

      </div>
   );
};

export default Hero;