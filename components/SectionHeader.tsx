import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold border-b-2 border-black pb-2 inline-block">
        {title}
      </h2>
      <div className="border-b border-gray-200 -mt-[1px] w-full"></div>
    </div>
  );
};

export default SectionHeader;
