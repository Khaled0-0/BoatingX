import Image from 'next/image'
import React from 'react'
import { SLIDE_DATA } from './slidedata'

const ProductsSelected = () => {
   const dataToDisplay = Array.from({ length: 10 }).map((_, index) => SLIDE_DATA[index % SLIDE_DATA.length])

   return (
      <section className='grid grid-cols-2 gap-5 py-5 px-30'>
         {dataToDisplay.map((product, index) => (
            <div key={index} className='embla__slide__card'>
               <Image src={product.imageSrc} alt='boat' width={6000} height={500} />
               <div className='flex items-center justify-between'>
                  <h2 className='embla__slide__title'>{product.title}</h2>
                  <Image src={product.logoSrc} alt='fjord' width={140} height={140} />
               </div>
               <div>
                  <p className='embla__slide__price '>{product.price}</p>
               </div>
               <div className='embla__slide__details'>
                  {product.details.map((detail, detailIndex) => (
                     <div key={detailIndex} className='embla__slide__detail_item'>
                        <Image src={detail.iconSrc} alt={detail.label} width={24} height={24} className='mx-auto' />
                        <span className='embla__slide__detail_label'>{detail.label}</span>
                        <span className='embla__slide__detail_value'>{detail.value}</span>
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </section>
   )
}

export default ProductsSelected
