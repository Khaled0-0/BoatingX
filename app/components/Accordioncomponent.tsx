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
                     <h2 className='mb-4 text-[#0F1A2B] text-xl md:text-2xl'>
                        What size and type of boat is right for me?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     We help you choose the ideal boat based on your lifestyle, usage,
                     <br />
                     passenger needs, and budget. Whether you&apos;re into leisure cruising,
                     <br />
                     fishing, or water sports, we guide you to the best fit.
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-2">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>02</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-xl md:text-2xl'>
                        What is included in the boat&apos;s price?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     Our boat prices typically include the hull, standard equipment, and
                     <br />
                     base engine(s). Additional features like electronics, trailers,
                     <br />
                     shipping, registration, and taxes may vary and are quoted
                     <br />
                     separately.
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-3">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>03</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-xl md:text-2xl'>
                        Do you offer after-sales service and maintenance?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     Yes, BoatingX provides full after-sales support including scheduled
                     <br />
                     maintenance, warranty services, spare parts, and repairs to keep
                     <br />
                     your boat running smoothly.
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-4">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>04</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-xl md:text-2xl'>
                        Can I customize my boat or add optional features?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     Absolutely. Most models come with a range of options including
                     <br />
                     engine upgrades, electronics packages, upholstery choices, and
                     <br />
                     water sports gear.
                  </p>
               </AccordionContent>
            </AccordionItem>
            <br />
            <AccordionItem value="item-5">
               <AccordionTrigger>
                  <div className='flex'>
                     <span className='mr-3 text-2xl'>05</span>
                     <h2 className='mb-4 text-[#0F1A2B] text-xl md:text-2xl'>
                        How long does it take to receive my boat after ordering?
                     </h2>
                  </div>
               </AccordionTrigger>
               <AccordionContent className='bg-gray-100 p-4'>
                  <p className='text-[#0F1A2B] text-lg font-normal  '>
                     Delivery time depends on the model, availability, and                      <br />
                     customization. On average, it can range from 8 to 16 weeks. We&apos;ll
                     <br />
                     provide a clear timeline when you place your order.
                  </p>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   )
}

export default Accordioncomponent
