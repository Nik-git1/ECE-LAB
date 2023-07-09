import React from "react";
import { useState } from "react";
//import Image from "./image.png"; // replace with your own image




const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the fourth card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the fifth card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the sixth card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the seventh card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the eighth card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is the ninth card",
    imageUrl: "https://via.placeholder.com/350x150",
  },
];

// const Card = ({ card }) => (
//   <div className="flex-shrink-0 m-4 bg-white rounded-lg shadow-lg overflow-hidden w-80">
//     <img
//       className="w-full h-48 object-cover object-center"
//       src={card.imageUrl}
//       alt={card.title}
//     />
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-2">{card.title}</h2>
//       <p className="text-gray-700 text-sm">{card.description}</p>
//     </div>
//   </div>
// );

const Card = ({ card }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-8">
        <div className="font-bold text-xl mb-4">{card.title}</div>
        <div className="mb-4">
          {/* <FontAwesomeIcon icon={faQuoteLeft} className="text-gray-500 mr-2" /> */}
          {card.description}  </div>
        <img src={card.imageUrl} alt="John Doe" className="h-16 w-16 rounded-full mx-auto mb-4" />
      </div>
    </div>
  );




const CardSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = cards.length - 1;

  // Create two copies of the cards array and concatenate them
  const allCards = [...cards, ...cards];

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? maxIndex * 2 : prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === maxIndex * 2 ? 0 : prevIndex + 1)
    );
  };

  return (


    <div className="flex items-center justify-center">
      <button
        className="p-4 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-100"
        onClick={handlePrevious}
      >
        {"<"}
      </button>
      <div className="flex">
        {allCards.slice(currentIndex, currentIndex + 3).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <button
        className="p-4 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-100"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
    
  );
};

export default CardSlideshow
