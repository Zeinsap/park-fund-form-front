
import React from 'react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="bg-white py-4 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/8d540128-33f8-48d2-a187-6e15fbff645b.png" 
            alt="Park Fund Logo" 
            className="h-12"
          />
        </div>
        <div>
          <Button 
            variant="outline" 
            className="hidden md:inline-flex border-park-blue text-park-blue hover:bg-park-blue hover:text-white text-base"
            onClick={() => document.querySelector('.contact-form-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir cette opportunité rentable
          </Button>
          <Button className="md:hidden" size="icon" variant="ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
