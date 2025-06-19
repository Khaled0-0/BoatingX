import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
   return (
      <footer className='bg-[#1A253C] text-white py-12 relative overflow-hidden'>

         {/* Background Image */}
         <Image
            src='/assets/grain.jpg'
            alt='background grain texture'
            className='absolute inset-0 object-cover w-full h-full pointer-events-none opacity-2'
            fill
         />

         <div className='container flex flex-col items-start px-4 mx-auto space-y-8 md:px-5 lg:px-10 md:flex-row md:justify-between md:space-y-0 md:mt-10'>
            {/* Left Section: Logo, Description, Social Media */}
            <div className='mb-0 md:max-w-65 lg:max-w-80 md:mb-5'>

               <Image src={'/assets/white-logo.svg'} alt='logo' width={140} height={120} />
               <p className='my-4 text-lg text-gray-400 '>
                  We are the exclusive dealer of Nordkapp and Fjord boats in Egypt — bringing cutting-edge Scandinavian and German craftsmanship to the Red Sea.
               </p>

               {/* Social Media Icons (using placeholder divs for now) */}
               {/* <div className='hidden space-x-4 md:flex'>
                  <Image src={'/assets/linkedin.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/facebook.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Instagram.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Youtube.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
               </div> */}
            </div>

            {/* Middle Sections: Link, Services */}
            <div className='flex flex-col w-full gap-2 md:flex-row lg:gap-20 lg:justify-end md:items-start md:justify-end '>

               <div className=''>
                  <h3 className='mb-4 font-bold'>Link</h3>
                  <ul>
                     <Link href={'/catalog'}>
                        <li className='mb-2 text-gray-400'>
                           Boats
                        </li>
                     </Link>
                     <Link href={'/brand'}>
                        <li className='mb-2 text-gray-400'>
                           Brands & Models
                        </li>
                     </Link>
                  </ul>
               </div>

               {/* <div>
                  <h3 className='mb-4 font-bold'>Services</h3>
                  <ul>
                     <li className='mb-2 text-gray-400'>Yacht Customization</li>
                     <li className='mb-2 text-gray-400'>Financing Options</li>
                     <li className='mb-2 text-gray-400'>Maintenance Programs</li>
                  </ul>
               </div> */}

               {/* Right Section: Boating X Info */}
               <div>
                  <h3 className='mb-4 font-bold'>Boating X Info</h3>
                  <ul className='flex flex-col'>
                     {/* <li className='mb-2 text-gray-400'>Hurgada Marina, Red Sea, Egypt</li> */}
                     <a href='tel: 123-456-789' className='mb-2 text-gray-400'>
                        Phone: 0122-778-5715
                     </a>
                     <a href='mailto: info@boatingx.com' className='mb-2 text-gray-400'>
                        Email: info@boatingx.com
                     </a>
                  </ul>
               </div>

               {/* Social Media Icons (using placeholder divs for now) */}
               {/* <div className='flex space-x-4 md:hidden'>
                  <Image src={'/assets/linkedin.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/facebook.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Instagram.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
                  <Image src={'/assets/Youtube.svg'} alt='facebook' width={35} height={35} className='cursor-pointer' />
               </div> */}

            </div>

         </div>
         <div className='w-full mt-5 md:mt-10 footer__container'>
            <h2 className="footer__text text-[130px]  text-outline mb-[-120px] mx-[-18px]
               md:text-[440px] md:mb-[-280px] md:ml-[-60px]">
               BoatingX
            </h2>
         </div>
      </footer>
   )
}

export default Footer
