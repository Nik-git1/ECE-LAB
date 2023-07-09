import React from 'react';

const TestimonialCard = ({ image, name, text }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="mt-4 text-gray-600">{text}</p>
    </div>
  );
};

export default TestimonialCard;