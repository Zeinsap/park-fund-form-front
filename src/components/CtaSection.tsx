
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-park-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Prêt à investir dans un avenir durable?</h2>
        <p className="text-2xl mb-10 max-w-2xl mx-auto">
          Découvrez comment les parkings électriques peuvent devenir un levier financier.
        </p>
        <Button 
          variant="default" 
          className="bg-white text-park-blue hover:bg-gray-100 h-12 px-10 py-3 text-lg"
          onClick={() => document.querySelector('.contact-form-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Commencez dès maintenant →
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
