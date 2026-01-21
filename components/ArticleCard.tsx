import React from 'react';
import Image from 'next/image';

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
      <div className={`flex gap-4 mb-5 group cursor-pointer ${className}`}>
        <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden bg-gray-100">
           {imageSrc && (
             <Image 
               src={imageSrc} 
               alt={title} 
               fill 
               sizes="(max-width: 768px) 100vw, 80px"
               className="object-cover group-hover:scale-110 transition-transform duration-500"
             />
           )}
        </div>
        <div>
          <h3 className="text-[13px] font-bold leading-5 group-hover:text-red-700 transition-colors font-condensed text-gray-900">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar-right') {
     return (
       <div className={`mb-8 group cursor-pointer ${className}`}>
         <div className="relative w-full aspect-[3/2] mb-4 overflow-hidden bg-gray-100">
             {category && (
                 <span className={`absolute top-0 left-0 z-10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider ${
                     category.toLowerCase() === 'lifestyle' ? 'bg-[#ff005a]' : 'bg-[#F9B200]' 
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
         <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-red-700 transition-colors font-condensed">
             {title}
         </h3>
         <div className="text-[11px] text-gray-500 flex items-center gap-1 uppercase font-semibold tracking-wide">
             {author && <span className="text-black">by {author}</span>}
             {date && (
                 <>
                  {author && <span>-</span>}
                  <span>{date}</span>
                 </>
             )}
         </div>
         {excerpt && (
             <p className="mt-3 text-gray-600 text-[13px] leading-relaxed line-clamp-3 font-sans">
                 {excerpt}
             </p>
         )}
       </div>
     )
  }

  if (variant === 'opinion') {
      return (
          <div className={`mb-4 pb-4 border-b border-gray-200 border-dashed last:border-0 last:pb-0 group cursor-pointer ${className}`}>
             <div className="flex gap-3 items-start">
                  <span className="text-gray-300 text-[10px] mt-1.5 transform rotate-0">▶</span>
                  <h3 className="text-[13px] font-bold leading-snug text-gray-800 group-hover:text-red-700 transition-colors font-condensed">
                    {title}
                  </h3>
             </div>
          </div>
      )
  }

  if (variant === 'hero') {
      return (
          <div className={`relative mb-8 group cursor-pointer ${className}`}>
              <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden bg-gray-100">
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
              <div className="mb-2 md:text-left">
                   {category && (
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block">
                           {category}
                       </span>
                   )}
                   <h2 className="text-3xl font-condensed font-bold leading-tight mb-3 group-hover:text-red-700 transition-colors text-gray-900">
                       {title}
                   </h2>
                   <div className="text-[11px] text-gray-500 flex items-center gap-1 mb-4 italic font-serif">
                        <span className="not-italic text-gray-400">by</span>
                        {author && <span className="text-black font-bold uppercase not-italic">{author}</span>}
                        {date && (
                            <>
                             <span className="mx-1 text-gray-300 not-italic">-</span>
                             <span>{date}</span>
                            </>
                        )}
                        {commentCount !== undefined && (
                            <>
                                <span className="mx-1 text-gray-300 not-italic">-</span>
                                <span>{commentCount}</span>
                            </>
                        )}
                   </div>
                   {excerpt && (
                       <p className="text-gray-600 text-[15px] leading-7 font-sans mb-6">
                           {excerpt}
                       </p>
                   )}
                   <div>
                       <button className="border border-gray-300 text-[10px] font-bold px-5 py-2 uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300">
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
