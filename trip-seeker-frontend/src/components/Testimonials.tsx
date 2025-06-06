
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Raj Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Trust completely used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Delhi',
    rating: 5,
    comment: 'Trust completely used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 3,
    name: 'Arjun Kumar',
    location: 'Bangalore',
    rating: 5,
    comment: 'Trust completely used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    avatar: '/api/placeholder/60/60'
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-6 h-6 text-teal-600 mx-auto mb-3" />
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {testimonial.comment}
                </p>
                
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
