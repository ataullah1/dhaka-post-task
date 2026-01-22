import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

interface ArticleCardSidebarRightProps {
  title: string;
  imageSrc?: string;
  category?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  className?: string;
}

const ArticleCardSidebarRight: React.FC<ArticleCardSidebarRightProps> = ({
  title,
  imageSrc,
  category,
  author,
  date,
  excerpt,
  className = '',
}) => {
  return (
    <div className={`bg-white border border-gray-100 shadow-sm group cursor-pointer ${className}`}>
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
        {category && (
          <span
            className={`absolute top-5 left-4 z-10 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider ${
              category === 'Opinion' ? 'bg-[#F9B200]' : 'bg-[#ff005a]'
            }`}
          >
            {category}
          </span>
        )}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${category || 'Article'} Cover`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 350px"
          />
        )}
      </div>
      <div className="p-5">
        <h2 className="text-[20px] font-condensed font-bold leading-tight mb-3 group-hover:text-red-700 transition-colors text-gray-900">
          {title}
        </h2>
        <div className="text-[11px] text-gray-400 flex items-center gap-2 mb-4 font-sans">
          {author && <span><span>by</span><span className="text-black uppercase font-semibold"> {author}</span></span>}
          {date && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{date}</span>
            </div>
          )}
        </div>
        {excerpt && (
          <p className="text-gray-500 text-[13px] leading-relaxed font-sans line-clamp-3">
            {excerpt}
          </p>
        )}
      </div>
    </div>
  );
};

export default ArticleCardSidebarRight;
