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
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            image: `url(${PeakBackground})`,
            position: "absolute",

            size: "cover",
            repeat: "no-repeat",
          },
          fullScreen: {
            enable: false,
            zIndex: -1, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
            "particles": {
              "number": {
                "value": 50,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle"
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false
                }
              },
              "size": {
                "value": 6,
                "random": true,
                "anim": {
                  "enable": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.6,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false
                }
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                }
              },
              "modes": {
                "repulse": {
                  "distance": 100,
                  "duration": 0.4
                }
              }
            },
          detectRetina: true,
        }}
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      /> */}

      <div>
        <div className="text-5xl mx-16 my-8 underline">
          <AnimatedTextWord text="Projects" />
        </div>

        <div>
          <div style={{ flex: 1, margin: "0 10px" }}>
            <ProjectCard image={pro4} />
          </div>
          <div style={{ flex: 1, margin: "0 10px" }}>
            <ProjectCard image={pro2} />
          </div>
          <div style={{ flex: 1, margin: "0 10px" }}>
            <ProjectCard image={pro3}/>
          </div>
          <div style={{ flex: 1, margin: "0" }}>
            <ProjectCard image={pro1}/>
          </div>
          <div className="mt-28" style={{ height: "40vh" }}>
             <Testimonial/>
          </div>
        </div>
      </div>
    </div>
  );
}
