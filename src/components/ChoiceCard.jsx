import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "../assets/choicecardsbackground.webp";

gsap.registerPlugin(ScrollTrigger);

function ChoiceCard() {
  const statementsOne = [
    "Work for someone else",
    "Stay stagnant",
    "Work a 9-5",
    "Spend more, earn less",
    "Stay unfulfilled",
    "Hang around losers",
  ];
  const statementTwo = [
    "Simple-step-by-step mentorship",
    "Learn → Earn daily",
    "Access to millionaire mentors",
    "Connect with 10k+ others",
    "No experience needed",
    "Custom-made learning",
  ];

  // Refs
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef([]);

  // Add card refs dynamically
  cardsRef.current = [];

  const addToCardsRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headings
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(subheadingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 60%",
          end:"top 45%",
          scrub: 2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-card mt-0"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="xl:absolute xl:top-[6%] xl:left-0 xl:right-0 flex flex-col items-center pt-8 xl:pt-0">
        <p
          ref={headingRef}
          className="text-white uppercase text-[16px] sm:text-[20px] font-[700] leading-[32px] sm:leading-[48px]"
        >
          take action
        </p>
        <h2
          ref={subheadingRef}
          className="uppercase text-[28px] sm:text-[40px] xl:text-[48px] font-[900] leading-[32px] sm:leading-[44px] xl:leading-[48px] text-white text-center"
        >
          the{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            choice
          </span>{" "}
          is yours
        </h2>

        <div className="flex flex-col xl:flex-row gap-[20px] sm:gap-[33px] mt-8 xl:mt-12 w-full max-w-6xl">
          {/* grey card */}
          <div
            ref={addToCardsRefs}
            className="w-full max-w-[578px] mx-auto xl:mx-0 xl:w-[578px] h-auto min-h-[600px] xl:h-[816px] bg-[rgba(26,32,43,0.6)] text-white flex-col flex items-center justify-center py-8 xl:py-0 px-4 xl:px-0"
          >
            <h2 className="uppercase text-[32px] sm:text-[40px] xl:text-[48px] font-[700] leading-[28px] sm:leading-[30px] xl:leading-[32px] text-center">
              do nothing
            </h2>
            <p className="text-[16px] sm:text-[18px] xl:text-[20px] font-[600] leading-[28px] sm:leading-[30px] xl:leading-[32px] pt-[8px]">
              Watch Netflix
            </p>
            <div className="w-[200px] sm:w-[280px] xl:w-[314px] h-[1px] bg-white mt-[20px] sm:mt-[25px] xl:mt-[30px] mb-[40px] sm:mb-[50px] xl:mb-[74px]"></div>

            <div className="w-full max-w-[322px] xl:w-[322px] xl:h-[309px] flex flex-col gap-2 xl:gap-0">
              {statementsOne.map((statement, id) => (
                <div
                  key={id}
                  className="flex items-center gap-[10px] sm:gap-[12px] xl:gap-[15px] justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 19"
                    fill="none"
                    className="flex-shrink-0 sm:w-[22px] sm:h-[17px] xl:w-[24px] xl:h-[19px]"
                  >
                    <g clipPath="url(#clip0_401_1025)">
                      <path
                        d="M22.5 2.68164L8.0625 17.1191L1.5 10.5566"
                        stroke="white"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_401_1025">
                        <rect
                          width="24"
                          height="18"
                          fill="white"
                          transform="translate(0 0.900391)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white text-[16px] sm:text-[18px] xl:text-[20px] font-[500] leading-[32px] sm:leading-[40px] xl:leading-[50px]">
                    {statement}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full max-w-[378px] xl:w-[378px] h-auto min-h-[50px] xl:h-[66px] bg-[#272931] border-[1px] border-white flex items-center justify-center mt-[20px] sm:mt-[25px] xl:mt-[30px] px-4 py-3 xl:px-0 xl:py-0">
              <h2 className="text-[#6b6b6b] text-center text-[18px] sm:text-[22px] xl:text-[28px] font-[600] leading-[22px] sm:leading-[26px] xl:leading-[28px] uppercase">
                remain an employee
              </h2>
            </div>
          </div>

          {/* green card */}
          <div
            ref={addToCardsRefs}
            className="w-full max-w-[578px] mx-auto xl:mx-0 xl:w-[578px] h-auto min-h-[600px] xl:h-[816px] border border-white backdrop-blur-[12.5px] pt-8 xl:pt-12 flex flex-col items-center justify-center text-white px-4 xl:px-0 py-8 xl:py-0"
            style={{
              background:
                "linear-gradient(111deg, rgba(130, 233, 95, 0.14) -6.34%, rgba(131, 234, 96, 0.31) 69.64%)",
              boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
            }}
          >
            <h2 className="uppercase text-[32px] sm:text-[40px] xl:text-[48px] font-[700] leading-[28px] sm:leading-[30px] xl:leading-[32px] text-center">
              TAKE ACTION
            </h2>
            <p className="text-[16px] sm:text-[18px] xl:text-[20px] font-[600] leading-[28px] sm:leading-[30px] xl:leading-[32px] pt-[8px]">
              Start Earning Today
            </p>
            <div className="w-[200px] sm:w-[280px] xl:w-[314px] h-[1px] bg-white mt-[20px] sm:mt-[25px] xl:mt-[30px] mb-[40px] sm:mb-[50px] xl:mb-[74px]"></div>

            <div className="w-full max-w-[352px] xl:w-[352px] xl:h-[309px] flex flex-col gap-2 xl:gap-0">
              {statementTwo.map((statement, id) => (
                <div
                  key={id}
                  className="flex items-center gap-[10px] sm:gap-[12px] xl:gap-[15px] justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 24 19"
                    fill="none"
                    className="flex-shrink-0 sm:w-[22px] sm:h-[17px] xl:w-[24px] xl:h-[19px]"
                  >
                    <g clipPath="url(#clip0_401_1025)">
                      <path
                        d="M22.5 2.68164L8.0625 17.1191L1.5 10.5566"
                        stroke="white"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_401_1025">
                        <rect
                          width="24"
                          height="18"
                          fill="white"
                          transform="translate(0 0.900391)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white text-[16px] sm:text-[18px] xl:text-[20px] font-[500] leading-[32px] sm:leading-[40px] xl:leading-[50px]">
                    {statement}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="https://courses.fundedarmy.com/courses/Prop-Firm-Mastery-Program-from-Sachin-Rao-68a318583a0ac25a2484d60d"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-6 uppercase cursor-pointer w-full max-w-[509px] xl:w-[509px] h-auto min-h-[50px] xl:h-[66px] bg-[#00ff004f] border-[4px] border-white flex items-center justify-center px-4 py-3 xl:px-0 xl:py-0"
            >
              <h2 className="font-[600] text-[16px] sm:text-[20px] xl:text-[22px] 2xl:text-[28px] leading-[22px] sm:leading-[24px] xl:leading-[28px] text-white text-center">
                join funded army
              </h2>
            </a>
            <div className="flex items-center justify-center mt-2 sm:mt-4 xl:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0 sm:w-[22px] sm:h-[22px] xl:w-[24px] xl:h-[24px]"
              >
                <path
                  d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                  fill="#35B967"
                />
              </svg>
              <p className="underline text-[16px] sm:text-[18px] xl:text-[20px] leading-[32px] sm:leading-[40px] xl:leading-[50px] ml-1">
                Cancel anytime, risk free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceCard;
