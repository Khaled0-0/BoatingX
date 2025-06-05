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

         <div className='container mx-auto px-4 flex flex-col items-center space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0 '>
            {/* Left Section: Logo, Description, Social Media */}
            <div className=' md:max-w-65 mb-0 md:mb-5'>

               <Image src={'/assets/white-logo.svg'} alt='logo' width={120} height={120} />
               <p className='text-gray-400 my-4'>
                  FinEase is a finance platform you can
                  easily save, manage, and reach your
                  financial goals, all in one place!
               </p>

               <div className='md:flex space-x-4 hidden'>
                  {/* Social Media Icons (using placeholder divs for now) */}
                  <Image src={'/assets/linkedin.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/facebook.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Instagram.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Youtube.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />

               </div>
            </div>

            {/* Middle Sections: Link, Services */}
            <div className='flex flex-col w-full gap-4 md:flex-row   md:justify-evenly md:gap-20'>

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

               <div className='md:hidden space-x-4 flex'>
                  {/* Social Media Icons (using placeholder divs for now) */}
                  <Image src={'/assets/linkedin.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/facebook.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Instagram.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Youtube.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
               </div>

            </div>

         </div>
         <div className='mt-5 md:mt-10 w-full'>
            <h2 className="text-[130px]  text-outline mb-[-120px] mx-[-18px]
               md:text-[440px] md:mb-[-280px] md:ml-[-60px]">
               BoatingX
            </h2>
         </div>
      </footer>
   )
}

export default Footer
