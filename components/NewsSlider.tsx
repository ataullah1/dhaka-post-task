"use client";

import React, { useState } from 'react';
import ArticleCard from './ArticleCard';

interface Article {
  id: string | number;
  title: string;
  imageSrc: string;
}

interface NewsSliderProps {
  articles: Article[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We want to show 2 items at a time on desktop
  const itemsPerPage = 2;
  
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= articles.length - (itemsPerPage - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? articles.length - itemsPerPage : prev - 1
    );
  };

  return (
    <div className="relative group mb-8 bg-white border border-gray-100 p-1">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="w-1/2 flex-shrink-0 px-2" // 2 items per page = 50% width
            >
               <ArticleCard 
                  variant="hero-sub"
                  title={article.title}
                  imageSrc={article.imageSrc}
                  className="h-full border-0 shadow-none hover:shadow-none bg-transparent"
               />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
       <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 bg-white border border-gray-200 shadow-md w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:text-black hover:bg-gray-50 z-10 disabled:opacity-50"
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 bg-white border border-gray-200 shadow-md w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:text-black hover:bg-gray-50 z-10"
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </div>
  );
};

export default NewsSlider;
