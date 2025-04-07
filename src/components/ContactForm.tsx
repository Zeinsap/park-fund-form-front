import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { PhoneIcon, CheckIcon } from "lucide-react";

declare global {
  function gtag_report_conversion(url?: string): boolean;
}

const ContactForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const getCookieValue = (name: string) => {
    const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return match ? decodeURIComponent(match[2]) : '';
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    setStep(1);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const url = "https://script.google.com/macros/s/AKfycbxX0XHyMSzsI5SYTpa8_1VhkBM2VwQO7Q4i5uxu-uWu6HlyOeO8kzF90Mp5i7u-ws-RNg/exec";
    
    const formDataObj = new FormData();
    
    formDataObj.append('Prénom', formData.firstName);
    formDataObj.append('Nom', formData.lastName);
    formDataObj.append('Email', formData.email);
    formDataObj.append('Téléphone', `+33${formData.phone}`);
    
    formDataObj.append('utm_source', getCookieValue('utm_source'));
    formDataObj.append('utm_medium', getCookieValue('utm_medium'));
    formDataObj.append('utm_campaign', getCookieValue('utm_campaign'));
    formDataObj.append('utm_term', getCookieValue('utm_term'));
    formDataObj.append('utm_content', getCookieValue('utm_content'));

    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      
      xhr.onload = function() {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("Merci ! Un conseiller vous contactera dans les 24 heures.");
        
        if (typeof gtag_report_conversion === 'function') {
          gtag_report_conversion();
        }
      };
      
      xhr.onerror = function() {
        setIsSubmitting(false);
        toast.error("Erreur de connexion. Veuillez réessayer.");
        console.error("Form submission error");
      };
      
      xhr.send(formDataObj);
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Erreur de connexion. Veuillez réessayer.");
      console.error("Form submission error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-park-blue to-blue-600 p-4 sm:p-6 rounded-lg shadow-lg text-center text-white">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 py-4">
          <div className="bg-green-100 rounded-full p-3 sm:p-4">
            <CheckIcon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold">Merci !</h2>
          
          <p className="text-sm sm:text-base max-w-xs mx-auto">
            Votre demande a été envoyée avec succès. Nous vous contacterons très bientôt.
          </p>
          
          <Button 
            onClick={resetForm}
            className="bg-white text-park-blue hover:bg-gray-100 mt-4 text-sm sm:text-base px-4 py-2"
          >
            Soumettre un autre message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-park-blue to-blue-600 p-4 sm:p-6 rounded-lg shadow-lg">
      <div className="text-white mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Prenez part à <span className="text-yellow-400 underline">cette opportunité!</span></h2>
        <p className="text-sm sm:text-base">
          Remplissez le formulaire ci-dessous et un de nos conseillers vous contactera dans les <span className="underline">24 heures</span> pour vous guider à chaque étape de votre investissement.
        </p>
      </div>
      
      <div className="mb-4 sm:mb-6">
        <p className="text-white mb-2">Step {step} of 2</p>
        <Progress value={step === 1 ? 50 : 100} className="h-2" />
      </div>
      
      {step === 1 ? (
        <form onSubmit={handleNext} className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Input 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Prénom"
              required
              className="bg-white border-0 text-gray-900 h-10 sm:h-12"
            />
            
            <Input 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nom"
              required
              className="bg-white border-0 text-gray-900 h-10 sm:h-12"
            />
          </div>
          
          <Input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
            className="bg-white border-0 text-gray-900 h-10 sm:h-12"
          />
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-10 sm:h-12"
            disabled={isSubmitting}
          >
            Suivant
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <PhoneIcon className="h-4 w-4 text-gray-500" />
            </div>
            <Input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone (sans +33)"
              required
              className="bg-white border-0 pl-12 text-gray-900 h-10 sm:h-12"
              type="tel"
              inputMode="numeric"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Button 
              type="button" 
              onClick={handlePrevious}
              className="bg-gray-700 hover:bg-gray-800 text-white h-10 sm:h-12"
              disabled={isSubmitting}
            >
              Retour
            </Button>
            <Button 
              type="submit" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-10 sm:h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi...' : 'Me contacter'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
