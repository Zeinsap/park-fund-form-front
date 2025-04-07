
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { CircleParkingIcon, MapPinIcon, ParkingMeterIcon, CarIcon, ZapIcon, BarChart3Icon, CircleDollarSignIcon, GlobeIcon, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section with Form */}
      <section className="py-16 md:py-24 text-white contact-form-section relative overflow-hidden">
        {/* Background parking tower image with reduced opacity */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/c99dec98-ba6b-46f5-bc33-bb4832786edf.png" 
            alt="Parking Tower" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Investissez dans <span className="text-yellow-400">l'avenir</span> de la mobilité électrique <CarIcon className="inline-block h-8 w-8 mx-2" /> <ZapIcon className="inline-block h-8 w-8 text-yellow-400" />
              </h1>
              <p className="text-xl mb-6">Profitez de la croissance rapide des infrastructures de recharge en France.</p>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-3">Rentabilité et impact durable</h3>
                <p className="text-xl">
                  Associez votre investissement à un avenir plus vert, avec des rendements stables pouvant atteindre 7 %.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#about" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-400 text-park-dark hover:bg-yellow-300 h-12 px-6 py-3">
                  Découvrir cette opportunité rentable →
                </a>
              </div>

              {/* Partners section with new clean logo image */}
              <div className="mt-10">
                <p className="text-base text-gray-200 mb-3">En partenariat avec</p>
                <div className="flex items-center gap-8 p-4 rounded-lg">
                  <img 
                    src="/lovable-uploads/330f78f8-3ae8-4f01-a04c-dd2e4296392c.png" 
                    alt="Partenaires: Yespark, Vinci Immobilier, Indigo" 
                    className="w-full max-w-md h-auto"
                  />
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
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
      
      {/* Gallery Section - NEW */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-park-dark">Notre galerie de parkings</h2>
            <p className="text-xl text-gray-600">Découvrez nos infrastructures de parking modernes et bien entretenues</p>
          </div>
          
          <div className="max-w-5xl mx-auto px-8">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="/lovable-uploads/5ce75069-8a7a-429d-8332-d18847464514.png" 
                          alt="Parking intérieur avec éclairage bleu" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-park-dark text-white">
                        <h3 className="text-xl font-semibold">Parking intérieur sécurisé</h3>
                        <p className="text-gray-200">Système d'éclairage moderne et surveillance 24/7</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                <CarouselItem>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="/lovable-uploads/d95c30d7-03cf-467c-9e5f-f1d191bd1234.png" 
                          alt="Parking sur le toit avec lampadaires" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-park-dark text-white">
                        <h3 className="text-xl font-semibold">Parking en terrasse</h3>
                        <p className="text-gray-200">Emplacement idéal pour l'installation de bornes de recharge solaires</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                <CarouselItem>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="/lovable-uploads/95bcbd1e-7127-4fef-a5ae-2cb670493b87.png" 
                          alt="Places de parking numérotées" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-park-dark text-white">
                        <h3 className="text-xl font-semibold">Organisation optimale</h3>
                        <p className="text-gray-200">Places numérotées et signalisation claire pour faciliter l'accès</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                <CarouselItem>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="/lovable-uploads/084d1306-270d-49cf-b96e-47b02194d149.png" 
                          alt="Vue aérienne d'un parking avec voitures" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-park-dark text-white">
                        <h3 className="text-xl font-semibold">Gestion optimisée de l'espace</h3>
                        <p className="text-gray-200">Emplacements adaptés aux différents types de véhicules</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static -left-0 -translate-y-0 mr-4" />
                <CarouselNext className="relative static -right-0 -translate-y-0 ml-4" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Night Parking Image */}
      <section className="py-20 bg-park-blue text-white relative overflow-hidden">
        {/* Background parking garage image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/c8565d33-3e10-49cc-a05d-c9f986382be1.png" 
            alt="Parking Garage at Night" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-park-blue/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Prêt à investir dans un avenir durable?</h2>
          <p className="text-2xl mb-10 max-w-2xl mx-auto">
            Découvrez comment les parkings électriques peuvent devenir un levier financier.
          </p>
          <Button 
            variant="default" 
            className="bg-white text-park-blue hover:bg-gray-100 h-12 px-10 py-3 text-lg"
            onClick={() => document.querySelector('.contact-form-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Commencez dès maintenant →
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
