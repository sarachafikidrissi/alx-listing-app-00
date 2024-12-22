import React, { useState } from 'react';
import Image from 'next/image';
import Pill from '@/components/common/Pill';
import Card from '@/components/common/Card';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

const filters = ['Top Villa', 'Self Checkin', 'Pet Friendly', 'Free WiFi', 'Pool'];

const Home: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setSelectedFilter((prev) => (prev === filter ? null : filter));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="relative h-96 flex items-center justify-center">
        <div className="relative w-full max-w-7xl">
          <Image
            src="/assets/images/hero/hero.png"
            alt="Hero Image"
            layout="responsive"
            width={2000}
            height={1500}
            quality={100}
            className="rounded-3xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
            <p className="text-xl">The best prices for over 2 million properties worldwide.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4 bg-white shadow-md">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isSelected={selectedFilter === filter}
            onClick={() => toggleFilter(filter)}
          />
        ))}
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <Card
            key={property.name}
            image={property.image}
            name={property.name}
            price={property.price}
            rating={property.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
