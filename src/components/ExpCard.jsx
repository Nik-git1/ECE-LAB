import React from 'react'

export default function expCard({ imageUrl, name, text }) {
  return (
    <div className="bg-white w-52 rounded-lg overflow-hidden m-4 shadow-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <h2 className="ml-4 text-xl font-bold">{name}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};
