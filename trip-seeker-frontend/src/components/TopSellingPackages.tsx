import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Users, Star, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Package {
  id?: number;
  name: string;
  description: string;
  image: string;
  duration: string;
  group_size: string;
  price: number;
  rating: number;
  reviews: number;
  includes: string[];
}

const TopSellingPackages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  const getFallbackData = (): Package[] => {
    return [
      {
        id: 1,
        name: 'Kashmir Adventure Package',
        description: 'Explore the beauty of Kashmir Valley with our all-inclusive package',
        image: '/lovable-uploads/e555ecd3-6e79-4f2a-a8b8-7b375bbefa10.png',
        duration: '5 Days',
        group_size: '10-15',
        price: 14999,
        rating: 4.8,
        reviews: 120,
        includes: ['Hotel', 'Transport', 'Meals', 'Sightseeing']
      },
      {
        id: 2,
        name: 'Goa Beach Holiday',
        description: 'Experience the vibrant beaches and nightlife of Goa',
        image: '/lovable-uploads/7ea2956b-79c5-43c5-b42f-396ba703be96.png',
        duration: '4 Days',
        group_size: '8-12',
        price: 9999,
        rating: 4.5,
        reviews: 95,
        includes: ['Resort Stay', 'Beach Activities', 'DJ Nights', 'Water Sports']
      },
      {
        id: 3,
        name: 'Manali Adventure',
        description: 'Thrilling adventure in the heart of Himalayas',
        image: '/lovable-uploads/a9620bc5-9115-4163-a38a-35e8c894f143.png',
        duration: '6 Days',
        group_size: '6-10',
        price: 12999,
        rating: 4.7,
        reviews: 150,
        includes: ['Camping', 'Trekking', 'Rafting', 'Bonfire']
      }
    ];
  };

  const fetchPackages = async () => {
    try {
      setLoading(true);
      console.log('Fetching packages...');
      const response = await fetch('http://localhost:5001/api/packages');
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        console.log('Fetched packages:', data);
        setPackages(data);
      } else {
        console.log('Using fallback data');
        setPackages(getFallbackData());
      }
    } catch (error) {
      console.log('Error fetching packages, using fallback:', error);
      setPackages(getFallbackData());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Selling Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular travel packages, carefully curated for unforgettable experiences
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pack) => (
              <Card 
                key={pack.id || pack.name}
                className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={pack.image}
                    alt={pack.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    ⭐ {pack.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pack.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{pack.description}</p>
                  
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{pack.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{pack.group_size} people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{pack.rating}</span>
                      <span className="text-gray-600">({pack.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">₹{pack.price.toLocaleString()}</span>
                    <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
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

export default TopSellingPackages;
