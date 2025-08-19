import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pathImagetwo from "../assets/paths/globalTradingAcademy-programbackground.webp";
import masterprogram from "../assets/paths/globalTradingAcademy-masteryprogram.webp";
import gradeint1 from "../assets/paths/gradient1.webp";
import gradeint2 from "../assets/paths/gradient2.webp";

gsap.registerPlugin(ScrollTrigger);

function Program() {
  const containerRef = useRef();
  const imgRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const textRef = useRef();
  const btnRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(imgRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "power3.out",
            scrollTrigger: {
        scrub: 2,
        trigger: imgRef.current,
        start: "top 85%",
        end: "top 75%",
        marker: false,
      },
    })
      .from(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
                scrollTrigger: {
        scrub: 2,
        trigger: headingRef.current,
        start: "top 85%",
        end: "top 75%",
        marker: false,
      },
        },
        "-=0.4"
      )
      .from(
        subHeadingRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
                scrollTrigger: {
        scrub: 2,
        trigger: subHeadingRef.current,
        start: "top 85%",
        end: "top 75%",
        marker: false,
      },
        },
        "-=0.4"
      )
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
                scrollTrigger: {
        scrub: 2,
        trigger: textRef.current,
        start: "top 85%",
        end: "top 75%",
        marker: false,
      },
        },
        "-=0.3"
      )
      .from(
        btnRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
                scrollTrigger: {
        scrub: 2,
        trigger: btnRef.current,
        start: "top 85%",
        end: "top 75%",
        marker: false,
      },
        },
        "-=0.2"
      );
      
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-h-[800px] mx-auto sm:min-h-[600px] lg:max-h-[1200px] overflow-hidden w-full relative md:mb-[87px] py-8 md:py-12 lg:py-16 xl:py-32"
    >
      <div className=" absolute top-0 w-full bg-img hidden sm:block"></div>
      <img
        src={gradeint1}
        alt="image"
        className="absolute bottom-0 w-[50%] sm:w-auto"
      />
      <img
        src={gradeint2}
        alt="image"
        className="absolute bottom-0 right-0 w-[50%] sm:w-auto"
      />
      <div className="relative flex justify-center items-center flex-col xl:flex-row gap-8 sm:gap-16 xl:gap-[218px] w-full px-4 sm:px-8 xl:px-0 h-full min-h-[400px] sm:min-h-[500px]">
        <div className="flex justify-center  items-center">
          <img
            ref={imgRef}
            src={masterprogram}
            alt="Image"
            className="w-[200px] lg:w-[400px] h-auto object-contain"
          />
        </div>
        <div className="pt-4  max-w-[500px] w-full sm:pt-0 flex flex-col items-center xl:items-start text-center xl:text-left">
          <div
            ref={headingRef}
            className="uppercase text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[48px] font-[900] leading-[32px] sm:leading-[40px] lg:leading-[44px] xl:leading-[48px]"
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }} 
          >
            our program
          </div>
          <p
            ref={subHeadingRef}
            className="uppercase text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[32px] font-[800] leading-[28px] sm:leading-[32px] lg:leading-[40px] xl:leading-[54px] text-white"
          >
            prop firm mastery
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="4"
            className="my-3 sm:my-4 sm:w-[400px] 2xl:w-[500px] xl:w-full"
            viewBox="0 0 591 4"
            fill="none"
          >
            <path
              d="M0.57125 2.49999L590.433 2.32387"
              stroke="#4A4A4A"
              strokeWidth="3"
            />
          </svg>
          <p
            ref={textRef}
            className="w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[500px] xl:w-[573px] text-[#fff] text-[16px] sm:text-[20px] lg:text-[22px] xl:text-[24px] leading-[22px] sm:leading-[28px] lg:leading-[30px] xl:leading-[33px] py-[12px] pb-[32px] sm:pb-[48px] "
          >
            Accelerate your journey to prop firm success with 30 days of live
            training, real strategy, and personal mentorship.
          </p>
          <a
            ref={btnRef}
            href="https://courses.fundedarmy.com/courses/Prop-Firm-Mastery-Program-from-Sachin-Rao-68a318583a0ac25a2484d60d"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase w-full sm:max-w-[400px] z-30 xl:w-[474px] h-[56px] sm:h-[64px] xl:h-[72px] flex items-center justify-center border-[4px] border-white py-[12px] sm:py-[16px] px-[16px] sm:px-[20px] xl:px-[26px]"
            style={{
              background:
                "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <h2 className="font-[600] text-[15px] sm:text-[18px] lg:text-[22px] xl:text-[22px] whitespace-nowrap leading-[22px] sm:leading-[26px] xl:leading-[28px] text-white text-center">
              join the mastery program
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Program;
