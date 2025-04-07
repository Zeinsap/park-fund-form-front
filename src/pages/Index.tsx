import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { RocketLaunchIcon, Lightbulb, ShieldCheck } from 'lucide-react';

const IndexPage = () => {
  const features = [
    {
      title: 'Innovation',
      description: 'Notre approche novatrice transforme les défis en opportunités, propulsant votre entreprise vers de nouveaux sommets.',
      icon: <RocketLaunchIcon />,
    },
    {
      title: 'Expertise',
      description: 'Forts d\'une connaissance approfondie du marché, nous éclairons vos décisions stratégiques pour un succès durable.',
      icon: <Lightbulb />,
    },
    {
      title: 'Sécurité',
      description: 'Nous mettons en œuvre des solutions robustes et éprouvées, assurant la protection et la pérennité de vos investissements.',
      icon: <ShieldCheck />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-park-blue to-park-dark min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 text-white">
        <h1 className="text-5xl font-bold mb-4">Bienvenue chez Park&amp;Suites</h1>
        <p className="text-xl mb-8">Votre partenaire pour des solutions immobilières innovantes.</p>
        <button className="bg-park-yellow text-park-dark font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors">
          Découvrez nos offres
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-park-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4">
                <img src="/lovable-uploads/e9c48962-a229-4891-9a21-059167cb041e.png" alt="Graphique croissant" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Un marché en pleine expansion</h3>
              <p className="text-gray-600">Bénéficiez d'un secteur soutenu par des politiques publiques favorables.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4">
                <img src="/lovable-uploads/e9c48962-a229-4891-9a21-059167cb041e.png" alt="Icône de rendement" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Des rendements attractifs</h3>
              <p className="text-gray-600">Tirez parti d'un investissement pouvant générer des revenus annuels fiables.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4">
                <img src="/lovable-uploads/e9c48962-a229-4891-9a21-059167cb041e.png" alt="Icône écologique" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Investissement écologique</h3>
              <p className="text-gray-600">Contribuez à la transition énergétique tout en faisant fructifier votre capital.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ce que nos clients disent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="italic text-lg mb-4">"Park&amp;Suites a transformé notre vision immobilière en réalité. Leur expertise et leur engagement sont inégalables."</p>
              <p className="font-bold">- Jean Dupont, Directeur Général</p>
            </div>
            <div>
              <p className="italic text-lg mb-4">"Grâce à Park&amp;Suites, nous avons pu investir dans des projets durables et rentables. Un partenaire de confiance."</p>
              <p className="font-bold">- Sophie Martin, Investisseur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Prêt à transformer votre avenir immobilier ?</h2>
        <p className="text-xl mb-12">Contactez-nous dès aujourd'hui pour découvrir comment Park&amp;Suites peut vous aider à atteindre vos objectifs.</p>
        <button className="bg-park-yellow text-park-dark font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors">
          Contactez-nous
        </button>
      </section>
    </div>
  );
};

export default IndexPage;
