import Image from 'next/image'
import React from 'react'
import { discoverData } from './discover-data';

const Discover = () => {
   return (
      <section className="relative h-screen w-full overflow-hidden">
         {/* Background Image */}
         <Image
            src="/assets/bg-brand.png"
            alt="Boat on water"
            fill
            className="object-cover z-0"
            priority
         />

         {/* the foam */}
         <Image
            src="/assets/Foam.png"
            alt="foam texture"
            fill
            className="object-cover "
         />

         <div className='text-center not-italic text-white absolute pt-40 w-full'>
            <h1 className='text-5xl font-medium'>
               Discover Two Amazing Yacht Experiences
            </h1>
            <p className='text-lg font-normal mt-3'>
               Select a brand to explore our curated collections
            </p>
         </div>

         <div className='absolute top-3/5 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-5 max-w-6xl'>

            {discoverData.map((section, sectionIndex) => (
               <div key={sectionIndex} className="glass-style ">
                  <div className='flex flex-col items-center gap-4'>
                     <Image src={section.logo} alt='logo' width={170} height={32} />
                     <p className='text-white text-lg font-normal not-italic'>
                        {section.title}
                     </p>
                  </div>

                  {/* Map over boats and group in pairs for display */}
                  {section.boats.map((boat, boatIndex) => {
                     if (boatIndex % 2 === 0) {
                        const nextBoat = section.boats[boatIndex + 1];
                        return (
                           <div key={boatIndex} className='flex items-center justify-between mt-8'>
                              {/* First boat in the pair */}
                              <div className='flex items-center gap-2'>
                                 <Image src={boat.image} alt='logo' width={120} height={45} />
                                 <p className='text-white text-base not-italic font-semibold'>
                                    {boat.name}
                                 </p>
                              </div>
                              {/* Second boat in the pair (if exists) */}
                              {nextBoat && (
                                 <div className='flex items-center gap-2'>
                                    <Image src={nextBoat.image} alt='logo' width={120} height={45} />
                                    <p className='text-white text-base not-italic font-semibold'>{nextBoat.name}</p>
                                 </div>
                              )}
                           </div>
                        );
                     }
                     return null; // Don't render anything for odd indices as they are handled by the previous even index
                  })}

                  <button className='button-style'>VIEW CATALOG</button>

               </div>
            ))}

         </div>

      </section>
   )
}
export default Discover
