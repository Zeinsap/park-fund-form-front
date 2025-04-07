
import React from 'react';
import NavBar from '@/components/NavBar';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialSection from '@/components/TestimonialSection';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
