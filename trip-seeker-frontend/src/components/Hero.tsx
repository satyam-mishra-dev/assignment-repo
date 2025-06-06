import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/images.jpg')",
        }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-4 h-20 bg-yellow-400 transform rotate-12 opacity-60"></div>
      <div className="absolute bottom-60 right-32 w-4 h-16 bg-yellow-400 transform -rotate-12 opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Your Next
            <span className="block text-yellow-400">Adventure</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Choose from our curated experiences, customized for every kind of traveler.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            BOOK NOW
          </Button>
        </div>
        
        {/* Features */}
        <div className="flex flex-wrap gap-8 mt-16">
          <div className="flex items-center gap-3 text-white">
            <Calendar className="w-6 h-6 text-yellow-400" />
            <span className="font-medium">Easy Booking</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-6 h-6 text-yellow-400" />
            <span className="font-medium">Curated Destinations</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Users className="w-6 h-6 text-yellow-400" />
            <span className="font-medium">Trusted Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
