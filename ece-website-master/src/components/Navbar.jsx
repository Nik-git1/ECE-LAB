import React, { useState } from "react";
import eceLogo from "./assests/eceLogo.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleEquipmentsClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("equipments");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleFacilitiesClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("facilities");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="sticky top-0 z-50 bg-teal-400 bg-opacity-70 backdrop-blur-md shadow-lg">
      <div className="container flex justify-between items-center mx-auto py-4">
        <Link to="/" className=" z-50 ">
          <img className="h-10" src={eceLogo} alt="ECE Logo" />
        </Link>
        <div className="text-lg font-bold text-gray-800 md:absolute md:inset-0 flex justify-center items-center">
          RF and Applied Electromagnetics Lab
        </div>
        <div className="hidden md:flex z-50">
          <Link to="/" className="ml-4 text-gray-800 hover:text-white">
            Home
          </Link>
          <Link
            to="/projects"
            target="_blank"
            className="ml-4 text-gray-800 hover:text-white"
          >
            Projects
          </Link>
          <a
            href="#equipements"
            onClick={handleEquipmentsClick}
            className="ml-4 text-gray-800 hover:text-white"
          >
            Equipments
          </a>
          <a
            href="#facilites"
            onClick={handleFacilitiesClick}
            className="ml-4 text-gray-800 hover:text-white"
          >
            Equipments
          </a>
        </div>
        <div className="md:hidden flex justify-end">
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none z-20"
          >
            <svg
              viewBox="0 0 20 20"
              className="w-6 h-6 fill-current text-black"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden ${
            showMenu ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white z-50`}
        >
          <Link
            to="/"
            className="block py-2 text-gray-800 hover:text-white"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="block py-2 text-gray-800 hover:text-white"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <a
            href="#"
            onClick={() => {
              handleEquipmentsClick();
              setShowMenu(false);
            }}
            className="block py-2 text-gray-800 hover:text-white"
          >
            Equipments
          </a>
          <a
            href="#"
            onClick={() => {
              handleFacilitiesClick();
              setShowMenu(false);
            }}
            className="block py-2 text-gray-800 hover:text-white"
          >
            Facilities
          </a>
        </div>
      </div>
    </nav>
  );
}
