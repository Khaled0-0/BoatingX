import Image from 'next/image'
import React from 'react'
import { discoverData } from './discover-data';

const Discover = () => {
   return (
      <section className="relative h-[200vh] md:h-[185vh] lg:h-[120vh] w-full overflow-hidden screen__xl ">

         {/* Background Image */}
         <Image
            src="/assets/bg-brand.png"
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
            className="object-cover "
         />

         <div className='absolute w-full mt-24 not-italic text-center text-white md:mt-25 lg:mt-30'>

            <h1 className='m-4 text-xl not-italic font-medium md:text-3xl lg:text-4xl'>
               Discover Two Amazing Yacht Experiences
            </h1>
            <p className='m-4 text-base font-normal text-gray-200 md:text-lg lg:text-xl'>
               Select a brand to explore our curated collections
            </p>
         </div>

         <div className='absolute flex flex-col items-center justify-start w-full gap-10 px-5 transform -translate-x-1/2 -translate-y-1/2 pb-60  lg:gap-5 top-3/5 left-1/2 lg:flex-row md:justify-center lg:mt-5 md:pb-[150px] lg:pb-10'>

            {discoverData.map((section, sectionIndex) => (
               <div key={sectionIndex} className="glass-style w-full md:w-[600px] lg:w-[500px] xl__card">
                  <div className='flex flex-col items-center gap-4'>
                     <Image src={section.logo} alt='logo' width={170} height={32} />
                     <p className='text-base not-italic font-normal text-white md:text-lg'>
                        {section.title}
                     </p>
                  </div>

                  {/* Map over boats and group */}
                  {section.boats.map((boat, boatIndex) => {
                     if (boatIndex % 2 === 0) {
                        const nextBoat = section.boats[boatIndex + 1];
                        return (
                           <div key={boatIndex} className='flex flex-col items-center justify-between gap-5 md:flex-row pt-7'>
                              {/* First boat */}
                              <div className='flex items-center justify-around w-full gap-2 '>
                                 <Image src={boat.image} alt='logo' width={120} height={45}
                                    className='lg:w-[100px]' />
                                 <p className='text-sm not-italic font-semibold text-white lg:text-sm text-start'>
                                    {boat.name}
                                 </p>
                              </div>
                              {/* Second boat  */}
                              {nextBoat && (
                                 <div className='flex items-center justify-around w-full gap-2'>
                                    <Image src={nextBoat.image} alt='logo' width={120} height={45} className='lg:w-[100px]' />
                                    <p className='text-sm not-italic font-semibold text-white lg:text-sm'>
                                       {nextBoat.name}
                                    </p>
                                 </div>
                              )}
                           </div>
                        );
                     }
                     return null; // Don't render anything for odd indices as they are handled by the previous even index
                  })}

                  <button className='button-style buttons_hover'>VIEW CATALOG</button>

               </div>
            ))}

         </div>

      </section>
   )
}
export default Discover
