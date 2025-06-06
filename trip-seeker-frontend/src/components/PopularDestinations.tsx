import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  country?: string;
}

const PopularDestinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  const getFallbackData = (): Destination[] => {
    return [
      {
        id: 2,
        name: 'Kashmir Valley',
        country: 'India',
        description: 'Paradise on Earth with stunning landscapes',
        image: '/lovable-uploads/e555ecd3-6e79-4f2a-a8b8-7b375bbefa10.png',
        rating: 4.8,
        price: 4999
      },
      {
        id: 3,
        name: 'Goa Beaches',
        country: 'India',
        description: 'Sun, sand, and endless fun',
        image: '/lovable-uploads/7ea2956b-79c5-43c5-b42f-396ba703be96.png',
        rating: 4.5,
        price: 3999
      }
    ];
  };

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      console.log('Fetching destinations...');
      const response = await fetch('http://localhost:5001/api/destinations');
      console.log('Response received:', response);
      const data = await response.json();
      console.log('Data:', data);
      if (Array.isArray(data) && data.length > 0) {
        setDestinations(data);
      } else {
        console.log('Using fallback data');
        setDestinations(getFallbackData());
      }
    } catch (error) {
      console.log('Error fetching data, using fallback:', error);
      setDestinations(getFallbackData());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after destinations, each offering unique
            experiences and unforgettable memories
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    ⭐ {destination.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">
                      ₹{destination.price.toLocaleString()}
                    </span>
                    <Button
                      variant="default"
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularDestinations;
