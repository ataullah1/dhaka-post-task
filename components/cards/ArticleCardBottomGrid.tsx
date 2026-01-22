import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

interface ArticleCardBottomGridProps {
  title: string;
  imageSrc?: string;
  category?: string;
  date?: string;
  className?: string;
}

const ArticleCardBottomGrid: React.FC<ArticleCardBottomGridProps> = ({
  title,
  imageSrc,
  category,
  date,
  className = '',
}) => {
  return (
    <div className={`group cursor-pointer bg-white border border-gray-100 shadow-sm h-full ${className}`}>
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
        {category && (
          <span
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-white text-[11px] font-bold px-1 sm:px-2 sm:py-1 uppercase tracking-wider ${
              category.toLowerCase() === 'politics'
                ? 'bg-[#ff005a]'
                : category.toLowerCase() === 'business'
                ? 'bg-[#0078FF]'
                : 'bg-[#F9B200]'
            }`}
          >
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
        <h3 className="text-base sm:text-[20px] font-bold leading-tight mb-3 group-hover:text-red-700 transition-colors font-condensed text-gray-900">
          {title}
        </h3>
        <div className="text-[12px] text-gray-400 flex items-center justify-center gap-1.5 mb-1 font-sans">
          <Clock className="w-3.5 h-3.5" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardBottomGrid;
