import React, { useState } from "react";
import eceLogo from "./assests/newlogo.png";
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
      <div className="container flex justify-between items-center mx-auto py-1">
        <Link to="/" className=" z-50 ">
          <img className="h-16 " src={eceLogo} alt="ECE Logo" />
        </Link>
        <div className="text-lg font-bold text-gray-800 absolute inset-0 flex justify-center items-center md:text-center">
          {window.innerWidth < 1080
            ? "RF lab"
            : "RF and Applied Electromagnetics Lab"}
        </div>

        <div className=" relative hidden md:flex z-50">
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


      </div>
    </nav>
  );
}
