
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContactForm = () => {
    document.querySelector('.contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <header className="bg-white py-4 border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e770a819-1b9f-42e5-869e-5397562b1b04.png" 
            alt="Two Zero Solution Logo" 
            className="h-10 md:h-12"
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
        
        {/* Mobile navigation with Sheet component */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] bg-white">
              <div className="flex flex-col gap-4 mt-8">
                <Button 
                  className="bg-park-blue text-white hover:bg-blue-600 w-full justify-start px-4"
                  onClick={scrollToContactForm}
                >
                  Découvrir cette opportunité
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
