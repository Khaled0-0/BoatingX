'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const links = [
   { name: 'HOME', path: '/' },
   { name: 'BRANDS & MODELS', path: '/brand' },
   { name: 'ABOUT', path: '/about' },
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

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <header
         className={`fixed top-0 z-50 w-full flex items-center justify-between px-8 py-4 transition-all duration-500 border-b ${isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b-white'
            : 'bg-transparent border-b-gray-700'
            }`}
      >
         <div>
            <Link href='/'>
               <Image
                  className='mt-1 '
                  src={isScrolled ? '/assets/black-logo.svg' : '/assets/white-logo.svg'}
                  alt='logo'
                  width={160}
                  height={50}
                  priority
               />
            </Link>
         </div>

         <nav className='flex items-center gap-8 text-sm font-medium tracking-wider'>
            {links.map(link => (
               <Link
                  key={link.name}
                  href={link.path}
                  className={`transition-all duration-300 hover:opacity-80 ${pathname === link.path
                     ? isScrolled
                        ? 'text-black border-b-2 border-black'
                        : 'text-white border-b-2 border-white'
                     : isScrolled
                        ? 'text-gray-700 hover:text-black'
                        : 'text-white hover:text-gray-200'
                     }`}
               >
                  {link.name}
               </Link>
            ))}
         </nav>

         <div>
            <Link href='/contact-us'>
               <button
                  className={`px-6 py-2 border cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide ${isScrolled
                     ? 'border-black text-black hover:bg-black hover:text-white'
                     : 'border-white text-white hover:bg-white hover:text-black'
                     }`}
               >
                  Contact Us
               </button>
            </Link>
         </div>
      </header>
   )
}

export default Header