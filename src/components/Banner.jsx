import React from "react";
import { useInView } from "react-intersection-observer";

function Banner() {
  const { ref, inView } = useInView({
    threshold: 0.5 // Trigger the animation when the text is 50% visible
  });

  return (
    <div ref={ref} className="flex justify-center items-center h-screen">
      <h1
        className={`text-8xl ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
      >
       Basic Electronics Lab
      </h1>
    </div>
  );
}

export default Banner;
