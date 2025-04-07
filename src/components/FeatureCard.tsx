
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-park-blue/10 rounded-full flex items-center justify-center text-park-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-park-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
