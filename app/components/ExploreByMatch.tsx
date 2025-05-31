import React from 'react';
import Image from 'next/image';
import { matchData } from './matchData';

const ExploreByMatch = () => {
   return (
      <section className="bg-white py-20 px-6 lg:px-40">
         <div className="flex flex-col items-center gap-2 mb-10 text-center">
            <h2 className="text-[#0F1A2B] text-4xl lg:text-5xl font-medium">
               Explore Your Perfect Match
            </h2>
            <p className="text-[#6C757D] text-lg leading-6 max-w-2xl">
               Explore what makes each brand unique
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {matchData.map(({ id, logo, description, features, cta }) => (
               <article
                  key={id}
                  className="p-8 border border-gray-200 rounded"
               >
                  <header className="mb-6">
                     <Image src={logo} alt="brand logo" width={160} height={32} />
                     <p className="text-[#6C757D] text-lg mt-4 leading-6">
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
                                 width={16}
                                 height={16}
                              />
                           </div>
                           <span className="text-[#0F1A2B] text-lg font-medium">
                              {feature}
                           </span>
                        </li>
                     ))}
                  </ul>

                  <button className="text-[#C7AB17] cursor-pointer border border-[#C7AB17] px-6 py-2 w-full uppercase font-bold text-xl bg-gray-200/10 hover:bg-gray-100 transition">
                     {cta}
                  </button>
               </article>
            ))}
         </div>
      </section>
   );
};

export default ExploreByMatch;
