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
      <section className='grid h-full grid-cols-1 gap-10 m-4 md:m-10 justify-items-center lg:grid-cols-2 lg:flex-row'>
         {dataToDisplay.map((product, index) => (
            <div key={index} className='flex flex-col justify-between w-full h-full gap-4 p-5 border-gray-200 border-1'
            >
               <div className="relative w-full h-[300px] overflow-hidden">
                  <Image
                     src={product.imageSrc}
                     alt="boat"
                     fill
                     className="object-cover"
                  />
               </div>


               <div className='flex flex-col items-start gap-2'>
                  <div className='flex flex-col items-start justify-between w-full gap-3'>
                     <Image src={product.logoSrc} alt='fjord' width={118} height={24}
                        className='w-20 h-5 md:w-[100px] md:h-[18px] lg:w-[110px] lg:h-[24px]' />
                     <h2 className='text-xl embla__slide__title md:text-2xl lg:text-2xl'>
                        {product.title}
                     </h2>
                     <p className='text-base embla__slide__price md:text-lg lg:text-base '>
                        {product.price}
                     </p>
                  </div>
               </div>

               <div className="flex flex-wrap items-center justify-center mb-2 border border-gray-200">
                  {product.details.map((detail, detailIndex) => (
                     <div
                        key={detailIndex}
                        className="flex flex-col items-center justify-center w-1/2 gap-2 p-3 md:w-1/3">
                        <Image
                           src={detail.iconSrc}
                           alt={detail.label}
                           width={24}
                           height={24}
                           className="mx-auto"
                        />
                        <div
                           className={`flex flex-col gap-3 ${detailIndex === 2 ? "items-center md:items-center w-[200px] lg:w-full" : "items-center"
                              }`}>
                           <span className="text-sm md:text-base embla__slide__detail_label">
                              {detail.label}
                           </span>
                           <span className="text-sm md:text-base embla__slide__detail_value">
                              {detail.value}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>


            </div>
         ))}
      </section>
   )
}

export default ProductsSelected
