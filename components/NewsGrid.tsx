import React from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import ArticleCardSidebarLeft from './cards/ArticleCardSidebarLeft';
import ArticleCardHero from './cards/ArticleCardHero';
import ArticleCardBottomGrid from './cards/ArticleCardBottomGrid';
import ArticleCardSidebarRight from './cards/ArticleCardSidebarRight';
import ArticleCardOpinion from './cards/ArticleCardOpinion';
import NewsSlider from './NewsSlider';

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
                   <ArticleCardSidebarLeft
                     key={article.id}
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
                       <ArticleCardOpinion
                          key={article.id}
                          title={article.title}
                       />
                     ))}
                 </div>
             </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6">
           
           <NewsSlider articles={sliderArticles} />

           <ArticleCardHero
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
                  <ArticleCardBottomGrid
                    key={article.id}
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
               <ArticleCardSidebarRight
                 key={article.id}
                 category={article.category}
                 title={article.title}
                 author={article.author}
                 date={article.date}
                 excerpt={article.excerpt}
                 imageSrc={article.imageSrc}
               />
             ))}
        </div>

      </div>
      </div>
    </div>
  );
};

export default NewsGrid;
