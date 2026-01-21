"use client";

import React,   { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Search, ChevronDown, Facebook, Youtube, Rss } from 'lucide-react';
import { navItems, siteConfig, socialLinks } from '../data/mockData';

const Header = () => {
  const pathname = usePathname();
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <>
      <header className="bg-white z-[40] font-condensed">
        {/* BRANDING AREA: Logo centered */}
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex justify-center">
            <Link href="/">
               <div className="relative w-48 h-8">
                  <Image 
                    src={siteConfig.logo} 
                    alt={siteConfig.name} 
                    fill
                    className="object-contain"
                    priority
                  />
               </div>
            </Link>
          </div>
        </div>

        {/* NAVIGATION BAR: Main menu and search */}
        <div className="border-t border-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-12">
              
              {/* ACTION: Mobile Menu Toggle */}
              <button 
                className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-6 h-6 text-black" />
              </button>

              {/* NAVIGATION: Desktop Menu */}
              <nav className="hidden md:block h-full">
                <ul className="flex justify-center gap-6 text-black h-full items-center font-bold uppercase text-base tracking-wide">
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
                          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isHomeHovered ? 'rotate-180' : ''}`} />
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

              {/* Right: Search Icon */}
              <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-black" />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[101] transform transition-transform duration-300 ease-out shadow-2xl overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full font-condensed">
           {/* Search Bar */}
           <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-gray-400"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
           </div>

           {/* Mobile Navigation */}
           <nav className="flex-1">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                   <li key={item.name}>
                      <Link 
                        href={item.path} 
                        className="text-lg font-bold text-gray-800 hover:text-accent transition-colors block"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {item.name}
                      </Link>
                   </li>
                ))}
              </ul>
           </nav>

           {/* Social Icons */}
           <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex gap-4">
                 <Link href={socialLinks.facebook} className="text-gray-600 hover:text-[#3b5998] transition-colors">
                    <Facebook className="w-5 h-5" />
                 </Link>
                 <Link href={socialLinks.twitter} className="text-gray-600 hover:text-black transition-colors">
                    {/* X Logo (Twitter) */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                 </Link>
                 <Link href={socialLinks.youtube} className="text-gray-600 hover:text-[#FF0000] transition-colors">
                    <Youtube className="w-5 h-5" />
                 </Link>
                 <Link href={socialLinks.rss} className="text-gray-600 hover:text-[#ee802f] transition-colors">
                    <Rss className="w-5 h-5" />
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Header;
