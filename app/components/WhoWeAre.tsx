import React from 'react'
import Image from 'next/image'

const WhoWeAre = () => {
   return (
      <section className='mt-20 relative h-[900px] overflow-clip'>
         <div>
            <Image src={"/assets/wb.png"} alt={"background"} layout='fill' objectFit='cover' className=' z-0' />
         </div>

         <div className='absolute z-10 left-1/12 top-1/6 w-4/5 h-[75%] flex flex-col items-start justify-between '>
            <div className=''>
               <Image src={'/assets/white-logo.svg'} alt='logo' width={150} height={150} />
            </div>
            <div className='flex justify-between items-end w-full'>
               <div>
                  <h2 className='text-[#FFF] text-center  text-6xl font-normal'>Who We Are</h2>
               </div>
               <div className='max-w-2/4 flex flex-col gap-7'>
                  <p className='text-[#FFF] text-lg font-normal max-w-4/5 leading-7'>
                     Founded by Mark Richard in 1995, Palm Beach Motor Yachts is a World celebrated, award-winning boat builder of downeast- style luxury motor yachts. We proudly offer an impressive portfolio of 34 model variations, ranging in size from 42 feet to 107 feet across our Classic, GT, and GTRS model ranges.
                     Each of our luxury motor yacht models is frawlasley crafted from the ground up, delivering performance, impressive range, and supreme fuel efficiency for a yachting experience unlike any other. Our meticulous dedication to quality reflects our unwavering commitment to safeguarding your investment in our motor yachts, ensuring that every moment of your yachting journey is truly exceptional.
                  </p>
                  <button className='text-[#FFF] border border-[#FFF] text-center text-lg font-normal py-1 px-2  cursor-pointer max-w-3/12 '>ABOUT US</button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default WhoWeAre
