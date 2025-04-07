
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import FeatureCard from '@/components/FeatureCard';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { CircleParkingIcon, MapPinIcon, ParkingMeterIcon, CarIcon, ZapIcon, BarChart3Icon, CircleDollarSignIcon, GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section with Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-park-blue to-blue-500 text-white contact-form-section">
        <div className="container mx-auto px-4">
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

              {/* Partners section with new clean logo image */}
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
      
      {/* About Section */}
      <section id="about" className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-park-dark">Pourquoi investir</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20">
                  <BarChart3Icon className="w-16 h-16 text-park-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-park-dark">Un marché en pleine expansion</h3>
              <p className="text-lg text-gray-600">Bénéficiez d'un secteur soutenu par des politiques publiques favorables.</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20">
                  <CircleDollarSignIcon className="w-16 h-16 text-park-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-park-dark">Des rendements attractifs</h3>
              <p className="text-lg text-gray-600">Tirez parti d'un investissement pouvant générer des revenus annuels fiables.</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20">
                  <GlobeIcon className="w-16 h-16 text-park-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-park-dark">Investissement écologique</h3>
              <p className="text-lg text-gray-600">Contribuez à la transition énergétique tout en faisant fructifier votre capital.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-park-dark">Why Invest in Parking?</h2>
            <p className="text-xl text-gray-600">
              Parking investments offer a unique combination of stability, cash flow, and appreciation 
              potential that few other real estate assets can match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              title="Steady Cash Flow" 
              description="Parking assets generate consistent monthly revenue with minimal operational complexities."
              icon={<ParkingMeterIcon className="w-8 h-8" />}
            />
            
            <FeatureCard 
              title="Prime Locations" 
              description="Our parking investments are strategically located in high-demand urban areas with limited supply."
              icon={<MapPinIcon className="w-8 h-8" />}
            />
            
            <FeatureCard 
              title="Recession Resistant" 
              description="Parking demand remains strong even during economic downturns, providing stability to your portfolio."
              icon={<CircleParkingIcon className="w-8 h-8" />}
            />
            
            <FeatureCard 
              title="Low Maintenance" 
              description="Parking facilities require minimal upkeep compared to other commercial real estate investments."
              icon={<CircleParkingIcon className="w-8 h-8" />}
            />
            
            <FeatureCard 
              title="Appreciating Asset" 
              description="Urban parking spaces typically increase in value over time as cities grow and parking becomes scarcer."
              icon={<MapPinIcon className="w-8 h-8" />}
            />
            
            <FeatureCard 
              title="Tax Benefits" 
              description="Investors can take advantage of depreciation and other tax benefits available to real estate investments."
              icon={<ParkingMeterIcon className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-10 md:p-12 rounded-lg shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-2xl text-center text-gray-600 italic mb-8">
              "Investing with Park Fund has been one of the best financial decisions I've made. Their team's expertise in the parking sector is unmatched, and the returns have consistently exceeded my expectations. I appreciate their transparent communication and professional management."
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-xl text-park-dark">Michael Roberts</p>
              <p className="text-lg text-gray-500">Investor since 2018</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* CTA Section */}
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
      
      <Footer />
    </div>
  );
};

export default Index;
