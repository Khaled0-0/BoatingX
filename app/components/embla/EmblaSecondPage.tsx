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
   image: string;
   heading: string;
   paragraph: string;
}

type PropType = {
   slides: SlideData[]; // Update PropType to accept array of SlideData
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

         <div className="embla__controls">
            <div className="embla__buttons ">
               <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
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

         <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
               {slides.map((slide, index) => (
                  <div className="embla__slide " key={index}>
                     <div className="card-style ">
                        <div className="embla__parallax__layer ">
                           {/* card */}
                           <div className='border border-gray-200 rounded-b-sm !h-[550px]  
                           flex flex-col items-start justify-between w-full md:mx-5'>

                              <div className=''>
                                 <Image src={slide.image} alt={`Slide ${index}`}
                                    width={399} height={150} loading="eager"
                                    className='cursor-pointer !h-[250px] !w-[450px]' />
                              </div>
                              <div className='px-5 pt-5 pb-7'>
                                 <h3 className='my-4 text-[#0F1A2B] text-2xl font-semibold not-italic'>
                                    {slide.heading}
                                 </h3>
                                 <p className='mb-4 text-[#6C757D] text-lg font-normal not-italic max-w-4/5'>
                                    {slide.paragraph}
                                 </p>
                                 <button className='uppercase text-[#C7AB17] text-lg font-bold border border-[#C7AB17] px-6 py-2 cursor-pointer w-full'>
                                    view yacht
                                 </button>
                              </div>
                           </div>
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

