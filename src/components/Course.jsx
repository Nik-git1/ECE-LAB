import React, { useState } from 'react';

export default function Course({ name, link }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`relative w-60 h-16 m-4 p-2 flex items-center justify-center shadow-lg border-teal-500 cursor-pointer ${
        hovered ? "backdrop-blur-sm bg-opacity-10" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderLeftWidth: hovered ? '0' : '15px',
        transition: 'border-left-width 0.2s ease', // Add transition for the border
        boxShadow: hovered
          ? '0px 0px 50px rgba(0, 255, 255, 0.7)'
          : '',
      }}
    >
      <p className="text-xl p-2">{name}</p>
    </div>
  );
}
