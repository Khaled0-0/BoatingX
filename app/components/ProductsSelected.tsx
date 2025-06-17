import Image from 'next/image'
import React from 'react'
import { SLIDE_DATA } from './slidedata'
import { SlideData } from './embla/EmblaCarousel';

interface ProductsSelectedProps {
   searchTerm: string;
   products: SlideData[];
}

const ProductsSelected = ({ searchTerm, products }: ProductsSelectedProps) => {
   const dataToDisplay = searchTerm
      ? SLIDE_DATA.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : products;

   return (
      <section className='grid grid-cols-1 lg:grid-cols-2 md:mx-15 gap-5 my-10 mx-5 lg:mx-15'>
         {dataToDisplay.map((product, index) => (
            <div key={index} className='embla__slide__card flex flex-col justify-between gap-5'>
               <Image src={product.imageSrc} alt='boat' width={400} height={500}
                  className='!h-[300px] !w-[100%]' />
               <div className='flex flex-col items-start gap-2'>
                  <div className='flex items-center justify-between gap-5 w-full'>
                     <h2 className='embla__slide__title text-xl md:text-2xl lg:text-3xl'>{product.title}</h2>
                     <Image src={product.logoSrc} alt='fjord' width={128} height={24}
                        className='w-20 h-5 md:w-[100px] md:h-[18px] lg:w-[128px] lg:h-[24px]' />
                  </div>
                  <div>
                     <p className='embla__slide__price text-base md:text-lg lg:text-xl '>{product.price}</p>
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
