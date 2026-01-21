import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

type CardVariant = 'sidebar-left' | 'sidebar-right' | 'hero' | 'hero-sub' | 'opinion';

interface ArticleCardProps {
  variant: CardVariant;
  title: string;
  imageSrc?: string;
  category?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  commentCount?: number;
  className?: string; 
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  variant,
  title,
  imageSrc = '/placeholder.jpg',
  category,
  author,
  date,
  excerpt,
  commentCount,
  className = '',
}) => {
  
  if (variant === 'sidebar-left') {
    return (
      <div className={`flex gap-4 group cursor-pointer items-start ${className}`}>
        <div className="relative w-[100px] h-[70px] flex-shrink-0 overflow-hidden bg-gray-100 border border-gray-100">
           {imageSrc && (
             <Image 
               src={imageSrc} 
               alt={title} 
               fill 
               sizes="100px"
               className="object-cover group-hover:scale-110 transition-transform duration-500"
             />
           )}
        </div>
        <div>
          <h3 className="text-[16px] font-bold leading-[1.3] group-hover:text-red-700 transition-colors font-condensed text-gray-900 line-clamp-3">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar-right') {
     return (
       <div className={`group cursor-pointer bg-white border border-gray-100 shadow-sm h-full ${className}`}>
         <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
             {category && (
                 <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider ${
                     category.toLowerCase() === 'politics' ? 'bg-[#ff005a]' : 
                     category.toLowerCase() === 'business' ? 'bg-[#0078FF]' : 'bg-[#F9B200]'
                 }`}>
                     {category}
                 </span>
             )}
            {imageSrc && (
             <Image 
               src={imageSrc} 
               alt={title} 
               fill 
               sizes="(max-width: 768px) 100vw, 33vw"
               className="object-cover group-hover:scale-110 transition-transform duration-500" 
             />
           )}
         </div>
         <div className="p-6 text-center">
             <h3 className="text-[20px] font-bold leading-tight mb-3 group-hover:text-red-700 transition-colors font-condensed text-gray-900">
                 {title}
             </h3>
             <div className="text-[12px] text-gray-400 flex items-center justify-center gap-1.5 mb-1 font-sans">
                 <Clock className="w-3.5 h-3.5" />
                 <span>{date}</span>
             </div>
         </div>
       </div>
     )
  }

  if (variant === 'opinion') {
      return (
          <div className={`mb-3 pb-3 border-b border-dashed border-gray-200 last:border-0 last:pb-0 group cursor-pointer ${className}`}>
             <div className="flex gap-2.5 items-start">
                  <span className="text-black text-[12px] mt-[3px]">▶</span>
                  <h3 className="text-[15px] font-bold leading-5 text-gray-800 group-hover:text-red-700 transition-colors font-condensed">
                    {title}
                  </h3>
             </div>
          </div>
      )
  }

  if (variant === 'hero') {
      return (
          <div className={`group cursor-pointer bg-white border border-gray-200 shadow-sm ${className}`}>
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                 {imageSrc && (
                    <Image 
                        src={imageSrc} 
                        alt={title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                 )}
              </div>
              <div className="relative -mt-20 mx-3 md:mx-5 bg-white p-7 z-10 text-center md:text-left transition-transform duration-300 hover:-translate-y-1">
                   {category && (
                       <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2 block">
                           {category}
                       </span>
                   )}
                   <h2 className="text-3xl font-condensed font-bold leading-[1.1] mb-3 group-hover:text-red-700 transition-colors text-gray-900">
                       {title}
                   </h2>
                   <div className="text-[13px] text-gray-500 flex items-center gap-5 mb-3 font-sans italic">
                        <div>
                           <span className="mr-1 text-gray-400">by</span>
                           {author && <span className="text-black font-bold uppercase not-italic">{author}</span>}
                           <span className="ml-1 text-gray-400">and 1 others</span>
                        </div>
                        
                        {date && (
                             <div className="flex items-center gap-2 text-gray-400 not-italic">
                                 <Clock className="w-3.5 h-3.5" />
                                 <span>{date}</span>
                             </div>
                        )}
                        {commentCount !== undefined && (
                             <div className="flex items-center gap-2 text-gray-400 not-italic">
                                 <span className="text-[10px]">💬</span> 
                                 <span>{commentCount}</span>
                             </div>
                        )}
                   </div>
                   {excerpt && (
                       <p className="text-gray-500 text-[17px] leading-8 font-serif mb-6 line-clamp-2">
                           {excerpt}
                       </p>
                   )}
                   <div>
                       <button className="border border-gray-300 text-[11px] font-bold px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                           Read More
                       </button>
                   </div>
              </div>
          </div>
      )
  }

  if (variant === 'hero-sub') {
    return (
        <div className={`flex gap-3 items-start bg-transparent h-full group cursor-pointer ${className}`}>
             <div className="relative w-[70px] h-[70px] flex-shrink-0 overflow-hidden bg-gray-100">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        sizes="70px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                )}
             </div>
             <div className="flex-1 min-w-0">
                 <h3 className="text-[11px] font-bold leading-[1.35] group-hover:text-red-700 transition-colors line-clamp-5 font-condensed text-gray-900 mt-[-2px]">
                     {title}
                 </h3>
             </div>
        </div>
    )
  }

  return null;
};

export default ArticleCard;
