import React, { useEffect } from "react";
import Home from "./pages/Home";
import Lenis from "@studio-freight/lenis";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#02040E] w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
