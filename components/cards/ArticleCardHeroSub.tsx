import React from 'react';
import Image from 'next/image';

interface ArticleCardHeroSubProps {
  title: string;
  imageSrc?: string;
  className?: string;
}

const ArticleCardHeroSub: React.FC<ArticleCardHeroSubProps> = ({
  title,
  imageSrc,
  className = '',
}) => {
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
  );
};

export default ArticleCardHeroSub;
