import React from 'react';
import SectionHeader from './SectionHeader';
import ArticleCard from './ArticleCard';
import NewsSlider from './NewsSlider';

const NewsGrid = () => {
  const sliderArticles = [
    { id: 1, title: "The Chinese smartphone upstarts taking on Apple and Samsung", imageSrc: "/images/demo-14-1-75x75.jpg" },
    { id: 2, title: "Presidential Train Now Available For Jakartans Traveling To Bandung", imageSrc: "/images/demo-15-75x75.jpg" },
    { id: 3, title: "A Digital Media Startup Growing Up With Millennial Women", imageSrc: "/images/demo-19-75x75.jpg" }, 
    { id: 4, title: "How to get around in Jakarta without losing your mind", imageSrc: "/images/demo-20-75x75.jpg" },
  ];

  return (
    <div className="bg-[#f4f5f5] py-12">
      <div className="container mx-auto px-4 max-w-[1200px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar - The Latest */}
        <div className="lg:col-span-3 flex flex-col">
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

        {/* Center Content */}
        <div className="lg:col-span-6 border-r border-gray-100 lg:pr-8 lg:pl-4">
           
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
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mt-12 pt-8 border-t border-gray-100">
                <ArticleCard 
                  variant="sidebar-right" 
                  title="Democratic Party politician calls Prabowo 'cardboard general'"
                  author="John Doe"
                  date="August 10, 2018"
                  excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
                  imageSrc="/images/demo-2-350x250.jpg"
                />
                 <ArticleCard 
                  variant="sidebar-right"
                  category="Lifestyle"
                  title="Google tracks location data even when users turn service off"
                  author="John Doe"
                  date="August 14, 2018"
                  excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
                  imageSrc="/images/demo-24-350x250.jpg"
                />
           </div>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-10 pl-2">
             <div className="relative w-full aspect-[300/250] mb-8 flex items-center justify-center">
                <img src="/images/banner-ad-345x345.jpg" alt="Ad" className="max-w-full h-auto object-contain" />
             </div>

             <section>
                 <span className="bg-[#F9B200] text-white text-[10px] font-bold px-1 py-0.5 uppercase mb-3 inline-block">Opinion</span>
                 <div className="relative w-full aspect-[3/2] mb-4 overflow-hidden bg-gray-100 group">
                    <img src="/images/demo-49-350x250.jpg" alt="Opinion Cover" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                         <h3 className="text-white text-xl font-condensed font-bold leading-snug">
                             Democratic Party politician calls Prabowo ‘cardboard general’
                         </h3>
                    </div>
                 </div>
             </section>

             <section>
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
             </section>
        </div>

      </div>
      </div>
    </div>
  );
};

export default NewsGrid;
