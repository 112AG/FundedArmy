import React, { useRef, useMemo } from "react";
import certificate1 from "../assets/certificates/globalTradingAcademy-certificateone.webp";
import certificate2 from "../assets/certificates/globalTradingAcademy-certificatetwo.webp";
import certificate5 from "../assets/certificates/globalTradingAcademy-certificatefive.webp";
import certificate4 from "../assets/certificates/globalTradingAcademy-certificatefour.webp";
import certificate3 from "../assets/certificates/globalTradingAcademy-certificatethree.webp";
import certificate6 from "../assets/certificates/globalTradingAcademy-certificatesix.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Achievement() {
  // Memoize certificates array for performance.
  const certificates = useMemo(
    () => [
      certificate1,
      certificate2,
      certificate3,
      certificate4,
      certificate5,
      certificate6,
    ],
    []
  );

  const textRef = useRef();
  const textRefTwo = useRef();
  const cardsContainerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      scrollTrigger: {
        scrub: 2,
        trigger: textRef.current,
        start: "top 65%",
        end: "top 60%",
        marker: false,
      },
    });

    tl.from(textRefTwo.current, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      scrollTrigger: {
        scrub: 2,
        trigger: textRefTwo.current,
        start: "top 65%",
        end: "top 60%",
        marker: false,
      },
    });

    tl.from(cardsContainerRef.current.querySelectorAll(".card"), {
      opacity: 0,
      y: -120,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        scrub: 1,
        trigger: cardsContainerRef.current,
        start: "top 60%",
        end: "top 25%",
        marker: false,
      },
    });
  }, []);

  return (
    <div className="px-4 sm:pt-[164px] lg:pt-0 lg:px-0 pt-2">
      <h1
        ref={textRef}
        className="w-full lg:w-[739px] mx-auto pb-2 text-center text-[32px] sm:text-[48px] font-[900] leading-[38px] sm:leading-[55px] uppercase text-white mb-4 sm:mb-0"
      >
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          ACHIEVEMENTS
        </span>{" "}
        THAT SPEAK FOR THEMSELVES.
      </h1>
      <p
        ref={textRefTwo}
        className="w-full lg:w-[963px] mx-auto h-auto lg:h-[139px] text-white text-[16px] lg:text-[20px] text-center leading-[22px] lg:leading-[27px] mb-8 lg:mb-0 px-4"
      >
        Backed by results you can see: verified certificates, funded accounts,
        and real milestones from our growing trading community.
      </p>

      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px] justify-items-center px:4 lg:px-0 w-full"
      >
        {certificates.map((data, id) => (
          <div
            key={id}
            className="card w-full max-w-[400px] lg:max-w-[314px] 2xl:max-w-[400px] h-auto aspect-[3/4] py-[12px] sm:py-[16px] px-[16px] sm:px-[26px] flex flex-col justify-center items-center text-white"
            style={{
              background:
                "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
              backdropFilter: "blur(12.5px)",
              WebkitBackdropFilter: "blur(12.5px)",
            }}
          >
            <img
              src={data}
              alt=""
              className="w-[80%] max-w-[350px] h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button className="uppercase text-center text-[20px] sm:text-[24px] font-[700] leading-[24px] sm:leading-[27px] underline text-white w-full pt-[24px] sm:pt-[54px] cursor-pointer">
        see more
      </button>
    </div>
  );
}

export default Achievement;
