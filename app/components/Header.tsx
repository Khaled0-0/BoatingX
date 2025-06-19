'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/app/components/hooks/drawer"

const links = [
   { name: 'HOME', path: '/' },
   { name: 'BRANDS & MODELS', path: '/brand' },
   // { name: 'ABOUT', path: '/about' },
   { name: 'BOATS', path: '/catalog' },
]

const Header = () => {
   const pathname = usePathname()
   const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         // Change header style when scrolled past hero section (assuming hero is viewport height)
         const scrollPosition = window.scrollY
         const heroHeight = window.innerHeight

         setIsScrolled(scrollPosition > heroHeight * 0.8) // Trigger at 80% of hero height
      }

      // Only attach scroll listener if not on catalog or contact-us pages
      if (pathname !== '/catalog' && pathname !== '/contact-us') {
         window.addEventListener('scroll', handleScroll)
      }
      return () => window.removeEventListener('scroll', handleScroll)
   }, [pathname]) // Add pathname to dependencies to re-run effect on path change

   // Determine if we should force the scrolled style
   const forceScrolled = pathname === '/catalog' || pathname === '/contact-us';

   return (
      <header
         className={`fixed top-0 z-50 w-full flex items-center justify-between p-5 md:px-8  transition-all duration-500 border-b ${forceScrolled
            ? 'bg-white/95 backdrop-blur-md border-b-gray-200'
            : isScrolled
               ? 'bg-white/95 backdrop-blur-md border-b-white'
               : 'bg-transparent border-b-gray-100/10'
            }`}
      >
         <div>
            <Link href='/'>
               <Image
                  className='mt-1 '
                  src={forceScrolled || isScrolled ? '/assets/black-logo.svg' : '/assets/white-logo.svg'}
                  alt='logo'
                  width={160}
                  height={50}
                  priority
               />
            </Link>
         </div>

         {/* Desktop Navigation */}
         <nav className="items-center hidden gap-8 text-sm font-medium tracking-wider lg:flex">
            {links.map(link => {
               const isActive = pathname === link.path;
               const baseColor = forceScrolled || isScrolled ? 'black' : 'white';
               const hoverColor = (forceScrolled || isScrolled) ? 'hover:text-black' : 'hover:text-gray-200';
               const inactiveColor = (forceScrolled || isScrolled) ? 'text-gray-700' : 'text-white';

               return (
                  <Link
                     key={link.name}
                     href={link.path}
                     className={`relative group transition-all duration-300 
                     ${isActive ? (baseColor === 'black' ? 'text-black' : 'text-white') : inactiveColor} 
                     ${hoverColor}`}
                  >
                     {link.name}
                     <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full transform transition-all duration-300 origin-left scale-x-0 
                     ${baseColor === 'black' ? 'bg-black' : 'bg-white'} 
                        ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
                     />
                  </Link>
               );
            })}
         </nav>

         {/* Desktop Contact Button */}
         <div className="hidden lg:block">
            <Link href='/contact-us'>
               <button
                  className={`px-6 py-2 border cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide ${forceScrolled || isScrolled
                     ? 'buttons_hover text-black'
                     : 'buttons_hover text-white'
                     }`}
               >
                  CONTACT US
               </button>
            </Link>
         </div>

         {/* Mobile/Tablet Drawer */}
         <div className="lg:hidden">
            <Drawer direction="right">
               <DrawerTrigger>
                  {/* Hamburger Icon (replace with a proper icon) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 cursor-pointer ${forceScrolled || isScrolled ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
               </DrawerTrigger>
               <DrawerContent>
                  <DrawerHeader>
                     <DrawerTitle></DrawerTitle>
                     {/* Close button */}
                     <DrawerClose asChild>
                        <div className="absolute right-4 top-4">
                           <Image
                              src="/assets/close.svg"
                              alt="Close"
                              width={24}
                              height={24}
                              className="cursor-pointer"
                           />
                        </div>
                     </DrawerClose>
                  </DrawerHeader>
                  <div className="flex flex-col items-start gap-4 p-4">
                     {links.map(link => {
                        const isActive = pathname === link.path;
                        const colorClass = forceScrolled || isScrolled ? 'text-black' : 'text-gray-700';

                        return (
                           <DrawerClose key={link.name} asChild>
                              <Link
                                 key={link.name}
                                 href={link.path}
                                 className={`text-lg font-medium ${isActive ? 'font-bold' : ''} ${colorClass}`}
                              >
                                 {link.name}
                              </Link>
                           </DrawerClose>
                        );
                     })}
                     <DrawerClose asChild>
                        <Link href='/contact-us'>
                           <button
                              className={`mt-4 px-6 py-2 border cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide ${forceScrolled || isScrolled
                                 ? 'border-black text-black hover:bg-black hover:text-white'
                                 : 'border-black text-black hover:bg-black hover:text-white'
                                 }`}
                           >
                              Contact Us
                           </button>
                        </Link>
                     </DrawerClose>
                  </div>
                  <DrawerFooter>
                     <DrawerClose>
                        {/* Optional: Add a close button here if needed */}
                     </DrawerClose>
                  </DrawerFooter>
               </DrawerContent>
            </Drawer>
         </div>
      </header>
   )
}

export default Header