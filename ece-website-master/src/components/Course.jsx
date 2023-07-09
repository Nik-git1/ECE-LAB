import React from 'react';

export default function Course({ name, link }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className='w-60 h-16 m-4 p-2  flex items-center justify-center shadow-lg border-l-[12px] border-teal-500 cursor-pointer'
      onClick={handleClick}
    >
      <p className='text-xl p-2'>{name}</p>
    </div>
  );
}
