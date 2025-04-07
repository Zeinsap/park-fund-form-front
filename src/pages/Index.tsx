
import React from 'react';
import NavBar from '@/components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Invest in Parking?</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Parking investments offer a unique combination of stability, cash flow, 
            and appreciation potential that few other real estate assets can 
            match.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-park-blue">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Steady Cash Flow</h3>
              <p className="text-sm">Parking structures generate monthly revenue from consistent operational transactions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-park-blue">📍</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Prime Locations</h3>
              <p className="text-sm">Parking investments are strategically located in high-demand urban areas with significant scarcity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-park-blue">🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Recession Resistant</h3>
              <p className="text-sm">Parking demand remains strong even during economic downturns, providing stability to your investment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-park-blue">🔧</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Low Maintenance</h3>
              <p className="text-sm">Limited upkeep and minimal ongoing compared to other commercial real estate investments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-park-blue">📈</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Appreciating Asset</h3>
              <p className="text-sm">Properties typically increase in land value over time as cities grow and parking becomes scarcer.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-park-blue">💵</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Tax Benefits</h3>
              <p className="text-sm">Take advantage of depreciation and other tax benefits available to real estate investments.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <blockquote className="italic text-gray-600 text-center mb-6">
              "Investing with Park Fund has been one of the best financial decisions I've made. Their team's expertise in the parking sector is unmatched, and the returns have consistently exceeded my expectations. I appreciate their transparent communication and professional management."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold">Michael Roberts</p>
              <p className="text-sm text-gray-500">Investor since 2018</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="border-b border-gray-200 py-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">What is Park Fund?</span>
                <span>+</span>
              </button>
            </div>
            
            <div className="border-b border-gray-200 py-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">What are the minimum investment requirements?</span>
                <span>+</span>
              </button>
            </div>
            
            <div className="border-b border-gray-200 py-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">What kind of returns can I expect?</span>
                <span>+</span>
              </button>
            </div>
            
            <div className="border-b border-gray-200 py-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">How long is the typical investment period?</span>
                <span>+</span>
              </button>
            </div>
            
            <div className="border-b border-gray-200 py-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">Is parking a recession-resistant investment?</span>
                <span>+</span>
              </button>
            </div>
            
            <div className="border-b border-gray-200 py-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-medium">How do I get started with Park Fund?</span>
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
