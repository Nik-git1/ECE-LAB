import React from 'react'
import Slider from './Slider'
import EceDesc from "./EceDesc";
import Equipments from "./Equipments";
import Projects from "./Projects";
import Facilities from "./Facilities";
import FeedbackForm from "./FeedbackForm";
import Courses from "./Courses";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import PeakBackground from "./assests/Peaks.svg";

export default function HomePage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div style={{ position: "relative" }}>
     <Particles
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
          // fullScreen: {
          //   enable: false,
          //   zIndex: -1, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
          // },
          fpsLimit: 120,
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
      />
    <div style={{height:'95vh'}}>
        <Slider/>
    </div>
    <EceDesc/>
    <Courses/>
    <section id="equipments">
        <Equipments />
    </section>
    <section id='facilities'>
        <Facilities/>
    </section>
   
    <Projects/>
    
    </div>
    </>
  )
}
