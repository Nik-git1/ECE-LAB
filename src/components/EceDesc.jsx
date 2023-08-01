import React, { useEffect } from "react";
import Image from "./assests/Page2Image.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Facilities from "./DemoCard";
export default function Page2() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    const desiredDistanceInVw = 1; // Set the desired distance in vw
    const springConfig = {
      type: "spring",
      stiffness: 200, // Adjust stiffness (higher values make the spring stiffer)
      damping: 20, // Adjust damping (higher values reduce oscillation)
    };
    const animationDuration = 0.4;
    const bounce = async () => {
      if (inView) {
        await animation2.start({
          x: `${desiredDistanceInVw}vw`,
          transition: { ...springConfig, duration: animationDuration },
        });

        await animation.start({
          x: `-${desiredDistanceInVw}vw`,
          transition: { ...springConfig, duration: animationDuration },
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const finalPosition1 = animation2.get("x");
        const finalPosition2 = animation.get("x");
      } else {
        animation.start({ x: "-80vw" });
        animation2.start({ x: "80vw" });
      }
    };

    bounce();
  }, [inView]);

  return (
    <>
      <div className="m-2" style={{ overflow: "hidden" }}>
        <div className="flex flex-row mt-10 p-3" ref={ref}>
          <motion.div animate={animation} className="flex basis-5/12 mx-20">
            <img src={Image} alt="Page2Image" />
          </motion.div>

    
          <div className="relative mx-20 flex flex-col basis-7/12 ">
            <motion.div animate={animation2} className="absolute inset-0 p-10 flex text-3xl justify-center items-center bg-opacity-70 bg-teal-400 backdrop-blur-sm text-white">
              Basic Electronics Lab is intended to serve its facilities as one
              of the teaching labs and also to facilitate teaching and research
              projects.
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
