
import React from 'react';
import { Button } from '@/components/ui/button';
import { CarIcon, ZapIcon } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const HeroSection = () => {
  return (
    <section 
      className="py-16 md:py-24 text-white contact-form-section relative"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/cf28557f-a36a-49d0-913d-4ea2e4ccc7c6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto",
        minHeight: "90vh"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Investissez dans <span className="text-yellow-400">l'avenir</span> de la mobilité électrique <CarIcon className="inline-block h-8 w-8 mx-2" /> <ZapIcon className="inline-block h-8 w-8 text-yellow-400" />
            </h1>
            <p className="text-xl mb-6">Profitez de la croissance rapide des infrastructures de recharge en France.</p>
            
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-3">Rentabilité et impact durable</h3>
              <p className="text-xl">
                Associez votre investissement à un avenir plus vert, avec des rendements stables pouvant atteindre 7 %.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#benefits" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-400 text-park-dark hover:bg-yellow-300 h-12 px-6 py-3">
                Découvrir cette opportunité rentable →
              </a>
            </div>

            <div className="mt-10">
              <p className="text-base text-gray-200 mb-3">En partenariat avec</p>
              <div className="flex items-center gap-8 p-4 rounded-lg">
                <img 
                  src="/lovable-uploads/330f78f8-3ae8-4f01-a04c-dd2e4296392c.png" 
                  alt="Partenaires: Yespark, Vinci Immobilier, Indigo" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
