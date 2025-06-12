"use client"

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
   NextButton,
   PrevButton,
   usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image'


// Define the structure for slide data
export type SlideData = {
   imageSrc: string;
   title: string;
   price: string;
   logoSrc: string;
   details: {
      iconSrc: string;
      label: string;
      value: string;
   }[];
}

type PropType = {
   slides: SlideData[];
   options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
   const { slides, options } = props
   const [emblaRef, emblaApi] = useEmblaCarousel(options)
   const { selectedIndex, onDotButtonClick } =
      useDotButton(emblaApi)

   const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
   } = usePrevNextButtons(emblaApi)
   // 3-dot logic
   const DOT_COUNT = 4;
   const totalSlides = slides.length;
   const dotWindowStart = Math.floor(selectedIndex / DOT_COUNT) * DOT_COUNT;
   const getDotSlideIndex = (dotIdx: number) => {
      return (dotWindowStart + dotIdx) % totalSlides;
   };


   return (
      <div className="embla">

         <div className="embla__controls ">
            <div className="embla__buttons ">
               <PrevButton className='cursor-pointer' onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            </div>

            <div className="embla__dots">
               {[...Array(DOT_COUNT)].map((_, dotIdx) => {
                  const slideIdx = getDotSlideIndex(dotIdx);
                  return (
                     <DotButton
                        key={dotIdx}
                        onClick={() => onDotButtonClick(slideIdx)}
                        className={
                           'embla__dot' +
                           (slideIdx === selectedIndex ? ' embla__dot--selected' : '')
                        }
                     />
                  );
               })}
            </div>

            <div className='embla__buttons'>
               <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
         </div>

         <div className="embla__viewport " ref={emblaRef} >
            <div className="embla__container">
               {slides.map((slide, index) => (
                  <div className="embla__slide" key={index}>

                     <div className='embla__slide__card !h-[550px] !w-[450px]
                           flex flex-col items-start justify-around'>

                        <div>
                           <Image src={slide.imageSrc} alt={slide.title}
                              width={400} height={400}
                              className=' cursor-pointer !h-[250px] !w-[450px]'
                           />
                        </div>
                        <br />

                        <div className='embla__slide__header !w-full'>
                           <div className='flex items-center justify-between gap-2 '>
                              <h2 className='embla__slide__title text-2xl'>
                                 {slide.title}
                              </h2>
                              <Image src={slide.logoSrc} alt={`${slide.title} logo`}
                                 width={110} height={110} />
                           </div>
                           <div>
                              <p className='embla__slide__price'>{slide.price}</p>
                           </div>
                        </div>

                        <div className='embla__slide__details !w-full'>
                           {slide.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className='embla__slide__detail_item'>
                                 <Image src={detail.iconSrc} alt={detail.label} width={24} height={24} className='mx-auto' />
                                 <span className='embla__slide__detail_label'>{detail.label}</span>
                                 <span className='embla__slide__detail_value'>{detail.value}</span>
                              </div>
                           ))}
                        </div>

                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
   )
}

export default EmblaCarousel

