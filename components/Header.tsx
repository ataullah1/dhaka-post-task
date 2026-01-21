"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
    <header className="border-b border-gray-200 py-4 mb-8 sticky top-0 bg-white/95 backdrop-blur-sm z-[100]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-3xl font-bold uppercase tracking-wider mb-4">
          <Link href="/">The Downtown</Link>
        </h1>
        <nav className="text-sm font-bold uppercase hidden md:block relative">
          <ul className="flex justify-center gap-6 text-gray-800 font-sans">
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className="relative group h-full"
                onMouseEnter={() => item.name === 'Home' && setIsHomeHovered(true)}
                onMouseLeave={() => item.name === 'Home' && setIsHomeHovered(false)}
              >
                <Link
                  href={item.path}
                  className={`transition-all duration-200 flex items-center gap-1 pb-1 border-b-2 ${
                    isActive(item.path) 
                      ? 'text-black border-black' 
                      : 'text-gray-500 border-transparent hover:text-black hover:border-black/30'
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

                {item.name === 'Home' && (
                  <div
                    className={`absolute top-full left-0 min-w-[200px] bg-white border border-gray-100 shadow-xl py-3 text-left transition-all duration-200 z-50 transform origin-top ${
                       isHomeHovered ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                        <Link href="/" className="block px-6 py-2 hover:bg-gray-50 text-xs font-bold text-gray-600 hover:text-accent transition-colors">
                        MAIN HOME
                        </Link>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-50 text-xs font-bold text-gray-600 hover:text-accent transition-colors">
                        CITY UPDATES
                        </Link>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-50 text-xs font-bold text-gray-600 hover:text-accent transition-colors">
                        GOVERNMENT NEWS
                        </Link>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-50 text-xs font-bold text-gray-600 hover:text-accent transition-colors">
                        TRAFFIC & TRANSPORT
                        </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
