import React from 'react'
import Image from 'next/image'

const HelpSection = () => {
   return (
      <section className='mt-10 relative h-[400px] overflow-clip'>
         <div>
            <Image src={"/assets/bg-water.jpg"} alt={"background"} layout='fill' objectFit='cover' className='' />
            <Image
               src="/assets/Foam.png"
               alt="foam texture"
               fill
               className="z-10 object-cover opacity-60"
            />
         </div>
         <div className='absolute inset-0 z-20 flex flex-col items-center justify-center w-full p-3'>
            <h2 className='text-3xl not-italic font-medium text-center text-white md:text-4xl lg:text-5xl'>
               Still Need Help Deciding?
            </h2>
            <p className='mt-5 text-sm not-italic font-normal text-white md:text-base lg:text-xl'>
               Our Marine Specialists Guide You Personally
            </p>
            <button className='py-2 mt-6 text-xl font-bold text-center text-white border border-white buttons_hover px-7 md:px-12 md:py-2'>
               contact us
            </button>
         </div>
      </section>
   )
}

export default HelpSection
