import React from 'react';
import Image from 'next/image';
import { matchData } from './matchData';

const ExploreByMatch = () => {
   return (
      <section className="px-5 bg-white py-15 lg:px-15 style_lg">

         <div className="flex flex-col items-center gap-2 mb-10 text-center">
            <h2 className="text-[#0F1A2B] md:text-4xl lg:text-5xl text-2xl font-medium">
               Explore <span className='italic'>Your </span> Perfect Match
            </h2>
            <p className="text-[#6C757D] text-sm md:text-base lg:text-lg leading-6">
               Explore what makes each brand unique
            </p>
         </div>

         <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:py-10 md:justify-items-center">
            {matchData.map(({ id, logo, description, features, cta }) => (
               <article
                  key={id}
                  className="p-5 border border-gray-200 rounded md:w-[70%] lg:w-full justify-end flex flex-col items-center md:py-8">
                  <header className="w-full mb-6 md:flex md:flex-col md:items-start">
                     <Image src={logo} alt="brandq logo" width={100} height={100}
                        className='' />
                     <p className="text-[#6C757D] text-sm md:text-base lg:text-lg mt-4 leading-6">
                        {description}
                     </p>
                  </header>

                  <ul className="flex flex-col gap-4 mb-6">
                     {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                           <div className="bg-[#C7AB17]/10 rounded-full p-1 w-fit">
                              <Image
                                 src="/assets/nike-icon.svg"
                                 alt="check icon"
                                 width={20}
                                 height={20}
                              />
                           </div>
                           <span className="text-sm font-medium text-[#0F1A2B] d:text-base lg:text-lg">
                              {feature}
                           </span>
                        </li>
                     ))}
                  </ul>

                  <div className='flex items-center justify-center'>
                     <button className="text-[#C7AB17] cursor-pointer border border-[#C7AB17] px-4 py-2 uppercase font-bold text-sm md:text-xl buttons_hover">
                        {cta}
                     </button>
                  </div>
               </article>
            ))}
         </div>
      </section>
   );
};

export default ExploreByMatch;
