import React from "react";

export default function InventoryCard({ name, img, desc, link }) {
  return (
    <>
      <div className="flex items-center mx-20 p-1  ">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-72 w-72">
            <img
              className="h-full w-full scale-110 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={img}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              {name}
            </h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {desc}
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              <a href={link} target="_blank" rel="noopener noreferrer">
                See More
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
