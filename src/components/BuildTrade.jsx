import React, { useRef } from "react";
import guidance from "../assets/teachTrading/globalTradingAcademy-group.png";
import vector from "../assets/teachTrading/globalTradingAcademy-learning.png";
import learning from "../assets/teachTrading/globalTradingAcademy-Vector.png";
import teachTrade from "../assets/teachTrading/globalTradingAcademy-teachtrading.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function BuildTrade() {
  const textRef = useRef();
  const textRefTwo = useRef();
  const textRefThree = useRef();
  const cardsContainerRef = useRef();
  const cardsRef = useRef([]);
  const heroRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(textRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      scrollTrigger: {
        scrub: 2,
        trigger: textRef.current,
        start: "top 70%",
        end: "top 65%",
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
        start: "top 70%",
        end: "top 65%",
        marker: false,
      },
    });

    tl.from(textRefThree.current, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      scrollTrigger: {
        scrub: 2,
        trigger: textRefTwo.current,
        start: "top 70%",
        end: "top 65%",
        marker: false,
      },
    });
    tl.from(cardsRef.current, {
      opacity: 0,
      y: -80,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.5,
      scrollTrigger: {
        scrub: 1,
        trigger: cardsContainerRef.current,
        start: "top 70%",
        end: "top 65%",
        marker: false,
      },
    });
    tl.from(heroRef.current, {
      opacity: 0,
      scale: 0.6,
      y: -5,
      scrollTrigger: {
        scrub: 1,
        trigger: heroRef.current,
        start: "top 70%",
        end: "top 60%",
        marker: false,
      },
    });
  }, []);
  return (
    <div className="pt-[80px] sm:pt-[186px] pb-[100px] sm:pb-[216px] font-inter z-50 px-[20px] sm:px-[70px] lg:[85px] xl:px[100px]">
      <div
        ref={textRef}
        className="uppercase hidden sm:block text-center text-[28px] sm:text-[48px] font-[900] leading-[32px] sm:leading-[48px]"
        style={{
          background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        we don't just teach trading
      </div>{" "}
      <p
        ref={textRefTwo}
        className="uppercase hidden sm:block text-center text-[24px] sm:text-[32px] font-[900] leading-[32px] sm:leading-[48px] text-white py-2"
      >
        we build real traders
      </p>
      <p
        ref={textRefThree}
        className="w-full hidden sm:block 2xl:w-[1237px] mx-auto 2xl:h-[181px] text-[16px] sm:text-[20px] text-center leading-[22px] sm:leading-[27px] text-white"
      >
        At Funded Army, we do things differently. Led by Sachin Rao
        an experienced trader with years in live markets we offer more than just
        lessons. You get personal mentorship, clear rules, and a community built
        for real results.
        <br />
        <br />
        Sachin's approach combines practical risk management, a disciplined
        trading mindset, and smart strategies to help you grow your skills,
        protect your capital, and trade with confidence whether you're managing
        funded accounts or growing your swing trading portfolio.
      </p>
<div
  ref={cardsContainerRef}
  className="hidden sm:flex flex-col sm:flex-row flex-wrap items-center justify-center gap-[12px] sm:gap-[24px] pt-[20px] sm:pt-[40px]"
>
  {/* one */}
  <div
    ref={(el) => (cardsRef.current[0] = el)}
    className="card-trade flex 
      w-[220px] sm:w-[360px] lg:w-[380px] xl:w-[400px] 2xl:w-[413px]
      h-[56px] sm:h-[70px] lg:h-[76px] xl:h-[78px] 2xl:h-[80px]
      py-[8px] sm:py-[14px] lg:py-[15px] 2xl:py-[16px]
      px-[10px] sm:px-[20px] lg:px-[22px] xl:px-[24px] 2xl:px-[26px]
      flexcol justify-center items-center gap-[24px]"
    style={{
      background:
        "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
      boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
      backdropFilter: "blur(12.5px)",
    }}
  >
    <img src={guidance} alt="image" className="w-auto h-[24px] sm:h-[26px] lg:h-[28px] xl:h-auto" />
    <p className="text-white text-center 
      text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]
      font-[700] leading-[18px] sm:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[27px]">
      Real guidance
    </p>
  </div>

  {/* two */}
  <div
    ref={(el) => (cardsRef.current[1] = el)}
    className="card-trade flex 
      w-[220px] sm:w-[360px] lg:w-[380px] xl:w-[400px] 2xl:w-[413px]
      h-[56px] sm:h-[70px] lg:h-[76px] xl:h-[78px] 2xl:h-[80px]
      py-[8px] sm:py-[14px] lg:py-[15px] 2xl:py-[16px]
      px-[10px] sm:px-[20px] lg:px-[22px] xl:px-[24px] 2xl:px-[26px]
      flexcol justify-center items-center gap-[24px]"
    style={{
      background:
        "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
      boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
      backdropFilter: "blur(12.5px)",
    }}
  >
    <img src={learning} alt="image" className="w-auto h-[24px] sm:h-[26px] lg:h-[28px] xl:h-auto" />
    <p className="text-white text-center 
      text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]
      font-[700] leading-[18px] sm:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[27px]">
      Practical systems
    </p>
  </div>

  {/* three */}
  <div
    ref={(el) => (cardsRef.current[3] = el)}
    className="card-trade flex 
      w-[220px] sm:w-[360px] lg:w-[380px] xl:w-[400px] 2xl:w-[413px]
      h-[56px] sm:h-[70px] lg:h-[76px] xl:h-[78px] 2xl:h-[80px]
      py-[8px] sm:py-[14px] lg:py-[15px] 2xl:py-[16px]
      px-[10px] sm:px-[20px] lg:px-[22px] xl:px-[24px] 2xl:px-[26px]
      flexcol justify-center items-center gap-[24px]"
    style={{
      background:
        "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
      boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
      backdropFilter: "blur(12.5px)",
    }}
  >
    <img src={vector} alt="image" className="w-auto h-[24px] sm:h-[26px] lg:h-[28px] xl:h-auto" />
    <p className="text-white text-center 
      text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]
      font-[700] leading-[18px] sm:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[27px]">
      Personal feedback
    </p>
  </div>
</div>


      <div
        ref={heroRef}
        className="flex items-start flex-col-reverse xl:flex-row justify-between pt-[50px] sm:pt-[80px] gap-8 xl:gap-0"
      >
        {/* left */}
        <div>
          <div
            className="w-full sm:w-[340px] h-auto sm:h-[33px] text-[16px] sm:text-[20px] font-[700] leading-[24px] sm:leading-[48px] uppercase"
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              paddingBottom: "4px"
            }}
          >
            30 days is all you need
          </div>
          <div className="w-full sm:w-[430px] h-auto sm:h-[93px] text-white text-[32px] sm:text-[48px] font-[900] leading-[36px] sm:leading-[48px] uppercase">
            <span
              style={{
                background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              lock in
            </span>{" "}
            for the next 30 days
          </div>
          <p className="text-white text-[16px] sm:text-[20px] leading-[22px] sm:leading-[27px] py-4">
            You can become a profitable trader in just 30 days of relentless
            focus.
          </p>
          <p className="w-full xl:w-[667px] text-white text-[16px] sm:text-[20px] leading-[22px] sm:leading-[27px]">
            But only if you follow proven trading systems with the right
            strategies and mentorship.
            <br />
            In the Funded Army, you will gain direct access to expert traders
            and coaches who will guide you through a structured, step-by-step
            path designed to turn beginners into confident, skilled traders.
            <br />
            <br />
            Whether it's day trading, swing trading, or long-term investing, our
            community is built to help you succeed faster than you ever thought
            possible.
          </p>
          <a
            href="https://sachin4803.graphy.com/s/store"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 uppercase w-full sm:w-[509px] h-[50px] sm:h-[60px] border-[4px] border-white flex items-center justify-center px-2"
            style={{
              background:
                "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <h2 className="font-[600] text-[14px] sm:text-[22px] md:text-[28px] leading-[22px] sm:leading-[28px] text-white text-center">
              start your 30 days journey
            </h2>
          </a>
        </div>
        {/* right */}
        <img
          src={teachTrade}
          alt="Image"
          className="w-full h-full object-cover sm:max-w-none mx-auto xl:mx-0"
        />
      </div>
    </div>
  );
}

export default BuildTrade;
