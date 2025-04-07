
import React from 'react';

const TestimonialSection = () => {
  return (
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
  );
};

export default TestimonialSection;
