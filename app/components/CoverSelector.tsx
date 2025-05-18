import React from 'react';

const covers = [
  '/images/cover1.jpg',
  '/images/cover2.jpg',
  '/images/cover3.jpg',
];

export default function CoverSelector({ selected, onSelect }: { selected: string; onSelect: (cover: string) => void }) {
  return (
    <div className="flex gap-6 justify-center mt-4">
      {covers.map((cover) => (
        <div
          key={cover}
          className={`w-24 h-32 rounded-lg shadow-lg border-4 cursor-pointer transition-all duration-200 ${selected === cover ? 'border-blue-500 scale-105' : 'border-transparent hover:scale-105'}`}
          style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          onClick={() => onSelect(cover)}
        />
      ))}
    </div>
  );
} 
