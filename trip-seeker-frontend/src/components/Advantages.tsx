
import React from 'react';
import { Clock, CreditCard, Network, BookOpen } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'No More Switching For Packages Or Plans.'
  },
  {
    icon: CreditCard,
    title: 'Save Money',
    description: 'Compare, Negotiate, And Choose The Best.'
  },
  {
    icon: Network,
    title: 'Trusted Network',
    description: 'A Trusted Network Of 7000+ Travel Agents.'
  },
  {
    icon: BookOpen,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips From Trusted Agents.'
  }
];

const Advantages = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-teal-400 to-teal-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Advantages</h2>
          <p className="text-teal-100 max-w-2xl mx-auto">
            You can rely on our experience and the quality of services we provide.
            Here are other reasons to book tours at Tost Holidays.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-teal-100">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
