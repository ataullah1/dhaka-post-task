"use client";

import React, { useState, useEffect, useCallback } from 'react';
import ArticleCardHeroSub from './cards/ArticleCardHeroSub';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Article {
  id: string | number;
  title: string;
  imageSrc?: string;
}

interface NewsSliderProps {
  articles: Article[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const autoPlayInterval = 5000;
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => 
      prev + 1 > articles.length - itemsPerPage ? 0 : prev + 1
    );
  }, [articles.length, itemsPerPage]);

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, articles.length - itemsPerPage) : prev - 1
    );
  };

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <div 
      className="relative mb-7 bg-white border border-gray-100 p-4 shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="flex-shrink-0 w-8 h-20 border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-black transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Content Window */}
        <div className="flex-1 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (16 / itemsPerPage)}px))` 
            }}
          >
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsPerPage}% - ${16 * (itemsPerPage - 1) / itemsPerPage}px)` }}
              >
                 <Link href="#" className="block h-full">
                   <ArticleCardHeroSub
                      title={article.title}
                      imageSrc={article.imageSrc}
                      className="h-full border-0 shadow-none hover:shadow-none bg-transparent"
                   />
                 </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="flex-shrink-0 w-8 h-20 border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-black transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default NewsSlider;
