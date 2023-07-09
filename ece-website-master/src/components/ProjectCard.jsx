import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ image }) {
  return (
    <>
      <div className="mt-16 mx-16 p-4 md:p-0">
        <div className="shadow-lg flex flex-wrap w-full lg:w-full mx-auto">
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            style={{
              backgroundImage: `url(${image})`,
              height: "600px",
            }}
          >
            <div className="absolute text-xl">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>

          <div className="bg-white w-full  md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                <div className="w-full text-4xl lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <div></div>
                  <h3>Project Name</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                    Project by (could go multilines)
                  </p>
                  <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden"></hr>
                </div>

                <div className="w-full lg:w-3/5 lg:px-3">
                  <p className="text-xl mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    Project Desription? The Cathedral of Vasily the Blessed
                    (Russian: Собор Василия Блаженного, Sobor Vasiliya
                    Blazhennogo), commonly known as Saint Basil's Cathedral, is
                    a church in Red Square in and Astrakhan.
                  </p>
                </div>

                <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                  <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                    <Link
                      to="/projects"
                      target="_blank"
                      >
                      Visit now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
