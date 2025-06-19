import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhoWeAre = () => {
   return (
      <section className='mt-20  relative md:h-[900px] h-[900px] sm:h-[900px] xs:h-[950px] '>
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
            <div className="block h-full overflow-hidden xs:block sm:hidden">
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
            className="z-10 object-cover"
         />

         {/* Content */}
         <div className='absolute z-10 left-[8%] top-[10%] w-[85%] h-[75%]  flex flex-col items-start md:justify-between'>
            <div>
               <Image src={'/assets/white-logo.svg'} alt='logo' width={130} height={100} className='xs:w-[60px] xs:h-[60px]' />
            </div>

            <div className='flex flex-col w-full gap-6 lg:flex-row lg:items-end md:flex md:items-start md:justify-between '>

               <h2 className='mt-20 text-4xl font-normal text-white md:text-6xl text-start md:text-center md:mt-0'>
                  Who We Are
               </h2>

               <div className='lg:max-w-[50%] text-left flex flex-col gap-6'>
                  <p className='text-base font-normal leading-6 text-white md:text-xl md:leading-7 '>
                     We are the exclusive dealer of Nordkapp and Fjord boats in Egypt — bringing cutting-edge Scandinavian and German craftsmanship to the Red Sea.
                     Founded by a team of entrepreneurs with deep roots in boating, media, and business, we&apos;re on a mission to elevate the boating experience in Egypt with world-class design, performance, and service.
                     At BoatingX , we don&apos;t just sell boats — we help you live the boating lifestyle. From your first inquiry to after-sales support, we&apos;re with you every step of the way.
                     <br />
                     <br />
                     Explore. Cruise. Wander.
                  </p>

                  <Link href={'/about'}>
                     <button className='text-white border border-white text-sm md:text-lg font-normal py-2 px-4 max-w-[150px] buttons_hover'>
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