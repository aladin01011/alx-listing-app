import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const mockListings = [
  { title: 'Cozy Apartment', description: 'A nice place to stay.', imageUrl: '/assets/placeholder.jpg' },
  { title: 'Modern Loft', description: 'Urban living at its best.', imageUrl: '/assets/placeholder.jpg' },
];

const HomePage: React.FC = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockListings.map((listing, idx) => (
        <Card key={idx} {...listing} />
      ))}
    </div>
    <Button label="Load More" onClick={() => alert('Load more clicked')} />
  </div>
);

export default HomePage;
