import React, { useState, useEffect, useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import classOne from "../assets/heroImages/globalTradingAcademy-classes.webp";
import classTwo from "../assets/heroImages/globalTradingAcademy-classes2.webp";
import classThree from "../assets/heroImages/globalTradingAcademy-classes3.webp";
import leftblur from "../assets/heroImages/globalTradingAcademy-foregroundblurleft.webp";
import rightblur from "../assets/heroImages/globalTradingAcademy-foregroundblurright.webp";
import usFlag from "../assets/heroImages/globalTradingAgency-usFlag.webp";

const HeroCards = () => {
  const baseSlides = [
    {
      image: classOne,
      name: "Lucy - 19",
      rs: "250",
      result: "+Profit",
    },
    {
      image: classTwo,
      name: "Mark - 24",
      rs: "500",
      result: "+Profit",
    },

    {
      image: classOne,
      name: "Lucy - 19",
      rs: "250",
      result: "+Profit",
    },
    {
      image: classTwo,
      name: "Mark - 24",
      rs: "500",
      result: "+Profit",
    },

    {
      image: classOne,
      name: "Lucy - 19",
      rs: "250",
      result: "+Profit",
    },
    {
      image: classTwo,
      name: "Mark - 24",
      rs: "500",
      result: "+Profit",
    },

    {
      image: classOne,
      name: "Lucy - 19",
      rs: "250",
      result: "+Profit",
    },
    {
      image: classTwo,
      name: "Mark - 24",
      rs: "500",
      result: "+Profit",
    },
  ];

  // Clone first and last slides for infinite loop illusion
  const allClasses = [
    baseSlides[baseSlides.length - 1],
    ...baseSlides,
    baseSlides[0],
  ];

  const [cardsToShow, setCardsToShow] = useState(3);
  const [index, setIndex] = useState(1); // Start at first real slide (1)
  const [transition, setTransition] = useState(true);
  const containerRef = useRef();

  const updateCardsToShow = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1584) setCardsToShow(3);
    else if (width > 700)
      setCardsToShow(2);
    else setCardsToShow(1);
  }, []);

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [updateCardsToShow]);

  const next = useCallback(() => {
    setIndex((prev) => prev + 1);
    setTransition(true);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => prev - 1);
    setTransition(true);
  }, []);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, [next]);

  // Looping logic on boundary
  useEffect(() => {
    // When we reach after last clone slide, reset to 1 without transition
    if (index >= allClasses.length - cardsToShow) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
      return () => clearTimeout(timeout);
    }
    // When we go before first clone slide, reset to last real slide without transition
    if (index <= 0) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(allClasses.length - cardsToShow - 1);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index, cardsToShow, allClasses.length]);

  // GSAP animations
  useGSAP(
    () => {
      gsap.from(".blur-img", {
        opacity: 0,
        y: -50,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".slide-card", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.3,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  // Width per slide in percentage
  const slideWidthPercent = 100 / allClasses.length;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden z-30">
      <button
        onClick={next}
        className="absolute z-50 right-[6%] 2xl:right-[26%] top-[30%] sm:top-[20%] transform -translate-y-1/2 flex items-center justify-center w-[44px] sm:w-[84px]  h-[42px] p-[1px] border border-[#38ff38] rounded-full"
        aria-label="Next Slide"
      >
        {/* Next Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
        >
          <path
            d="M35.3389 16.4108C36.2178 17.2897 36.2178 18.7171 35.3389 19.596L26.3389 28.596C25.46 29.4749 24.0326 29.4749 23.1537 28.596C22.2748 27.7171 22.2748 26.2897 23.1537 25.4108L28.3146 20.2499H2.24981C1.00527 20.2499 -0.00019455 19.2444 -0.00019455 17.9999C-0.00019455 16.7554 1.00527 15.7499 2.24981 15.7499H28.3146L23.1537 10.589C22.2748 9.71006 22.2748 8.28271 23.1537 7.40381C24.0326 6.5249 25.46 6.5249 26.3389 7.40381L35.3389 16.4038V16.4108Z"
            fill="white"
          />
        </svg>
      </button>

      <button
        onClick={prev}
        className="absolute z-50 left-[6%] 2xl:left-[26%] top-[30%] sm:top-[20%] transform -translate-y-1/2 flex items-center justify-center w-[44px] sm:w-[84px] h-[42px] p-[1px] border border-[#38ff38] rounded-full"
        aria-label="Previous Slide"
      >
        {/* Prev Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
        >
          <path
            d="M0.661133 16.4108C-0.217773 17.2897 -0.217773 18.7171 0.661133 19.596L9.66113 28.596C10.54 29.4749 11.9674 29.4749 12.8463 28.596C13.7252 27.7171 13.7252 26.2897 12.8463 25.4108L7.68535 20.2499H33.7502C34.9947 20.2499 36.0002 19.2444 36.0002 17.9999C36.0002 16.7554 34.9947 15.7499 33.7502 15.7499H7.68535L12.8463 10.589C13.7252 9.71006 13.7252 8.28271 12.8463 7.40381C11.9674 6.5249 10.54 6.5249 9.66113 7.40381L0.661133 16.4038V16.4108Z"
            fill="white"
          />
        </svg>
      </button>

      <img
        src={leftblur}
        alt=""
        className="blur-img absolute -left-80 xl:-left-32 -top-18 z-30 2xl:h-[596px] opacity-70 2xl:opacity-95"
      />
      <img
        src={rightblur}
        alt=""
        className="blur-img absolute -right-80 xl:-right-32 -top-18 z-30 2xl:h-[596px] opacity-70 2xl:opacity-95"
      />

      <div className="overflow-hidden h-[440px] lg:h-[481.66px]">
        <div
          className={`flex gap-[25px] ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            width: `${(allClasses.length * 100) / cardsToShow}%`,
            transform: `translateX(-${index * (100 / allClasses.length)}%)`,
          }}
        >
          {allClasses.map((data, i) => {

            const activeIndices = [];
            for (let j = 0; j < cardsToShow; j++) {
              activeIndices.push(index + j);
            }
            const showTestimonial = activeIndices.includes(i);

            return (
              <div
                key={i}
                className="slide-card w-[881.19px] h-[240px] m:h-[495.66px] relative flex-shrink-0"
                style={{ width: `${100 / allClasses.length}%` }}
              >
                <img
                  src={data.image}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full rounded-xl shadow-md object-cover"
                />
                <div
                  className={`w-[333px] xl:w-[883.19px] flex flex-col absolute -bottom-20 z-20 items-start mx-auto text-white transition-opacity duration-500 ${
                    showTestimonial
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center justify-center text-[18.438px] font-[700] leading-[32px] tracking-[-0.8px] gap-2">
                    <h2>{data.name}</h2>
                    <img
                      src={usFlag}
                      alt="US Flag"
                      className="h-[30px] w-[30px]"
                    />
                  </div>
                  <p className="text-[#82e95f] flex items-start">
                    $
                    <span
                      className="text-[35px] font-[800] leading-[35px]"
                      style={{
                        background:
                          "linear-gradient(102deg, #82E95F 0%, #3BE900 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      {data.rs}
                    </span>
                    {data.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
