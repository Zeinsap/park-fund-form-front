
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { PhoneIcon } from "lucide-react";

const ContactForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    otpCode: ''
  });
  const [isValidatingPhone, setIsValidatingPhone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOtpChange = (value: string) => {
    setFormData(prev => ({ ...prev, otpCode: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const validatePhone = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      toast.error("Veuillez saisir un numéro de téléphone");
      return;
    }
    setIsValidatingPhone(true);
    toast.success("Code de validation envoyé");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast.success("Merci pour votre intérêt ! Un conseiller vous contactera dans les 24 heures.");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      otpCode: ''
    });
    setStep(1);
    setIsValidatingPhone(false);
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
          
          <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
            Suivant
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <div className="flex items-center gap-1">
                <div className="h-4 w-6 bg-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <PhoneIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <Input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone"
              required
              className="bg-white border-0 pl-16"
            />
          </div>
          
          {!isValidatingPhone ? (
            <Button 
              type="button" 
              onClick={validatePhone}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              valider mon numéro
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded p-2">
                <InputOTP maxLength={6} value={formData.otpCode} onChange={handleOtpChange}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  type="button" 
                  onClick={handlePrevious}
                  className="bg-gray-700 hover:bg-gray-800 text-white"
                >
                  Previous
                </Button>
                <Button 
                  type="submit" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Je veux être contacté
                </Button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
