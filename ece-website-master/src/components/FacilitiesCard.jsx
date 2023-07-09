import { FaCalculator, FaReact } from "react-icons/fa";
import React, { useState } from "react";
import { MdHardware } from "react-icons/md";

function FacilitiesCard({ icon: Icon, name, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="relative w-60 h-60 rounded-lg overflow-hidden shadow-md"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`absolute inset-0 flex justify-center items-center transition-transform duration-300 ease-in-out ${
              hovered ? "-translate-x-2" : ""
            }`}
          >
            <Icon
              size={98}
              className={`text-teal-500 transition-transform duration-500 ease-in-out ${
                hovered ? "-translate-x-2/3" : "translate-x-0"
              }`}
            />
            <div
              className={`absolute text-2xl left-full top-1/2 transform -translate-y-1/2 px-1 py-1 text-black transition-all duration-500 ease-in-out ${
                hovered
                  ? "opacity-100 -translate-x-28"
                  : "opacity-100 -translate-x-0"
              }`}
            >
              {name}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default FacilitiesCard;
