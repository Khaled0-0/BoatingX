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
               className=" object-cover z-10 opacity-60"
            />
         </div>
         <div className='absolute z-20 inset-0 flex flex-col items-center justify-center p-3 w-full'>
            <h2 className='text-white text-center text-3xl md:text-5xl lg:text-6xl font-medium not-italic'>
               Still Need Help Deciding?
            </h2>
            <p className='text-white font-normal text-base lg:text-xl mt-5 not-italic'>
               Our Marine Specialists Guide You Personally
            </p>
            <button className='text-white text-center text-xl font-bold border border-white px-12 py-2 cursor-pointer mt-6'>
               contact us
            </button>
         </div>
      </section>
   )
}

export default HelpSection
