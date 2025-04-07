
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-park-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/8d540128-33f8-48d2-a187-6e15fbff645b.png" 
              alt="Park Fund Logo" 
              className="h-10 mb-4"
            />
            <p className="text-gray-300 max-w-xs">
              Park Fund specializes in parking asset investments, offering stable returns and growth opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Investment Benefits</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>123 Investment Ave</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Email: info@parkfund.com</p>
              <p>Phone: (888) 555-PARK</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Park Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
