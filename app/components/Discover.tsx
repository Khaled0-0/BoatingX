import Image from 'next/image'
import React from 'react'
import { discoverData } from './discover-data';

const Discover = () => {
   return (
      <section className="relative h-[250vh] md:h-[160vh] lg:h-[120vh] w-full overflow-hidden screen__xl ">

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

         <div className='text-center not-italic text-white absolute pt-35 w-full'>
            <h1 className='text-3xl md:text-5xl font-medium'>
               Discover Two Amazing Yacht Experiences
            </h1>
            <p className='md:text-xl text-lg font-normal my-3 text-gray-200'>
               Select a brand to explore our curated collections
            </p>
         </div>

         <div className='absolute top-3/5  left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row items-center justify-start md:justify-center gap-10 w-full h-full pt-30 md:pt-5 px-2 md:flex-row'>

            {discoverData.map((section, sectionIndex) => (
               <div key={sectionIndex} className="glass-style w-full md:w-[350px] lg:w-[500px] xl__card">
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
                           <div key={boatIndex} className='flex flex-col items-center justify-between lg:flex-row   gap-5 pt-7'>
                              {/* First boat in the pair */}
                              <div className='flex items-center gap-2 w-full justify-between
                              '>
                                 <Image src={boat.image} alt='logo' width={120} height={45}
                                    className='lg:w-[100px]' />
                                 <p className='text-white text-base not-italic font-semibold'>
                                    {boat.name}
                                 </p>
                              </div>
                              {/* Second boat in the pair (if exists) */}
                              {nextBoat && (
                                 <div className='flex items-center gap-2 w-full justify-between
                                 '>
                                    <Image src={nextBoat.image} alt='logo' width={120} height={45} className='lg:w-[100px]' />
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
