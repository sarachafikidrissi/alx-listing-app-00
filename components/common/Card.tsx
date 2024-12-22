import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ image, name, price, rating }) => (
  <div className="border p-4 rounded-lg shadow-md bg-white">
    <div className="relative w-full h-48 mb-4">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <div className="flex flex-col items-start">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">${price} / night</p>
      <div className="flex items-center">
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-700">{rating}</span>
      </div>
    </div>
  </div>
);

export default Card;
