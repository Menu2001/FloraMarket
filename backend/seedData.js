const mongoose = require('mongoose');
const Flower = require('./models/Flower');
require('dotenv').config();

const sampleFlowers = [
  {
    name: 'Red Roses Bouquet',
    description: 'A stunning bouquet of fresh red roses, perfect for romantic occasions. Each rose is carefully selected for its beauty and freshness.',
    price: 45.99,
    category: 'roses',
    imageUrl: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 25,
    colors: ['red'],
    season: 'all-year'
  },
  {
    name: 'Pink Tulips',
    description: 'Beautiful pink tulips that symbolize perfect love and happiness. These spring flowers bring joy and color to any space.',
    price: 32.50,
    category: 'tulips',
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 30,
    colors: ['pink'],
    season: 'spring'
  },
  {
    name: 'White Lilies',
    description: 'Elegant white lilies representing purity and majesty. These fragrant flowers are perfect for weddings and special ceremonies.',
    price: 38.75,
    category: 'lilies',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 20,
    colors: ['white'],
    season: 'summer'
  },
  {
    name: 'Sunflower Bundle',
    description: 'Bright and cheerful sunflowers that bring sunshine to any room. These large, vibrant flowers are perfect for summer arrangements.',
    price: 28.99,
    category: 'sunflowers',
    imageUrl: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 35,
    colors: ['yellow'],
    season: 'summer'
  },
  {
    name: 'Purple Orchids',
    description: 'Exotic purple orchids that add elegance and sophistication to any arrangement. These rare flowers are perfect for special occasions.',
    price: 55.00,
    category: 'orchids',
    imageUrl: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 15,
    colors: ['purple'],
    season: 'all-year'
  },
  {
    name: 'Mixed Spring Bouquet',
    description: 'A colorful mix of spring flowers including daisies, tulips, and baby\'s breath. Perfect for celebrating the arrival of spring.',
    price: 42.50,
    category: 'mixed',
    imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 18,
    colors: ['pink', 'yellow', 'white'],
    season: 'spring'
  },
  {
    name: 'Yellow Roses',
    description: 'Bright yellow roses symbolizing friendship and joy. These cheerful flowers are perfect for brightening someone\'s day.',
    price: 39.99,
    category: 'roses',
    imageUrl: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 22,
    colors: ['yellow'],
    season: 'all-year'
  },
  {
    name: 'Orange Tulips',
    description: 'Vibrant orange tulips that bring warmth and energy to any space. These bold flowers are perfect for making a statement.',
    price: 35.75,
    category: 'tulips',
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    inStock: true,
    stockQuantity: 28,
    colors: ['orange'],
    season: 'spring'
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/flower_site');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Flower.deleteMany({});
    console.log('Cleared existing flower data');

    // Insert sample data
    const flowers = await Flower.insertMany(sampleFlowers);
    console.log(`Successfully seeded ${flowers.length} flowers`);

    console.log('Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
