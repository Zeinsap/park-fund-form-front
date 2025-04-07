
import React from 'react';
import { BarChart3Icon, CircleDollarSignIcon, GlobeIcon } from 'lucide-react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
