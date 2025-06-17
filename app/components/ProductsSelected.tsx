import Image from 'next/image'
import React from 'react'
import { SLIDE_DATA } from './slidedata'

interface ProductsSelectedProps {
   searchTerm: string;
}

const ProductsSelected = ({ searchTerm }: ProductsSelectedProps) => {
   const filteredData = SLIDE_DATA.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
   )

   const dataToDisplay = searchTerm
      ? filteredData
      : Array.from({ length: 10 }).map((_, index) => SLIDE_DATA[index % SLIDE_DATA.length])

   return (
      <section className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mx-5 lg:mx-15'>
         {dataToDisplay.map((product, index) => (
            <div key={index} className='embla__slide__card flex flex-col justify-between gap-5'>
               <Image src={product.imageSrc} alt='boat' width={400} height={500}
                  className='!h-[300px] !w-[100%]' />
               <div className='flex flex-col items-start gap-2'>
                  <div className='flex items-center justify-between w-full'>
                     <h2 className='embla__slide__title'>{product.title}</h2>
                     <Image src={product.logoSrc} alt='fjord' width={72} height={14} />
                  </div>
                  <div>
                     <p className='embla__slide__price '>{product.price}</p>
                  </div>
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
