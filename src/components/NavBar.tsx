
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const isMobile = useIsMobile();

  const scrollToContactForm = () => {
    document.querySelector('.contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white py-4 border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e770a819-1b9f-42e5-869e-5397562b1b04.png" 
            alt="Two Zero Solution Logo" 
            className="h-14 md:h-16" // Increased height from h-10 md:h-12 to h-14 md:h-16
          />
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className="border-park-blue text-park-blue hover:bg-park-blue hover:text-white text-base px-4"
            onClick={scrollToContactForm}
          >
            Découvrir cette opportunité
          </Button>
        </div>
        
        {/* Mobile navigation - changed from burger menu to button */}
        <div className="md:hidden">
          <Button 
            variant="outline"
            size="sm"
            className="border-park-blue text-park-blue hover:bg-park-blue hover:text-white text-xs px-3 py-1"
            onClick={scrollToContactForm}
          >
            Découvrir
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
