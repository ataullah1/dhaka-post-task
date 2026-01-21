import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-6">
      <h2 className="text-[15px] font-bold border-b-[3px] border-black pb-2 inline-block font-condensed uppercase tracking-wide">
        {title}
      </h2>
      <div className="border-b border-gray-200 -mt-[2px] w-full"></div>
    </div>
  );
};

export default SectionHeader;
