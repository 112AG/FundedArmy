import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import Home from "./pages/Home";
import gsap from "gsap";

function App() {
    const marqueeRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2; 
    gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#02040E] w-full overflow-x-hidden">
      {/* ✅ The marquee */}
      <div className="bg-[#dc2626] overflow-hidden whitespace-nowrap">
        <div
          ref={marqueeRef}
          className="flex w-max text-white font-bold text-sm sm:text-lg"
        >
          <span>
            TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
            TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
            TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
          </span>
          <span className="ml-8">
            TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
            TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
            TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
          </span>
        </div>
      </div> 
      <Home />

    </div>
  );
}

export default App;