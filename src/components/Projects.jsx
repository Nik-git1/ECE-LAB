import React from "react";
import ProjectCard from "./ProjectCard";
import AnimatedTextWord from "./AnimatedTextCharacter";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import PeakBackground from "./assests/Peaks.svg";
import ExpSlideShow from './ExpSlideShow'
import Testimonial from './TestimonialSlider'
import pro1 from './assests/ProjectImages/pro1.jpg'
import pro2 from './assests/ProjectImages/pro2.jpg'
import pro3 from './assests/ProjectImages/pro3.jpg'
import pro4 from './assests/ProjectImages/pro4.jpg'

export default function Page5() {
  // Array of project data with image paths
  const projects = [
    { image: pro4 },
    { image: pro2 },
    { image: pro3 },
    { image: pro1 },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div>
        <div className="text-5xl mx-16 my-8 underline">
          <AnimatedTextWord text="Projects" />
        </div>

        <div>
          {projects.map((project, index) => (
            <div key={index} className="flex-1 m-4" style={{ flex: "0 0 100%" }}>
              <ProjectCard image={project.image} />
            </div>
          ))}
        </div>
        <div className="mt-28">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
