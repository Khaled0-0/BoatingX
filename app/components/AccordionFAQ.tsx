import React from 'react'
import Accordioncomponent from './Accordioncomponent'



const AccordionFAQ = () => {
   return (
      <section className='md:my-20 md:mx-15  lg:mx-30 px-5'>
         <div className='md:my-20 my-10'>
            <h2 className='text-[#0F1A2B] text-center text-4xl md:text-6xl font-normal'>
               Got Your Questions Answered!
            </h2>
         </div>
         <div className='mx-2'>
            <Accordioncomponent />
         </div>
      </section>
   )
}

export default AccordionFAQ
