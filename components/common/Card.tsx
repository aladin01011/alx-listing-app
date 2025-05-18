import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded-lg overflow-hidden shadow p-4">
    {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
    <h3 className="mt-2 text-xl font-semibold">{title}</h3>
    <p className="mt-1 text-gray-600">{description}</p>
  </div>
);

export default Card;
