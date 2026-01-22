import React from 'react';

interface ArticleCardOpinionProps {
  title: string;
  className?: string;
}

const ArticleCardOpinion: React.FC<ArticleCardOpinionProps> = ({
  title,
  className = '',
}) => {
  return (
    <div className={`mb-3 pb-3 border-b border-dashed border-gray-200 last:border-0 last:pb-0 group cursor-pointer ${className}`}>
      <div className="flex gap-2.5 items-start">
        <span className="text-black text-[12px] mt-[3px]">▶</span>
        <h3 className="text-[15px] font-medium leading-5 text-gray-800 group-hover:text-red-700 transition-colors font-condensed">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ArticleCardOpinion;
