import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 mt-12 border-t border-gray-100 text-center text-gray-500 text-sm">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} The Downtown. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
