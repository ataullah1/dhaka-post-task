import React from 'react';
import SectionHeader from './SectionHeader';
import ArticleCard from './ArticleCard';
import NewsSlider from './NewsSlider';
import { Clock } from 'lucide-react';

const NewsGrid = () => {
  const sliderArticles = [
    { id: 1, title: "The Chinese smartphone upstarts taking on Apple and Samsung", imageSrc: "/images/demo-14-1-75x75.jpg" },
    { id: 2, title: "Presidential Train Now Available For Jakartans Traveling To Bandung", imageSrc: "/images/demo-15-75x75.jpg" },
    { id: 3, title: "A Digital Media Startup Growing Up With Millennial Women", imageSrc: "/images/demo-19-75x75.jpg" }, 
    { id: 4, title: "How to get around in Jakarta without losing your mind", imageSrc: "/images/demo-20-75x75.jpg" },
  ];

  return (
    <div className="bg-[#f4f5f5] py-12">
      <div className="container mx-auto px-4 max-w-[1260px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        
        {/* Left Sidebar */}
        <div className="lg:col-span-3 flex flex-col gap-7">
            {/* The Latest */}
            <div className="bg-white p-5 border border-gray-100 shadow-sm">
              <SectionHeader title="The Latest" />
              <div className="space-y-1">
                 <ArticleCard 
                   variant="sidebar-left" 
                   title="Unconventional Workouts That Torch Fat And Sculpt Muscle" 
                   imageSrc="/images/demo-25-120x86.jpg"
                 />
                 <ArticleCard 
                   variant="sidebar-left" 
                   title="Millions of Indigenous People May Lose Voting Rights: Alliance" 
                   imageSrc="/images/demo-30-120x86.jpg"
                 />
                 <ArticleCard 
                   variant="sidebar-left" 
                   title="Crismonita Dwi Putri, RI's Track Cycling Athlete for Asian Games" 
                   imageSrc="/images/demo-32-120x86.jpg"
                 />
                 <ArticleCard 
                   variant="sidebar-left" 
                   title="President Joko ''Jokowi'' Widodo Refuses to Sign MD3 Law" 
                   imageSrc="/images/demo-33-120x86.jpg"
                 />
                 <ArticleCard 
                   variant="sidebar-left" 
                   title="Garuda operates larger planes for Jakarta-Palembang route" 
                   imageSrc="/images/demo-48-120x86.jpg"
                 />
              </div>
            </div>

            {/* Opinion List (Moved here) */}
             <div className="bg-white p-5 border border-gray-100 shadow-sm">
                 <SectionHeader title="Opinion" />
                 <div className="mt-4">
                     <ArticleCard 
                        variant="opinion"
                        title="Tour showcases shared art history of Indonesia and Singapore"
                     />
                     <ArticleCard 
                        variant="opinion"
                        title="Finland Has An Education System The Other Country Should Learn From"
                     />
                     <ArticleCard 
                        variant="opinion"
                        title="Women in Politics: Urgency of Quota System For Women In Regional Elections"
                     />
                     <ArticleCard 
                        variant="opinion"
                        title="China's Peng banned and fined for Wimbledon corruption attempt"
                     />
                     <ArticleCard 
                        variant="opinion"
                        title="Democratic Party politician calls Prabowo 'cardboard general'"
                     />
                 </div>
             </div>
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6">
           
           <NewsSlider articles={sliderArticles} />

           <ArticleCard 
              variant="hero"
              category="Politics"
              title="‘Election was rigged’ says opposition, police confirm three dead"
              author="John Doe"
              date="February 17, 2020"
              commentCount={0}
              excerpt="When we get out of the glass bottle of our ego and when we escape like the squirrels in the cage of our personality and get into the forest again, we shall shiver with cold and fright."
              imageSrc="/images/demo-34-750x375.jpg"
           />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7 mt-12 pt-7 border-t border-gray-200">
                <ArticleCard 
                  variant="sidebar-right" 
                  category="Business"
                  title="Grab tackles Jakarta's odd-even license plate policy with special algorithm"
                  date="February 17, 2020"
                  imageSrc="/images/demo-2-350x250.jpg"
                />
                 <ArticleCard 
                  variant="sidebar-right"
                  category="Politics"
                  title="Jokowi supporters try to prevent anti-Jokowi activist from entering Batam"
                  date="August 10, 2018"
                  imageSrc="/images/demo-12-350x250.jpg"
                />
           </div>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-10">
             <div className="relative w-full aspect-[300/250] mb-7 flex items-center justify-center">
                <img src="/images/banner-ad-345x345.jpg" alt="Ad" className="max-w-full h-auto object-contain" />
             </div>

             <section>
                 <span className="bg-[#F9B200] text-white text-[10px] font-bold px-1 py-0.5 uppercase mb-3 inline-block">Opinion</span>
                 <div className="relative w-full aspect-[3/2] mb-4 overflow-hidden bg-gray-100 group">
                    <img src="/images/demo-24-350x250.jpg" alt="Opinion Cover" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="mb-2 md:text-left">
                    <h2 className="text-3xl font-condensed font-bold leading-tight mb-3 group-hover:text-red-700 transition-colors text-gray-900">
                        Tour showcases shared art history of Indonesia and Singapore
                    </h2>
                    <div className="text-[11px] text-gray-500 flex items-center gap-1 mb-4 italic font-sans">
                        <span className="not-italic text-gray-400">by</span>
                        <span className="text-black font-bold uppercase not-italic">John Doe</span>
                        <span className="ml-1">and 1 others</span>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-4 mb-5 font-sans italic">
                        <div>
                           <span className="not-italic mr-1">by</span>
                           <span className="text-black font-bold uppercase not-italic">John Doe</span>
                           <span className="ml-1">and 1 others</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="not-italic">February 17, 2020</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px]">💬</span> 
                            <span className="not-italic">12</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-[15px] leading-7 font-sans mb-6 line-clamp-2">
                        When we get out of the glass bottle of our ego and when we escape like the squirrels in the cage of our personality and get into the forest again, we shall shiver with cold and fright.
                    </p>
                    <button className="border border-gray-300 text-[10px] font-bold px-5 py-2 uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                        Read More
                    </button>
                </div>
             </section>
        </div>

      </div>
      </div>
    </div>
  );
};

export default NewsGrid;
