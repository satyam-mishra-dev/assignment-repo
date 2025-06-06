const { dirname } = require('path');
const { fileURLToPath } = require('url');
const { supabase } = require('../lib/supabase.js');

const __dirname = dirname(fileURLToPath(import.meta.url));

const demoDestinations = [
  {
    name: 'Kashmir Valley',
    country: 'India',
    image: '/lovable-uploads/e555ecd3-6e79-4f2a-a8b8-7b375bbefa10.png',
    price: 4999,
    rating: 4.8,
    description: 'Paradise on Earth with stunning landscapes'
  },
  {
    name: 'Goa Beaches',
    country: 'India',
    image: '/lovable-uploads/7ea2956b-79c5-43c5-b42f-396ba703be96.png',
    price: 3999,
    rating: 4.5,
    description: 'Sun, sand, and endless fun'
  }
];

const demoPackages = [
  {
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

async function seedData() {
  try {
    // Clear existing data first
    console.log('Clearing existing data...');
    await supabase
      .from('destinations')
      .delete()
      .neq('id', 0);
    await supabase
      .from('packages')
      .delete()
      .neq('id', 0);

    console.log('Inserting destinations...');
    const { error: destError } = await supabase
      .from('destinations')
      .insert(demoDestinations);
    
    if (destError) {
      console.error('Error inserting destinations:', destError);
      throw destError;
    }
    console.log('✅ Destinations added');

    console.log('Inserting packages...');
    const { error: packError } = await supabase
      .from('packages')
      .insert(demoPackages);
    
    if (packError) {
      console.error('Error inserting packages:', packError);
      throw packError;
    }
    console.log('✅ Packages added');

  } catch (error) {
    console.error('Failed:', error);
    process.exit(1);
  }
}

seedData().then(() => {
  console.log('✨ Demo data added successfully');
  process.exit(0);
});
