"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  // Active path check
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Politics', path: '/politics' },
    { name: 'Business', path: '/business' },
    { name: 'National', path: '/national' },
    { name: 'Culture', path: '/culture' },
    { name: 'Opinion', path: '/opinion' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'Sports', path: '/sports' },
  ];

  return (
    <header className="mb-8 sticky top-0 bg-white z-[100] font-condensed">
      {/* Top Row: Logo */}
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex justify-center">
          <Link href="/">
             <div className="relative w-48 h-8">
                <Image 
                  src="/logo.png" 
                  alt="The Downtown" 
                  fill
                  className="object-contain"
                  priority
                />
             </div>
          </Link>
        </div>
      </div>

      {/* Bottom Row: Navigation */}
      <div className="border-t border-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            
            {/* Left: Hamburger Menu */}
            <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Center: Navigation Links */}
            <nav className="hidden md:block h-full">
              <ul className="flex justify-center gap-6 text-black h-full items-center font-bold uppercase text-sm tracking-wide">
                {navItems.map((item) => (
                  <li 
                    key={item.name} 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => item.name === 'Home' && setIsHomeHovered(true)}
                    onMouseLeave={() => item.name === 'Home' && setIsHomeHovered(false)}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center gap-1 hover:text-gray-600 transition-colors ${
                        isActive(item.path) ? 'text-black' : ''
                      }`}
                    >
                      {item.name}
                      {item.name === 'Home' && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2} 
                          stroke="currentColor" 
                          className={`w-3 h-3 transition-transform duration-200 ${isHomeHovered ? 'rotate-180' : ''}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Search Icon */}
            <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
