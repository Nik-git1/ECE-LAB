import React from "react";
import { useEffect } from "react";
import Image from "./assests/Page2Image.svg";
import Bar from "./assests/Bar.svg";
import { animationControls, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Page2() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    if (inView) {
      animation2.start({
        x: 0,
        transition: {
          type: "ease-in",
          duration: 1,
        },
      });

      animation.start({
        x: 0,
        transition: {
          type: "ease-in",
          duration: 2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-80vw" });
      animation2.start({ x: "160vw" });
    }
  }, [inView]);

  return (
    <>
      <div className="m-2" ref={ref} style={{ overflow: "hidden" }}>
        
        <div className="flex flex-row mt-10 p-3" ref={ref}>


          <motion.div animate={animation} className="flex basis-5/12 mx-20">
         
            <img src={Image}></img>
          </motion.div>
          
          <motion.div
            animate={animation2}
            className=" bg-teal-400 p-12  mx-20 flex flex-col basis-7/12 m-5 p-5 bg-slate-100  text-justify "
          >
        
            
            <div className=" text-3xl z-10 ">
              Basic Electronics Lab is intended to serve its facilities as one
              of the teaching labs and also to facilitate teaching and research
              projects. It provides many test and measurement test benches with
              the necessary resources for the purpose of teaching laboratory
              modules. This lab has a wide variety of analog components with
              different models and specifications, which are used as per the
              design performance requirements. The lab inventory includes
              various kinds of sensors, actuators, IoT devices, microcontroller
              development boards, passive components, mechanical tools, analog,
              and digital ICs, etc., to facilitate innovative studies and
              projects. Precise temperature-controlled soldering stations are
              installed for various PCB designing-related works. Apart from the
              regular teaching and research facilities, the lab also extends
              support to facilitate the requests for events, workshops, and
              internships.
            </div>
          </motion.div>
        </div>

      </div>
    </>
  );
}
