
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Park Fund?",
    answer: "Park Fund is a parking investment company that acquires, develops, and manages parking assets to generate stable returns for investors."
  },
  {
    question: "What are the minimum investment requirements?",
    answer: "Our minimum investment typically starts at $10,000, but we also offer flexible options for different investor profiles."
  },
  {
    question: "What kind of returns can I expect?",
    answer: "While returns can vary based on the specific parking asset and market conditions, our investors have historically enjoyed annual returns between 7-12%."
  },
  {
    question: "How long is the typical investment period?",
    answer: "Most of our investment opportunities have a term of 3-7 years, but we also offer shorter and longer options depending on the specific project."
  },
  {
    question: "Is parking a recession-resistant investment?",
    answer: "Yes, parking has historically shown resilience during economic downturns. People still need to park their vehicles regardless of economic conditions, making it a relatively stable investment sector."
  },
  {
    question: "How do I get started with Park Fund?",
    answer: "Simply fill out the contact form on our website, and one of our investment specialists will reach out to discuss opportunities that match your investment goals."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-park-dark">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
