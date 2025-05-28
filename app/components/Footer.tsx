import React from 'react'
import Image from 'next/image'

const Footer = () => {
   return (
      <footer className='bg-[#1A253C] text-white py-12 relative overflow-hidden'>

         {/* Background Image */}
         <Image
            src='/assets/grain.jpg'
            alt='background grain texture'
            className='absolute inset-0 w-full h-full object-cover opacity-2 pointer-events-none'
            fill
         />

         <div className='container mx-auto px-4 flex items-start justify-between  '>
            {/* Left Section: Logo, Description, Social Media */}
            <div className=' max-w-65'>

               <Image src={'/assets/white-logo.svg'} alt='logo' width={120} height={120} />
               <p className='text-gray-400 my-4'>
                  FinEase is a finance platform you can
                  easily save, manage, and reach your
                  financial goals, all in one place!
               </p>

               <div className='flex space-x-4'>
                  {/* Social Media Icons (using placeholder divs for now) */}
                  <Image src={'/assets/linkedin.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/facebook.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Instagram.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Youtube.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />

               </div>
            </div>

            {/* Middle Sections: Link, Services */}
            <div className='flex gap-20'>

               <div>
                  <h3 className='font-bold mb-4'>Link</h3>
                  <ul>
                     <li className='mb-2 text-gray-400'>Yacht Collections</li>
                     <li className='mb-2 text-gray-400'>New Arrivals</li>
                     <li className='mb-2 text-gray-400'>Pre-Owned Selection</li>
                  </ul>
               </div>

               <div>
                  <h3 className='font-bold mb-4'>Services</h3>
                  <ul>
                     <li className='mb-2 text-gray-400'>Yacht Customization</li>
                     <li className='mb-2 text-gray-400'>Financing Options</li>
                     <li className='mb-2 text-gray-400'>Maintenance Programs</li>
                  </ul>
               </div>

               {/* Right Section: Boating X Info */}
               <div>
                  <h3 className='font-bold mb-4'>Boating X Info</h3>
                  <ul>
                     <li className='mb-2 text-gray-400'>Hurgada Marina, Red Sea, Egypt</li>
                     <li className='mb-2 text-gray-400'>+20 XXX XXX XXXX</li>
                     <li className='mb-2 text-gray-400'>info@boatingx.com</li>
                  </ul>
               </div>

            </div>

         </div>
         <div className='mt-10 w-fit max-auto'>
            <h2 className="text-[440px]  text-outline mb-[-280px] ml-[-60px]">
               BoatingX
            </h2>
         </div>
      </footer>
   )
}

export default Footer
