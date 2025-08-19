import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "../assets/ourpromises/globalTradingAcademy-Container.webp";
import call from "../assets/ourpromises/globalTradingAcademy-oncall.webp";
import laptop from "../assets/ourpromises/globalTradingAcademy-onlaptop.webp";
import tablet from "../assets/ourpromises/globalTradingAcademy-tablet.webp";
import certify from "../assets/ourpromises/globalTradingAcademy-certificate.png";
import income from "../assets/ourpromises/globalTradingAcademy-income.png";
import doubt from "../assets/ourpromises/globalTradingAcademy-doubt.png";
import cash from "../assets/ourpromises/globalTradingAcademy-cash.png";
import tick from "../assets/ourpromises/globalTradingAcademy-tick.png";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Promise() {
  const sectionsRef = useRef([]);
  const ctaRef = useRef(null);

  const featureData = [
    {
      title: "1:1 Coaching",
      icon: certify,
      width: "38px",
      height: "56px",
      points: [
        "Personal calls, feedback, and handholding to crack funded challenges",
        "Real market used by firms to assess prop firms",
        "One mentor. One goal. Your funded success.",
      ],
      image: call,
    },
    {
      title: "Zero Guesswork",
      icon: doubt,
      width: "31px",
      height: "31.264px",
      points: [
        "A clear system to consistently pass funded accounts",
        "Made for Real People. Built on Real Results.",
        "Perfect for Beginners, Powerful for Pros.",
      ],
      image: laptop,
    },
    {
      title: "Action-Based Learning",
      icon: income,
      width: "28px",
      height: "37.73px",
      points: [
        "Live trading room with mentors for funded accounts",
        "Weekly homework, real-time alerts, and follow-along analysis",
        "You don't just learn. You perform.",
      ],
      image: tablet,
    },
  ];

  useGSAP(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            scrub: 2,
            trigger: section,
            start: "top 60%",
            end: "top 40%",
            marker: false,
          },
        }
      );
    });

    const stickTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".promise-scroll",
        start: "top 40%",
        end: "bottom 60%",
        scrub: true,
        markers: false,
      },
    });

    stickTimeline
      .fromTo(
        ".stick",
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          duration: 0.2,
        }
      )
      .fromTo(
        ".stickPart2",
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          duration: 0.2,
        },
        "+=0"
      );

    gsap.fromTo(
      ".stick2",
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".promise-scroll",
          start: "top 90%",
          end: "bottom botton",
          scrub: 3,
        },
      }
    );

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scrub: 2,
          trigger: ctaRef.current,
          start: "top 60%",
          end: "top 40%",
          marker: false,
        },
      }
    );
  }, []);

  return (
    <div className="promise-scroll font-inter relative overflow-x-clip h-full px-[20px] sm:px-[70px] lg:[85px] xl:px[100px]">
      {/* Heading */}
      <div
        className="uppercase text-center text-[28px] sm:text-[36px] lg:text-[48px] font-[900] leading-[32px] sm:leading-[40px] lg:leading-[48px] mb-8 lg:mb-0"
        style={{
          background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        our promise
      </div>

      {/* Background Image */}
      <img
        src={background}
        alt="Image"
        className="hidden lg:block min-w-[1920px] left-0 z-20"
      />

      {/* Feature Sections */}
      <div className="lg:hidden relative">
        <div className=" flex items-center justify-center flex-col gap-[14px] absolute top-[0%] left-[1%]">
          <div className="w-[18px] h-[18px] flex-shrink-0 rounded-[500px] bg-[linear-gradient(302deg,#7CE95D_22.95%,#AFA_100%)] shadow-[0_4px_40px_0_#00FF2F]"></div>
          <div className="w-[4px] h-[1420px] sm:h-[1668px] bg-[linear-gradient(180deg,var(--color-white-0,rgba(255,255,255,0)),var(--color-white-20,rgba(255,255,255,0.2))_11.8%,var(--color-white-20,rgba(255,255,255,0.2))_90.6%,var(--color-white-0,rgba(255,255,255,0))_100%)] ">
            <div className="stick2 top-0 w-[4px] h-[331px] flex-shrink-0 bg-[#81E85F]"></div>
          </div>
          <div className="w-[18px] h-[18px] absolute flex-shrink-0 rounded-[500px] bg-[linear-gradient(302deg,#7CE95D_22.95%,#AFA_100%)] shadow-[0_4px_40px_0_#00FF2F]"></div>

          <div className="w-[18px] h-[18px] flex-shrink-0 rounded-[500px] bg-[linear-gradient(302deg,#7CE95D_22.95%,#AFA_100%)] shadow-[0_4px_40px_0_#00FF2F]"></div>
        </div>
        {featureData.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="flex flex-col items-start mb-12  sm:mb-16 pl-12 b"
          >
            <div className="w-full flex justify-center mb-6">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full max-w-[320px] sm:max-w-[400px] h-auto object-contain"
              />
            </div>
            <div className="text-white flex flex-col gap-4 w-full max-w-[500px] px-2">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] border-[#d9d9d9] border-[2px] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src={feature.icon}
                    alt="icon"
                    className="object-cover"
                    style={{
                      width: parseInt(feature.width) * 0.8 + "px",
                      height: parseInt(feature.height) * 0.8 + "px",
                    }}
                  />
                </div>
                <p className="uppercase text-[20px] sm:text-[24px] md:text-[28px] font-[600]">
                  {feature.title}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 pl-0 sm:pl-4">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex gap-1 sm:gap-3 items-start">
                    <img
                      src={tick}
                      alt="tick"
                      className="w-[20px] sm:w-[20px] h-[22px] sm:h-[28px] py-[2px] sm:py-[6.5px] flex-shrink-0 mt-1"
                    />
                    <p className="text-white">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block pt-[120px] absolute top-0 left-[4%] xl:left-0 w-full mx-auto">
        <div className=" flex items-center justify-center flex-col gap-[14px] absolute top-[8%] left-[22%] xl:left-[50%]">
          <div className="w-[18px] h-[18px] flex-shrink-0 rounded-[500px] bg-[linear-gradient(302deg,#7CE95D_22.95%,#AFA_100%)] shadow-[0_4px_40px_0_#00FF2F]"></div>
          <div className="w-[4px] h-[428px] xl:h-[648px] relative bg-[linear-gradient(180deg,var(--color-white-0,rgba(255,255,255,0)),var(--color-white-20,rgba(255,255,255,0.2))_11.8%,var(--color-white-20,rgba(255,255,255,0.2))_90.6%,var(--color-white-0,rgba(255,255,255,0))_100%)]">
            <div className="stick absolute top-0 left-0 w-[4px] bg-[#81E85F]"></div>
          </div>
          <div className="w-[18px] h-[18px] flex-shrink-0 rounded-[500px] bg-[linear-gradient(302deg,#7CE95D_22.95%,#AFA_100%)] shadow-[0_4px_40px_0_#00FF2F]"></div>
          <div className="w-[4px] h-[428px] xl:h-[648px] relative bg-[linear-gradient(180deg,var(--color-white-0,rgba(255,255,255,0)),var(--color-white-20,rgba(255,255,255,0.2))_11.8%,var(--color-white-20,rgba(255,255,255,0.2))_90.6%,var(--color-white-0,rgba(255,255,255,0))_100%)]">
            <div className="stickPart2 absolute top-0 left-0 w-[4px] bg-[#81E85F]"></div>
          </div>
          <div className="w-[18px] h-[18px] flex-shrink-0 rounded-[500px] bg-[linear-gradient(302deg,#7CE95D_22.95%,#AFA_100%)] shadow-[0_4px_40px_0_#00FF2F]"></div>
        </div>

        {featureData.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="flex w-[999px] xl:w-[1523px] flex-row mx-auto justify-evenly items-center mb-[80px] px-4"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-[424px] lg:w-[346px] xl:w-[624px] 2xl:w-[726px] xl:h-[440px] object-contain"
            />
            <div className="text-white flex flex-col gap-4 w-[633px]">
              <div className="flex items-center gap-4">
                <div className="w-[55px] h-[55px] border-[#d9d9d9] border-[2px] rounded-full flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt="icon"
                    style={{ width: feature.width, height: feature.height }}
                  />
                </div>
                <p className="uppercase text-[32px] font-[600] leading-[56px]">
                  {feature.title}
                </p>
              </div>
              <div className="flex flex-col gap-[32px] pl-8">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex gap-2 lg:w-[80%] 2xl:w-full">
                    <img
                      src={tick}
                      alt="tick"
                      className="w-[20px] h-[28px] py-[6.5px]"
                    />
                    <p className="text-[18px]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className="flex items-center justify-center gap-2 mt-4 text-white flex-col py-1 xl:py-[108px]"
      >
        <Link
        to={'https://courses.fundedarmy.com/courses/Prop-Firm-Mastery-Program-from-Sachin-Rao-68a318583a0ac25a2484d60d'}
        target="_blank"
          className="mt-6 uppercase w-full max-w-[400px] sm:max-w-[509px] h-[50px] sm:h-[60px] border-[2px] sm:border-[4px] border-white flex items-center justify-center"
          style={{
            background:
              "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
            backdropFilter: "blur(12.5px)",
          }}
        >
          <h2 className="font-[600] text-[15px] sm:text-[22px] md:text-[28px] text-white px-2 text-center">
            join a proven system
          </h2>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-4 text-white">
          <img src={cash} alt="cash" className="w-[20px] h-[18px]" />
          <p>
            <span className="font-bold">Access 50+</span> Proven Methods to
            Trade with ease
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promise;
