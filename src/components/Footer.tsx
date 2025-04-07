
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-park-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-lg text-gray-400">
          <p>&copy; {currentYear} Park Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
