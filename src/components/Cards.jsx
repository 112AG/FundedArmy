import React, { useRef } from "react";
import background from "../assets/pageTwo/globalTradingAcademy-backgroundsecond.svg";
import clock from "../assets/pageTwo/globalTradingAcademy-clock.svg";
import ai from "../assets/pageTwo/globalTradingAcademy-ai.svg";
import skill from "../assets/pageTwo/globalTradingAcademy-skill.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const cards = [
    {
      image: clock,
      heading: "THE CLOCK IS TICKING",
      subheading: "Markets won't wait. Will you?",
      paragraph:
        "Every second you hesitate, someone else is mastering the charts, entering trades, and compounding wealth. Do you have a strategy or just hope?",
      bottomheading: "Now is the time to level up or be left behind.",
    },
    {
      image: ai,
      heading: "TRADING IS CHANGING FAST",
      subheading: "AI, bots & smart money are ahead of you.",
      paragraph:
        "The markets are being dominated by automation and high-frequency strategies. If you're still trading with old mindsets, you're already behind.",
      bottomheading:
        "You need the edge. Learn how to trade like the pros with precision.",
    },
    {
      image: skill,
      heading: "SKILLS PAY THE BILLS",
      subheading: "The only shortcut is skill-building.",
      paragraph:
        "Imagine understanding exactly when to enter & exit. Imagine compounding profits month after month. We turn beginners into confident traders with real skills.",
      bottomheading: "Invest in yourself. Your future portfolio will thank you.",
    },
  ];

  const cardsContainerRef = useRef();

  useGSAP(() => {
    const cardEls = gsap.utils.toArray(cardsContainerRef.current.querySelectorAll(".card"));

    gsap.from(cardEls, {
      opacity: 0,
      y: 60, 
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      willChange: "transform, opacity",
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: "top 65%",
        end: "top 50%",
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col font-inter px-4 sm:px-6 lg:px-8">
      <div
        ref={cardsContainerRef}
        className="w-full 2xl:min-w-[1280px] flex mt-[84px] flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch z-50 relative pt-[80px] sm:pt-[128px] gap-4 sm:gap-[17px]"
      >
        {cards.map((data, idx) => (
          <div
            className="card will-change-transform will-change-opacity w-full max-w-[318px] sm:max-w-[360px] lg:w-[360px] 2xl:min-w-[428px] 
                       h-auto min-h-[480px] sm:min-h-[526px] lg:h-[629px] 
                       py-4 sm:py-[16px] px-4 sm:px-[26px] lg:mt-0
                       flex flex-col justify-center items-center gap-[12px] text-white
                       mx-auto lg:mx-0"
            key={idx}
            style={{
              background:
                "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
              backdropFilter: "blur(12.5px)",
              WebkitBackdropFilter: "blur(12.5px)",
            }}
          >
            <img src={data.image} alt={data.heading} className="max-w-[80px]" />
            <h2 className="uppercase text-[40px] font-[900] text-center leading-[49px]">{data.heading}</h2>
            <h3 className="uppercase text-[20px] font-[900] text-center leading-[27px]">{data.subheading}</h3>
            <p className="text-center text-[20px] font-[500] leading-[27px]">{data.paragraph}</p>
            <h4 className="text-center text-[20px] font-[900] leading-[27px]">{data.bottomheading}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
