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
      <div className={`flex gap-4 mb-6 group cursor-pointer ${className}`}>
        <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden bg-gray-100">
           {imageSrc && (
             <Image 
               src={imageSrc} 
               alt={title} 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-300"
             />
           )}
        </div>
        <div>
          <h3 className="text-sm font-bold leading-snug group-hover:text-red-700 transition-colors">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar-right') {
     return (
       <div className={`mb-8 group cursor-pointer ${className}`}>
         <div className="relative w-full aspect-[3/2] mb-3 overflow-hidden bg-gray-100">
             {category && (
                 <span className="absolute top-4 left-4 z-10 bg-accent text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                     {category}
                 </span>
             )}
            {imageSrc && (
             <Image 
               src={imageSrc} 
               alt={title} 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-300" 
             />
           )}
         </div>
         <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-red-700 transition-colors">
             {title}
         </h3>
         <div className="text-xs text-gray-500 flex items-center gap-2 uppercase font-semibold">
             {author && <span>by {author}</span>}
             {date && (
                 <>
                  {author && <span>&bull;</span>}
                  <span>{date}</span>
                 </>
             )}
         </div>
         {excerpt && (
             <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                 {excerpt}
             </p>
         )}
       </div>
     )
  }

  if (variant === 'opinion') {
      return (
          <div className={`mb-4 pb-4 border-b border-gray-100 border-dashed last:border-0 group cursor-pointer ${className}`}>
             <div className="flex gap-2 items-start">
                  <span className="text-gray-400 text-xs mt-1">▶</span>
                  <h3 className="text-sm font-medium leading-snug text-gray-800 group-hover:text-red-700 transition-colors line-clamp-2">
                    {title}
                  </h3>
             </div>
          </div>
      )
  }

  if (variant === 'hero') {
      return (
          <div className={`relative mb-8 group cursor-pointer ${className}`}>
              <div className="relative w-full aspect-[3/2] mb-4 overflow-hidden bg-gray-100">
                 {imageSrc && (
                    <Image 
                        src={imageSrc} 
                        alt={title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                 )}
              </div>
              <div className="mb-2">
                   {category && (
                       <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block placeholder-opacity-50">
                           {category}
                       </span>
                   )}
                   <h2 className="text-3xl font-serif font-bold leading-tight mb-3 group-hover:text-red-700 transition-colors">
                       {title}
                   </h2>
                   <div className="text-xs text-gray-500 flex items-center gap-2 uppercase font-semibold mb-4">
                        {author && <span className="text-black font-black">by {author}</span>}
                        {date && (
                            <>
                             <span className="text-gray-400">/</span>
                             <span>{date}</span>
                            </>
                        )}
                        {commentCount !== undefined && (
                            <>
                                <span className="text-gray-400">/</span>
                                <span>💬 {commentCount}</span>
                            </>
                        )}
                   </div>
                   {excerpt && (
                       <p className="text-gray-600 text-base leading-relaxed">
                           {excerpt}
                       </p>
                   )}
                   <div className="mt-4">
                       <button className="border border-gray-300 text-xs font-bold px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                           Read More
                       </button>
                   </div>
              </div>
          </div>
      )
  }

  if (variant === 'hero-sub') {
    return (
        <div className={`flex gap-4 items-center bg-white p-4 border border-gray-100 h-full group cursor-pointer hover:shadow-md transition-shadow ${className}`}>
             <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-gray-100">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                )}
             </div>
             <div>
                 <h3 className="text-sm font-bold leading-snug group-hover:text-red-700 transition-colors line-clamp-3">
                     {title}
                 </h3>
                 <span className="text-gray-300 transform rotate-90 inline-block ml-auto text-lg">&rsaquo;</span>
             </div>
        </div>
    )
  }

  return null;
};

export default ArticleCard;
