import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import ArticleCard from './ArticleCard';
import NewsSlider from './NewsSlider';
import { Clock } from 'lucide-react';

import { 
  sliderArticles, 
  latestArticles, 
  opinionListArticles, 
  heroArticle, 
  subHeroArticles, 
  rightSidebarArticles 
} from '../data/mockData';

const NewsGrid = () => {

  return (
    <div className="bg-[#f4f5f5] py-7">
      <div className="container mx-auto px-4 max-w-[1260px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        
        {/* Left Sidebar */}
        <div className="lg:col-span-3 flex flex-col gap-7">
            
            <div className="bg-white p-5 border border-gray-100 shadow-sm">
              <SectionHeader title="The Latest" />
              <div className="flex flex-col gap-6">
                 {latestArticles.map((article) => (
                   <ArticleCard 
                     key={article.id}
                     variant="sidebar-left" 
                     title={article.title}
                     imageSrc={article.imageSrc}
                   />
                 ))}
              </div>
            </div>

             <div className="bg-white p-5 border border-gray-100 shadow-sm">
                 <SectionHeader title="Opinion" />
                 <div className="mt-4">
                     {opinionListArticles.map((article) => (
                       <ArticleCard 
                          key={article.id}
                          variant="opinion"
                          title={article.title}
                       />
                     ))}
                 </div>
             </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6">
           
           <NewsSlider articles={sliderArticles} />

           <ArticleCard 
              variant="hero"
              category={heroArticle.category}
              title={heroArticle.title}
              author={heroArticle.author}
              date={heroArticle.date}
              commentCount={heroArticle.commentCount}
              excerpt={heroArticle.excerpt}
              imageSrc={heroArticle.imageSrc}
           />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7 pt-7">
                {subHeroArticles.map((article) => (
                  <ArticleCard 
                    key={article.id}
                    variant="sidebar-right" 
                    category={article.category}
                    title={article.title}
                    date={article.date}
                    imageSrc={article.imageSrc}
                  />
                ))}
           </div>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-7">
             <div className="mb-7 flex items-center justify-center bg-gray-50 border border-gray-100">
                <Image 
                  src="/images/banner-ad-345x345.jpg" 
                  alt="Ad" 
                  width={345}
                  height={345}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
             </div>

             {rightSidebarArticles.map((article) => (
               <div key={article.id} className="bg-white border border-gray-100 shadow-sm group cursor-pointer">
                 <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                    <span className={`absolute top-4 left-0 z-10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider ${
                      article.category === 'Opinion' ? 'bg-[#F9B200]' : 'bg-[#ff005a]'
                    }`}>
                        {article.category}
                    </span>
                    {article.imageSrc && (
                      <Image 
                        src={article.imageSrc} 
                        alt={`${article.category} Cover`} 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    )}
                 </div>
                 <div className="p-6">
                    <h2 className="text-[20px] font-condensed font-bold leading-tight mb-3 group-hover:text-red-700 transition-colors text-gray-900">
                        {article.title}
                    </h2>
                    <div className="text-[11px] text-gray-400 flex items-center gap-2 mb-4 font-sans font-semibold">
                        <span className="text-black uppercase">by {article.author}</span>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{article.date}</span>
                        </div>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-sans line-clamp-3">
                        {article.excerpt}
                    </p>
                </div>
             </div>
             ))}
        </div>

      </div>
      </div>
    </div>
  );
};

export default NewsGrid;
