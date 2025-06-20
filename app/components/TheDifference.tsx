import Image from 'next/image'
import React from 'react'

const TheDifference = () => {
   return (
      <section className='mb-20'>

         <div className='m-5 text-center mb-25'>
            <h2 className='text-[#0F1A2B] md:text-4xl lg:text-5xl text-3xl font-medium-'>
               The <span className='italic'>Boating X </span> Difference
            </h2>
         </div>

         <div className='flex flex-col items-center justify-between gap-5 px-5 md:gap-10 md:px-10 lg:px-20 lg:flex-row lg:gap-10'>

            <div className='p-5 bg-white shadow-sm flex flex-col items-center md:w-[500px] 
            lg:mt-[200px] '>
               <Image src="/assets/curted.svg" alt="Boat" width={32} height={32} />
               <h3 className='mt-5 text-[#0F1A2B] text-xl font-semibold '>
                  Curated Fleet
               </h3>
               <p className='mt-4 text-[#6C757D] text-center text-base font-normal 
               px-8 w-full md:px-0 lg:max-w-10/12'>
                  Handpicked selection of the world&apos;s finest yachts
               </p>
            </div>

            <div className='p-5 bg-white shadow-sm flex flex-col items-center w-fit md:w-[500px]'>
               <Image src="/assets/BookOpenText.svg" alt="Boat" width={32} height={32} />
               <h3 className='mt-5 text-[#0F1A2B] text-xl font-semibold'>
                  Legacy Knowledge
               </h3>
               <p className='mt-4 text-[#6C757D] text-center text-base font-normal 
               px-8 w-full md:px-0 lg:max-w-10/12'>
                  5+ years of Egyptian maritime expertise
               </p>
            </div>

            <div className='p-5 bg-white shadow-sm flex flex-col items-center w-fit lg:mt-[200px]
            md:w-[500px]'>
               <Image src="/assets/curted.svg" alt="Boat" width={32} height={32} />
               <h3 className='mt-5 text-[#0F1A2B] text-xl font-semibold'>
                  Localized Support
               </h3>
               <p className='mt-4 text-[#6C757D] text-center text-base font-normal 
               px-8 w-full md:px-0 lg:max-w-10/12'>
                  24/7 assistance across Egyptian waters
               </p>
            </div>

         </div>

         <div className='flex items-center justify-center my-10 md:mt-20 '>
            <div className='md:border-30 border-15 border-[#D4AF37] rounded-full bg-[#D4AF37]'>
               <Image src="/assets/Frame.svg" alt="Boat" width={64} height={64}
                  className='text-red-400' />
            </div>
         </div>


         <div className='flex flex-col items-center justify-between gap-5 px-5 md:gap-10 md:px-10 lg:px-20 lg:flex-row lg:gap-10'>

            <div className='p-5 bg-white shadow-sm flex flex-col items-center w-fit
            md:w-[500px]'>
               <Image src="/assets/SketchLogo.svg" alt="Boat" width={32} height={32} />
               <h3 className='mt-5 text-[#0F1A2B] text-xl font-semibold'>
                  Lifetime Value
               </h3>
               <p className='mt-4 text-[#6C757D] text-center text-base font-normal 
               px-8 w-full md:px-0 lg:max-w-10/12'>
                  Investment protection and resale assistance
               </p>
            </div>

            <div className='p-5 bg-white shadow-sm flex flex-col items-center w-fit lg:mt-[200px]
            md:w-[500px]'>
               <Image src="/assets/BookOpenText.svg" alt="Boat" width={32} height={32} />
               <h3 className='mt-5 text-[#0F1A2B] text-xl font-semibold'>
                  Owner Community
               </h3>
               <p className='mt-4 text-[#6C757D] text-center text-base font-normal 
               px-8 w-full md:px-0 lg:max-w-10/12'>
                  Exclusive events and networking opportunities
               </p>
            </div>

            <div className='p-5 bg-white shadow-sm flex flex-col items-center w-fit
            md:w-[500px]'>
               <Image src="/assets/NotePencil.svg" alt="Boat" width={32} height={32} />
               <h3 className='mt-5 text-[#0F1A2B] text-xl font-semibold'>
                  Custom Tailoring
               </h3>
               <p className='mt-4 text-[#6C757D] text-center text-base font-normal 
               px-8 w-full md:px-0 lg:max-w-10/12'>
                  Personalized yacht modifications to your specifications
               </p>
            </div>

         </div>


      </section>
   )
}

export default TheDifference
