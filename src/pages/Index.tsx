
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import FeatureCard from '@/components/FeatureCard';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { CircleParkingIcon, MapPinIcon, ParkingMeterIcon, CarIcon, ZapIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section with Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-park-blue to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Investissez dans <span className="text-yellow-400">l'avenir</span> de la mobilité électrique <CarIcon className="inline-block h-8 w-8 mx-2" /> <ZapIcon className="inline-block h-8 w-8 text-yellow-400" />
              </h1>
              <p className="text-xl mb-4">Profitez de la croissance rapide des infrastructures de recharge en France.</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Rentabilité et impact durable</h3>
                <p className="text-lg">
                  Associez votre investissement à un avenir plus vert, avec des rendements stables pouvant atteindre 7 %.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#benefits" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-400 text-park-dark hover:bg-yellow-300 h-10 px-4 py-2">
                  Découvrir cette opportunité rentable →
                </a>
              </div>

              {/* Partners section */}
              <div className="mt-8">
                <p className="text-sm text-gray-200 mb-3">En partenariat avec</p>
                <div className="bg-[#2D3A3F] p-3 md:p-4 rounded flex items-center justify-between">
                  <img 
                    src="/lovable-uploads/ee4579b7-d423-47c1-996a-16294ec09f5c.png" 
                    alt="Partenaires: Yespark, Vinci Immobilier, Indigo" 
                    className="w-full h-auto"
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
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-park-dark">About Park Fund</h2>
            <p className="text-lg text-gray-600">
              Park Fund specializes in acquiring, developing, and managing premium parking assets 
              across major urban centers. We provide investors with access to stable, cash-flowing 
              real estate investments with significant upside potential.
            </p>
          </div>
          
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-park-blue/10 text-park-blue mb-4">
                <span className="text-3xl font-bold">10+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-park-dark">Years Experience</h3>
              <p className="text-gray-600">Decade of expertise in parking investments</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-park-blue/10 text-park-blue mb-4">
                <span className="text-3xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-park-dark">Properties</h3>
              <p className="text-gray-600">Managing parking assets across the country</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-park-blue/10 text-park-blue mb-4">
                <span className="text-3xl font-bold">9%</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-park-dark">Average Return</h3>
              <p className="text-gray-600">Consistent returns for our investors</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-park-dark">Why Invest in Parking?</h2>
            <p className="text-lg text-gray-600">
              Parking investments offer a unique combination of stability, cash flow, and appreciation 
              potential that few other real estate assets can match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Steady Cash Flow" 
              description="Parking assets generate consistent monthly revenue with minimal operational complexities."
              icon={<ParkingMeterIcon className="w-6 h-6" />}
            />
            
            <FeatureCard 
              title="Prime Locations" 
              description="Our parking investments are strategically located in high-demand urban areas with limited supply."
              icon={<MapPinIcon className="w-6 h-6" />}
            />
            
            <FeatureCard 
              title="Recession Resistant" 
              description="Parking demand remains strong even during economic downturns, providing stability to your portfolio."
              icon={<CircleParkingIcon className="w-6 h-6" />}
            />
            
            <FeatureCard 
              title="Low Maintenance" 
              description="Parking facilities require minimal upkeep compared to other commercial real estate investments."
              icon={<CircleParkingIcon className="w-6 h-6" />}
            />
            
            <FeatureCard 
              title="Appreciating Asset" 
              description="Urban parking spaces typically increase in value over time as cities grow and parking becomes scarcer."
              icon={<MapPinIcon className="w-6 h-6" />}
            />
            
            <FeatureCard 
              title="Tax Benefits" 
              description="Investors can take advantage of depreciation and other tax benefits available to real estate investments."
              icon={<ParkingMeterIcon className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <svg className="w-12 h-12 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl text-center text-gray-600 italic mb-6">
              "Investing with Park Fund has been one of the best financial decisions I've made. Their team's expertise in the parking sector is unmatched, and the returns have consistently exceeded my expectations. I appreciate their transparent communication and professional management."
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-park-dark">Michael Roberts</p>
              <p className="text-gray-500">Investor since 2018</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-park-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Park Fund today and discover how parking investments can provide stable returns and portfolio diversification.
          </p>
          <a href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-park-blue hover:bg-gray-100 h-12 px-8 py-3 text-lg">
            Get Started
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
