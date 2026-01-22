import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

interface ArticleCardHeroProps {
  title: string;
  imageSrc?: string;
  category?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  commentCount?: number;
  className?: string;
}

const ArticleCardHero: React.FC<ArticleCardHeroProps> = ({
  title,
  imageSrc,
  category,
  author,
  date,
  excerpt,
  commentCount,
  className = '',
}) => {
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
      <div className="relative -mt-16 mx-3 md:mx-5 bg-white px-7 pt-5 pb-9 z-10 text-center md:text-left transition-transform duration-300 hover:-translate-y-1">
        {category && (
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-2 block">
            {category}
          </span>
        )}
        <h2 className="text-[28px] font-condensed font-bold leading-[1.3] mb-3 group-hover:text-red-700 transition-colors text-gray-900">
          {title}
        </h2>
        <div className="text-[12px] text-gray-500 flex items-center gap-5 mb-3 font-sans italic">
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
          <p className="text-gray-500 text-[14px] leading-6 font-serif mb-4 line-clamp-2">
            {excerpt}
          </p>
        )}
        <div>
          <button className="border border-gray-300 text-[11px] text-gray-500 px-4 py-1.5 uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardHero;
