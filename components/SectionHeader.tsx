import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-5 relative">
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-1 inline-block font-condensed tracking-wide z-10 relative">
        {title}
      </h2>
      <div className="absolute bottom-0 left-0 w-full border-b border-gray-200"></div>
    </div>
  );
};

export default SectionHeader;
