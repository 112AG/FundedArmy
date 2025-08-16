import React, { useRef } from "react";
import tenK from "../assets/heroImages/globalTradingAcademy-10k.webp";
import expert from "../assets/heroImages/globalTradingAcademy-experts.webp";
import learning from "../assets/heroImages/globalTradingAcademy-learning.webp";
import coursee from "../assets/heroImages/globalTradingAcademy-courses.webp";
import HeroCards from "./HeroCards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./Header";

function Hero() {
  const heroRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    // Animate heroRef once on mount
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: -5,
      },
      {
        opacity: 1,
        scale: 1,
        y: 5,
        duration: 0.6,
        delay: 0.6,
      }
    );
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.6,
      scrollTrigger: {
        scrub: 2,
        trigger: textRef.current,
        start: "top 65%",
        end: "top 50%",
        marker: false,
      },
    });

    tl.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        scrub: 2,
        trigger: buttonRef.current,
        start: "top 65%",
        end: "top 50%",
        marker: false,
      },
    });
  }, []);

  return (
    <div className="hero-background">
      <Header />
      <div ref={heroRef} className="px-4 2xl:px-0 hero-card">
        <div className="pb-8 xl:py-[60px] w-full max-w-[1580px] mx-auto flex sm:hidden justify-between items-start flex-col lg:flex-row font-inter">
          {/* Left */}
          <div className="w-full lg:w-[50%] font-inter z-40">
            <h1 className="w-full xl:w-[666px] xl:h-[201px] text-center font-[900] text-[22px] sm:text-[32px] md:text-[32px] xl:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[38px] xl:leading-[55px] uppercase text-white mb-4 lg:mb-0">
              <span className="text-[#9DF280]">MONEY</span>{" "}
              <span>FOLLOWS SKILL</span>
              <br className="block" /> &nbsp;
              <span className="font-[500]">
                AND WE BUILD THAT <span className="text-[#9DF280]">SKILL</span>{" "} 
                <br className="hidden sm:block lg:block" />
                FROM <span className="text-[#9DF280]">DAY</span> ONE.
              </span>
            </h1>
            <p className="w-full xl:w-[641px] text-center lg:h-[139px] text-[14px] sm:text-[18px] lg:text-[20px] font-[100] leading-[22px] sm:leading-[25px] lg:leading-[27px] text-[#fff] mb-6">
              No recycled signals or empty promises just direct coaching, clear
              strategies, and practical trading systems that help you trade with
              confidence and stay on track.
            </p>
          </div>
          {/* Right */}
          <div className="w-full xl:w-1/2 flex justify-center items-center mb-8 lg:mb-0 px-2">
            <img
              src={coursee}
              alt="main-image"
              className="w-full max-w-[518px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[600px] xl:max-w-[742px] h-auto object-cover"
            />
          </div>
          {/* Third */}
          <div className="flex flex-wrap px-4 sm:px-0 w-full">
            <a
              href="https://sachin4803.graphy.com/s/store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 uppercase w-full sm:w-[509px] h-[50px] sm:h-[60px] border-4 border-white flex items-center justify-center px-4 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background:
                  "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
                boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
                backdropFilter: "blur(12.5px)",
              }}
            >
              <h2 className="font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl leading-tight text-white text-center">
                start earning through skill
              </h2>
            </a>

            {/* Three Cards Hero left sec */}
            <div className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3 py-5 sm:py-8">
              <div className="w-full h-16 border border-gray-300 flex items-center justify-center gap-2 px-3 hover:border-green-400 transition-colors duration-300">
                <div className="flex items-center justify-between w-[174px] gap-3">
                  <img
                    src={learning}
                    alt="World class learning"
                    className="w-8 sm:w-11 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="uppercase font-bold text-xs leading-tight text-center text-green-400 truncate">
                      world class
                    </p>
                    <h3 className="uppercase font-black text-lg sm:text-2xl text-center leading-tight text-white truncate">
                      learning
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-52 h-16 border border-gray-300 flex items-center justify-center gap-2 px-3 hover:border-green-400 transition-colors duration-300">
                <div className="flex items-center justify-between w-[174px] gap-3">
                  <img
                    src={tenK}
                    alt="Scale from zero to 10k per month"
                    className="w-6 sm:w-7 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="uppercase font-bold text-xs leading-tight text-center text-green-400 truncate">
                      scale from zero
                    </p>
                    <h3 className="uppercase font-black text-lg sm:text-2xl text-center leading-tight text-white truncate">
                      to 10k/mo
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-52 h-16 border border-gray-300 flex items-center justify-center gap-2 px-3 hover:border-green-400 transition-colors duration-300">
                <div className="flex items-center justify-between w-[174px] gap-3">
                  <img
                    src={expert}
                    alt="One-on-one mentorship from experts"
                    className="w-6 sm:w-7 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="uppercase font-bold text-xs text-center leading-tight text-green-400 truncate">
                      1-1 mentorship from
                    </p>
                    <h3 className="uppercase font-black text-lg sm:text-2xl text-center leading-tight text-white truncate">
                      experts
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
e        <div className="xl:py-[60px] hidden w-full max-w-[1580px] gap-6 mx-auto sm:flex justify-between items-start flex-col-reverse lg:flex-row font-inter">
          {/* Left */}
          <div className="w-full lg:w-[50%] font-inter z-40">
            <h1 className="w-full xl:w-[666px] xl:h-[201px] font-[900] text-[28px] sm:text-[32px] md:text-[32px] xl:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[38px] xl:leading-[55px] uppercase text-white mb-4 lg:mb-0">
              <span className="text-[#9DF280]">MONEY</span>{" "}
              <span>FOLLOWS SKILL</span>
              <br className="hidden lg:block" />
              <span className="font-[500]">
                AND WE BUILD THAT <span className="text-[#9DF280]">SKILL</span>{" "} 
                <br className="hidden sm:block lg:block" />
                FROM <span className="text-[#9DF280]">DAY</span> ONE.
              </span>
            </h1>
            <p className="w-full xl:w-[641px] h-[108px] 2xl:h-[139px] text-[16px] sm:text-[18px] xl:text-[20px] font-[700] leading-[22px] sm:leading-[25px] xl:leading-[27px] text-[#fff]">
              No recycled signals or empty promises just direct coaching, clear
              strategies, and practical trading systems that help you trade with
              confidence and stay on track.
            </p>
            <a
              href="https://sachin4803.graphy.com/s/store"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:mt-6 lg:mt-0 uppercase w-full sm:w-[380px] xl:w-[509px] h-[22px] sm:h-[50px] border-[4px] border-white flex items-center justify-center px-2"
              style={{
                background:
                  "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
                boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
                backdropFilter: "blur(12.5px)",
              }}
            >
              <h2 className="font-[600] text-[16px] sm:text-[20px] xl:text-[28px] leading-[22px] sm:leading-[26px] lg:leading-[28px] text-white text-center">
                start earning through skill
              </h2>
            </a>

            {/* Three Cards Hero left sec */}
            <div className="flex flex-col sm:flex-row items-center flex-wrap justify-start gap-[8px] sm:gap-[11px] py-[20px] sm:py-[34px] sm:pt-[22px]">
              <div
                className="w-full h-full sm:w-[140px] sm:h-[56px] 2xl:w-[204px] 2xl:h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px] transition-all duration-300 ease-out
             hover:scale-105 hover:shadow-[0_0_15px_#82e95f]   hover:-translate-y-[2px]"
              >
                <img
                  src={learning}
                  alt="Cards"
                  className="w-[35px] sm:w-[45px]"
                />
                <div>
                  <p className="uppercase font-[700] text-center text-[10px] sm:text-[9px] 2xl:text-[11px] leading-[10px] sm:leading-[11px] text-[#9df280]">
                    world class
                  </p>
                  <h4 className="uppercase font-[900] 2xl:text-[20px] text-center sm:text-[14px] leading-[20px] sm:leading-[24px] text-white">
                    learning
                  </h4>
                </div>
              </div>
              <div
                className="w-full h-full sm:w-[140px] sm:h-[56px] 2xl:w-[204px] 2xl:h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px] transition-all duration-300 ease-out
             hover:scale-105 hover:shadow-[0_0_15px_#82e95f]  hover:-translate-y-[2px]"
              >
                <img
                  src={tenK}
                  alt="Cards"
                  className="w-[22px] sm:w-[27.64px]"
                />
                <div>
                  <p className="uppercase font-[700] text-center text-[10px] sm:text-[9px] 2xl:text-[11px] leading-[10px] sm:leading-[11px] text-[#9df280]">
                    scale from zero
                  </p>
                  <h3 className="uppercase font-[900] 2xl:text-[20px] text-center sm:text-[14px] leading-[20px] sm:leading-[24px] text-white">
                    to 10k/mo
                  </h3>
                </div>
              </div>
              <div
                className="w-full h-full sm:w-[146px] sm:h-[56px] 2xl:w-[204px] 2xl:h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px] transition-all duration-300 ease-out
             hover:scale-105 hover:shadow-[0_0_15px_#82e95f]  hover:-translate-y-[2px]"
              >
                <img
                  src={expert}
                  alt="Cards"
                  className="w-[22px] sm:w-[28.18px]"
                />
                <div>
                  <p className="uppercase font-[700] text-center text-[10px] sm:text-[9px] 2xl:text-[11px] leading-[10px] sm:leading-[11px] text-[#9df280]">
                    1-1 mentorship from
                  </p>
                  <h3 className="uppercase font-[900] 2xl:text-[20px] text-center sm:text-[14px] leading-[20px] sm:leading-[24px] text-white">
                    experts
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full xl:w-1/2 flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
            <img
              src={coursee}
              alt="main-image"
              className="w-full max-w-[518px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[680px] xl:max-w-[742px] h-auto object-cover"
            />
          </div>
        </div>
        {/* hero section bottom text */}
        {/* <div
          ref={textRef}
          className="sm:pb-8 xl:py-0 xl:max-w-[1194px] xl:h-[129px] w-full mx-auto"
        >
          <p className="text-white text-left sm:text-center font-inter text-[14px] sm:text-[18px] lg:text-[20px] sm:font-[700] leading-[20px] sm:leading-[25px] lg:leading-[27px]">
            Join traders worldwide who trust Sachin Rao's personal guidance to
            get funded, withdraw consistently, and build serious trading income
            with his tested zero-loss strategy and a &nbsp;
            <span
              className="bg-gradient-to-r from-[#C4FFB0] via-[#C4FFB0] to-[#82E95F] bg-[length:200%_100%] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(86deg, #C4FFB0 37.91%, #82E95F 61.08%)",
              }}
            >
              clear trading roadmap
            </span>
            , you'll learn to trade smarter, safer, and with total confidence.
          </p>
        </div> */}

        {/* swiper */}
        {/* <HeroCards /> */}

        {/* <div
          ref={buttonRef}
          className="mt-6 uppercase w-full sm:w-[598px] mx-auto h-[50px] sm:h-[60px] border-[4px] border-white flex items-center justify-center px-2"
          style={{
            background:
              "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
            backdropFilter: "blur(12.5px)",
          }}
        >
          <h3 className="font-[600] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[22px] sm:leading-[26px] lg:leading-[28px] text-white text-center">
            start mentorship with sachin rao
          </h3>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
