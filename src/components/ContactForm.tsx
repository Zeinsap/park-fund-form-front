
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    investment: 'Under $10,000'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast.success("Thank you for your interest! We'll be in touch soon.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      investment: 'Under $10,000'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-park-dark">Interested in investing?</h3>
      <p className="text-gray-600 mb-4">Fill out this form and we'll get back to you soon.</p>
      
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <Label htmlFor="investment">Investment Level</Label>
        <select
          id="investment"
          name="investment"
          value={formData.investment}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option>Under $10,000</option>
          <option>$10,000 - $50,000</option>
          <option>$50,000 - $100,000</option>
          <option>$100,000+</option>
        </select>
      </div>

      <div>
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your investment goals..."
          className="resize-none"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full bg-park-blue hover:bg-park-blue/90">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
