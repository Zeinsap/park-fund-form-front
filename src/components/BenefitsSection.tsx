
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { CircleParkingIcon, MapPinIcon, ParkingMeterIcon } from 'lucide-react';

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
