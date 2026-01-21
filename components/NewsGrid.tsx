import React from 'react';
import SectionHeader from './SectionHeader';
import ArticleCard from './ArticleCard';

const NewsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar */}
        <div className="lg:col-span-3 flex flex-col gap-12">
          
          <section>
            <SectionHeader title="The Latest" />
            <div className="space-y-4">
               <ArticleCard 
                 variant="sidebar-left" 
                 title="Unconventional Workouts That Torch Fat And Sculpt Muscle" 
                 imageSrc="/placeholder.jpg"
               />
               <ArticleCard 
                 variant="sidebar-left" 
                 title="Millions of Indigenous People May Lose Voting Rights: Alliance" 
                 imageSrc="/placeholder.jpg"
               />
               <ArticleCard 
                 variant="sidebar-left" 
                 title="Crismonita Dwi Putri, RI's Track Cycling Athlete for Asian Games" 
                 imageSrc="/placeholder.jpg"
               />
               <ArticleCard 
                 variant="sidebar-left" 
                 title="President Joko ''Jokowi'' Widodo Refuses to Sign MD3 Law" 
                 imageSrc="/placeholder.jpg"
               />
               <ArticleCard 
                 variant="sidebar-left" 
                 title="Garuda operates larger planes for Jakarta-Palembang route" 
                 imageSrc="/placeholder.jpg"
               />
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

        {/* Center Content */}
        <div className="lg:col-span-6">
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
               <ArticleCard 
                  variant="hero-sub"
                  title="The Chinese smartphone upstarts taking on Apple and Samsung"
                  imageSrc="/placeholder.jpg"
               />
               <ArticleCard 
                  variant="hero-sub"
                  title="Presidential Train Now Available For Jakartans Traveling To Bandung"
                  imageSrc="/placeholder.jpg"
               />
           </div>

           <ArticleCard 
              variant="hero"
              category="Politics"
              title="‘Election was rigged’ says opposition, police confirm three dead"
              author="John Doe"
              date="February 17, 2020"
              commentCount={0}
              excerpt="When we get out of the glass bottle of our ego and when we escape like the squirrels in the cage of our personality and get into the forest again, we shall shiver with cold and fright."
              imageSrc="/placeholder.jpg"
           />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="relative aspect-video bg-gray-100 group overflow-hidden">
                     <img src="/placeholder.jpg" alt="Sub 1" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                         <h3 className="text-white font-bold text-sm">Example News Story Title Here</h3>
                     </div>
                </div>
                <div className="relative aspect-video bg-gray-100 group overflow-hidden">
                     <img src="/placeholder.jpg" alt="Sub 2" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                         <h3 className="text-white font-bold text-sm">Another News Story Title</h3>
                     </div>
                </div>
           </div>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-8">
             <ArticleCard 
                variant="sidebar-right"
                category="Opinion"
                title="Democratic Party politician calls Prabowo 'cardboard general'"
                author="John Doe"
                date="August 10, 2018"
                excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
                imageSrc="/placeholder.jpg"
             />

             <ArticleCard 
                variant="sidebar-right"
                category="Lifestyle"
                title="Google tracks location data even when users turn service off"
                author="John Doe"
                date="August 14, 2018"
                excerpt="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
                imageSrc="/placeholder.jpg"
             />
             
             <div className="bg-gray-50 border border-gray-200 p-8 text-center">
                 <span className="text-gray-400 font-bold tracking-widest text-xs uppercase">Advertisement</span>
             </div>
        </div>

      </div>
    </div>
  );
};

export default NewsGrid;
