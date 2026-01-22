import React from 'react';
import Image from 'next/image';

interface ArticleCardSidebarLeftProps {
  title: string;
  imageSrc?: string;
  className?: string;
}

const ArticleCardSidebarLeft: React.FC<ArticleCardSidebarLeftProps> = ({
  title,
  imageSrc,
  className = '',
}) => {
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
};

export default ArticleCardSidebarLeft;
