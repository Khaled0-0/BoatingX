import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhoWeAre = () => {
   return (
      <section className='mt-20 relative md:h-[900px] h-[650px] sm:h-[700px] xs:h-[550px] '>
         {/* Container for Background Image */}
         <div className="absolute inset-0 w-full h-full">
            {/* Desktop - Full Image */}
            <div className="hidden xs:hidden sm:block md:block lg:block">
               <Image
                  src={"/assets/wb.png"}
                  alt={"background"}
                  layout='fill'
                  objectFit='cover'
                  className="object-center"
               />
            </div>

            {/* Mobile - Right Half of Image */}
            <div className="block xs:block sm:hidden overflow-hidden h-full">
               <div className="w-[200%] h-full ml-[-50%]">
                  <Image
                     src={"/assets/wb.png"}
                     alt={"background mobile"}
                     layout='fill'
                     objectFit='cover'
                     className="object-right"
                  />
               </div>
            </div>
         </div>

         {/* Overlay Foam Texture */}
         <Image
            src="/assets/Foam.png"
            alt="foam texture"
            fill
            className="object-cover z-10"
         />

         {/* Content */}
         <div className='absolute z-10 left-[8%] top-[10%] w-[85%] h-[75%]  flex flex-col items-start md:justify-between'>
            <div>
               <Image src={'/assets/white-logo.svg'} alt='logo' width={130} height={100} className='xs:w-[60px] xs:h-[60px]' />
            </div>

            <div className='flex flex-col md:flex-row md:items-end md:justify-between w-full gap-6 
            '>
               <h2 className='text-white text-4xl md:text-6xl font-normal text-start md:text-center  mt-25 md:mt-0'>
                  Who We Are
               </h2>

               <div className='md:max-w-[50%] text-left flex flex-col gap-6'>
                  <p className='text-white text-ld md:text-xl font-normal leading-6 md:leading-7 '>
                     Founded by a group of passionate entrepreneurs with decades of experience in boating, media, and business, we came together with a shared vision — to transform how people in Egypt experience life at sea.
                  </p>

                  <Link href={'/about'}>
                     <button className='text-white border border-white text-sm md:text-lg font-normal py-2 px-4 max-w-[150px] cursor-pointer'>
                        ABOUT US
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default WhoWeAre