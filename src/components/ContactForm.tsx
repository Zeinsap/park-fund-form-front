
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { PhoneIcon } from "lucide-react";

const ContactForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numeric input
    if (name === 'phone') {
      // Replace any non-digit character with empty string
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

  // Function to get cookie value
  const getCookieValue = (name: string) => {
    const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return match ? decodeURIComponent(match[2]) : '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const url = "https://script.google.com/macros/s/AKfycbxX0XHyMSzsI5SYTpa8_1VhkBM2VwQO7Q4i5uxu-uWu6HlyOeO8kzF90Mp5i7u-ws-RNg/exec";
    
    const submissionData = {
      "Prénom": formData.firstName,
      "Nom": formData.lastName,
      "Email": formData.email,
      "Téléphone": `+33${formData.phone}`, // Adding French country code
      "utm_source": getCookieValue("utm_source"),
      "utm_medium": getCookieValue("utm_medium"),
      "utm_campaign": getCookieValue("utm_campaign"),
      "utm_term": getCookieValue("utm_term"),
      "utm_content": getCookieValue("utm_content")
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData)
      });

      const result = await response.text();
      setIsSubmitting(false);
      
      if (result.includes("Success")) {
        toast.success("Merci ! Un conseiller vous contactera dans les 24 heures.");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        });
        setStep(1);
      } else {
        toast.error("Erreur lors de l'envoi : " + result);
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Erreur de connexion. Veuillez réessayer.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-park-blue to-blue-600 p-6 rounded-lg shadow-lg">
      <div className="text-white mb-6">
        <h2 className="text-2xl font-bold mb-2">Prenez part à <span className="text-yellow-400 underline">cette opportunité!</span></h2>
        <p className="text-sm md:text-base">
          Remplissez le formulaire ci-dessous et un de nos conseillers vous contactera dans les <span className="underline">24 heures</span> pour vous guider à chaque étape de votre investissement.
        </p>
      </div>
      
      <div className="mb-6">
        <p className="text-white mb-2">Step {step} of 2</p>
        <Progress value={step === 1 ? 50 : 100} className="h-2" />
      </div>
      
      {step === 1 ? (
        <form onSubmit={handleNext} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Prénom"
              required
              className="bg-white border-0"
            />
            
            <Input 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nom"
              required
              className="bg-white border-0"
            />
          </div>
          
          <Input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
            className="bg-white border-0"
          />
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
            disabled={isSubmitting}
          >
            Suivant
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="bg-white border-0 pl-12"
              type="tel"
              inputMode="numeric"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              type="button" 
              onClick={handlePrevious}
              className="bg-gray-700 hover:bg-gray-800 text-white"
              disabled={isSubmitting}
            >
              Retour
            </Button>
            <Button 
              type="submit" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Je veux être contacté'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
