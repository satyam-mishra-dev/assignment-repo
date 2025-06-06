import React from 'react';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import PopularDestinations from '@/components/PopularDestinations';
import TopSellingPackages from '@/components/TopSellingPackages';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Advantages />
      <PopularDestinations />
      <TopSellingPackages />
      <Testimonials />
    </main>
  );
};

export default Index;
