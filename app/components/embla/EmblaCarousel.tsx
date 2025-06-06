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

         <div className="embla__controls ">
            <div className="embla__buttons ">
               <PrevButton className='cursor-pointer' onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
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

         <div className="embla__viewport " ref={emblaRef} >
            <div className="embla__container">
               {slides.map((slide, index) => (
                  <div className="embla__slide " key={index}>
                     <div className="embla__parallax">
                        <div className="embla__parallax__layer">
                           <div className='embla__slide__card'>
                              <div>
                                 <Image src={slide.imageSrc} alt={slide.title}
                                    width={400} height={500} />
                              </div>
                              <div className='embla__slide__header'>
                                 <div className='flex items-center justify-between '>
                                    <h2 className='embla__slide__title md:text-lg'>
                                       {slide.title}
                                    </h2>
                                    <Image src={slide.logoSrc} alt={`${slide.title} logo`}
                                       width={110} height={110} />
                                 </div>
                                 <div>
                                    <p className='embla__slide__price'>{slide.price}</p>
                                 </div>
                              </div>
                              <div className='embla__slide__details'>
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
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
   )
}

export default EmblaCarousel

