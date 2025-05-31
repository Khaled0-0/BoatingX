"use client"

import React, { useCallback, useEffect, useRef } from 'react'
import {
   EmblaCarouselType,
   EmblaEventType,
   EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
   NextButton,
   PrevButton,
   usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image'

const TWEEN_FACTOR_BASE = 0.2

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
   const tweenFactor = useRef(0)
   const tweenNodes = useRef<HTMLElement[]>([])

   const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi)

   const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
   } = usePrevNextButtons(emblaApi)

   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
      tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
         return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
      })
   }, [])

   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
      tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
   }, [])

   const tweenParallax = useCallback(
      (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
         const engine = emblaApi.internalEngine()
         const scrollProgress = emblaApi.scrollProgress()
         const slidesInView = emblaApi.slidesInView()
         const isScrollEvent = eventName === 'scroll'

         emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
               if (isScrollEvent && !slidesInView.includes(slideIndex)) return

               if (engine.options.loop) {
                  engine.slideLooper.loopPoints.forEach((loopItem) => {
                     const target = loopItem.target()

                     if (slideIndex === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)

                        if (sign === -1) {
                           diffToTarget = scrollSnap - (1 + scrollProgress)
                        }
                        if (sign === 1) {
                           diffToTarget = scrollSnap + (1 - scrollProgress)
                        }
                     }
                  })
               }

               const translate = diffToTarget * (-1 * tweenFactor.current) * 100
               const tweenNode = tweenNodes.current[slideIndex]
               tweenNode.style.transform = `translateX(${translate}%)`
            })
         })
      },
      []
   )

   useEffect(() => {
      if (!emblaApi) return

      setTweenNodes(emblaApi)
      setTweenFactor(emblaApi)
      tweenParallax(emblaApi)

      emblaApi
         .on('reInit', setTweenNodes)
         .on('reInit', setTweenFactor)
         .on('reInit', tweenParallax)
         .on('scroll', tweenParallax)
         .on('slideFocus', tweenParallax)
   }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor])

   return (
      <div className="embla">

         <div className="embla__controls">
            <div className="embla__buttons ">
               <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            </div>

            <div className="embla__dots">
               {scrollSnaps.map((_, index) => (
                  <DotButton
                     key={index}
                     onClick={() => onDotButtonClick(index)}
                     className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                     )}
                  />
               ))}
            </div>
            <div className='embla__buttons'>
               <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
         </div>

         <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
               <div className="embla__container">
                  {slides.map((slide, index) => (
                     <div className="embla__slide" key={index}>
                        <div className="card-style">
                           <div className="embla__parallax__layer">
                              {/* card */}
                              <div className='border border-gray-200 rounded-b-sm max-w-[400px] '>
                                 <div className='overflow-x-clip h-fit'>
                                    <Image src={slide.image} alt={`Slide ${index}`}
                                       width={399} height={150} loading="eager"
                                    />
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

      </div>
   )
}

export default EmblaCarousel

