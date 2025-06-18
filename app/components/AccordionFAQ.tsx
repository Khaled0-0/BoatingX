import React from 'react'
import Accordioncomponent from './Accordioncomponent'



const AccordionFAQ = () => {
   return (
      <section className='px-6 md:px-10 md:my-20 '>
         <div className='my-10 md:my-20'>
            <h2 className='text-[#0F1A2B] text-center text-2xl md:text-4xl lg:text-5xl lg:mx-20 font-normal'>
               Got <span className='italic'>Your </span>Questions Answered!
            </h2>
         </div>
         <div className=' lg:mx-30'>
            <Accordioncomponent />
         </div>
      </section>
   )
}

export default AccordionFAQ
