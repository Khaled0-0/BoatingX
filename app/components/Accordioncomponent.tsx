import React from 'react'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "./ui/accordion"



const Accordioncomponent = () => {
   return (
      <div>
         <Accordion className='border-b border-gray-200'
            type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>01</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-2xl'>
                        Why choose an authorized dealer like BoatingX?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     We provide tailored solutions through our marine finance partners:
                     <br />
                     Flexible payment plans (up to 10 years)
                     <br />
                     Charter management programs
                     <br />
                     Corporate leasing structures
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-2">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>02</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-2xl'>
                        What financing options are available?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     We provide tailored solutions through our marine finance partners:
                     <br />
                     Flexible payment plans (up to 10 years)
                     <br />
                     Charter management programs
                     <br />
                     Corporate leasing structures
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-3">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>03</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-2xl'>
                        How do you handle maintenance in Egypt?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     We provide tailored solutions through our marine finance partners:
                     <br />
                     Flexible payment plans (up to 10 years)
                     <br />
                     Charter management programs
                     <br />
                     Corporate leasing structures
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-4">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>04</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-2xl'>
                        Can I customize my yacht?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     We provide tailored solutions through our marine finance partners:
                     <br />
                     Flexible payment plans (up to 10 years)
                     <br />
                     Charter management programs
                     <br />
                     Corporate leasing structures
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-5">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>05</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-2xl'>
                        What&apos;s the delivery timeline?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     We provide tailored solutions through our marine finance partners:
                     <br />
                     Flexible payment plans (up to 10 years)
                     <br />
                     Charter management programs
                     <br />
                     Corporate leasing structures
                  </p>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   )
}

export default Accordioncomponent
