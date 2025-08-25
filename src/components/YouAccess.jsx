import React, { useRef } from "react";
import thirtydayafterhoursupport from "../assets/programpics/30dayafterhoursupport.webp";
import thirtydaytradingbootcamp from "../assets/programpics/30daytradingbootcamp.webp";
import mypersonalstrategyprogram from "../assets/programpics/mypersonalstrategyprogram.webp";
import thevault from "../assets/programpics/thevault.webp";
import fastfunding from "../assets/programpics/fastfunding.webp";
import sundayswing from "../assets/programpics/sundayswing.webp";
import theinnercircle from "../assets/programpics/theinnercircle.webp";
import thegrowthblueprint from "../assets/programpics/thegrowthblueprint.webp";
import theperfectradecheck from "../assets/programpics/theperfectradecheck.webp";
import performancedashboard from "../assets/programpics/performancedashboard.webp";
import momentumcheckin from "../assets/programpics/momentumcheckin.webp";
import thelegacyday from "../assets/programpics/thelegacyday.webp";
import ultimatekickstart from "../assets/programpics/ultimatekickstart.webp";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ===== STATIC STYLES =====
const gradientText = {
  background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

const cardStyle = {
  background:
    "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
  boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
  backdropFilter: "blur(12.5px)",
  WebkitBackdropFilter: "blur(12.5px)",
};

// ===== STATIC DATA =====
const tradingSections = [
  {
    image: thirtydaytradingbootcamp,
    title: "30-Day Trading Bootcamp",
    points: [
      "Live daily mentorship directly with me",
      "Learn how to pass prop firm challenges",
      "Proven payout strategies for real results",
    ],
  },
  {
    image: thirtydayafterhoursupport,
    title: "30-Day After Hours Support",
    points: [
      "Daily post-workshop check-ins & reviews",
      "Fix execution errors in real-time",
      "Guided practice until you trade like a pro",
    ],
  },
  {
    image: mypersonalstrategyprogram,
    title: "My Personal Strategy Program",
    points: [
      "My exact strategy to grow consistent income",
      "Master trader psychology & mindset",
      "Smart capital & withdrawal management system",
    ],
  },
  {
    image: ultimatekickstart,
    title: "The Aspiring Trader's Playbook: Ultimate Kickstart to Trading",
    points: [
      "Understand how trading actually works — from scratch",
      "Learn the essential tools, terms & setup in simple language",
      "Build a rock-solid foundation before jumping into live markets",
    ],
  },
  {
    image: thevault,
    title: "The Vault: Elite Strategies & Private Masterclasses",
    points: [
      "Access my private training that helped generate $1M+ in trading",
      "Learn advanced psychology, risk-reward systems & money scaling",
      "Unlock step-by-step frameworks to trade smarter, safer & bigger",
    ],
  },
  {
    image: fastfunding,
    title: "Fast Funding & Scaling Secrets",
    points: [
      "My exact formula to pass funded challenges in 30 days or less",
      "Advanced masterclass on how I scale and trade $1M+ funded accounts",
      "Built for traders who want fast results with zero trial-and-error",
    ],
  },
  {
    image: sundayswing,
    title: "Sunday Swings: Weekly Live Trade Room",
    points: [
      "Join my live Sunday session to see the exact trades I plan for the week",
      "Follow my real-time market analysis and trade ideas — just like I do",
      "Ask questions live and apply the full strategy in real market conditions",
    ],
  },
  {
    image: theinnercircle,
    title: "The Inner Circle: Private Trader Community",
    points: [
      "Connect with 5000+ traders worldwide using the same winning strategy",
      "Get 24/7 support from me and my team for guidance & clarity",
      "Access exclusive market insights, live analysis & funding giveaways",
    ],
  },
  {
    image: thegrowthblueprint,
    title: "The Growth Blueprint: Learn Faster, Grow Smarter",
    points: [
      "Mini-course to help you study the program 3x faster",
      "Simple steps to speed up learning and implementation",
      "Designed to get you faster results with less overwhelm",
    ],
  },
  {
    image: theperfectradecheck,
    title: "The Perfect Trade Checklist: Simplicity That Prints Profits",
    points: [
      "5-step checklist to find high-probability trades with ease",
      "Remove guesswork — just follow and execute with confidence",
      "Use before every trade to stay consistent and profitable",
    ],
  },
  {
    image: performancedashboard,
    title: "Performance Dashboard: Lifetime Access, Always Updated",
    points: [
      "Get free lifetime access to all future updates and new modules",
      "Track your growth as new tools, strategies & lessons get added",
      "Stay ahead with the latest content — no extra payments ever",
    ],
  },
  {
    image: momentumcheckin,
    title: "Momentum Check-In: Weekly Mindset Mastery",
    points: [
      "Weekly live sessions with a top trading psychologist",
      "Build bulletproof psychology to trade like a pro under pressure",
      "Stay consistent, confident & profitable — no matter what",
    ],
  },
  {
    image: thelegacyday,
    title: "The Legacy Day: Elite Invitation for Proven Traders",
    points: [
      "Exclusive 1-on-1 full-day session at my home, all expenses paid",
      "Learn how to scale your trading to the highest level, personally with me",
      "Reserved only for students who become consistently profitable",
    ],
  },
];

function YouAccess() {
  const textRef = useRef(null);
  const textRefTwo = useRef(null);
  const ctaRef = useRef(null);
  const sectionsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useGSAP(() => {
    // Headings
    gsap.from([textRef.current, textRefTwo.current], {
      opacity: 0,
      y: -40,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "top 65%",
        // scrub: 1,
      },
    });

    // Sections
    sectionsRef.current.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 65%",
          // scrub: 1,
        },
      });
    });

    // CTA
    gsap.from(ctaRef.current, {
      opacity: 0,
      y: 60,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
        end: "top 65%",
        // scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="h-full font-inter py-12 px-[20px] sm:px-[70px] lg:[85px] xl:px[100px]">
      {/* Heading */}
      <div
        ref={textRef}
        className="uppercase text-[16px] sm:text-[18px] lg:text-[20px] font-[700] text-center mb-4"
        style={gradientText}
      >
        what will you access
      </div>

      <div
        ref={textRefTwo}
        className="uppercase text-center text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[900] text-white mb-8 lg:mb-12 px-2"
      >
        all <span className="text-[#B1F999]">tools</span>, all{" "}
        <span className="text-[#B1F999]">access</span>, one{" "}
        <span className="text-[#B1F999]">program.</span>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[73px] items-center py-6 sm:py-8 lg:py-[48px]">
        {tradingSections.map((section, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="w-full max-w-[1388px] text-white p-4 sm:p-6 lg:p-[32px] flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0"
            style={cardStyle}
          >
            {/* Mobile */}
            <div className="lg:hidden w-full flex flex-col items-center">
              <img
                src={section.image}
                alt={section.title}
                loading="lazy"
                className="h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] object-contain mb-6"
              />
              <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-[600] text-center pb-2 sm:pb-3">
                {section.title}
              </h1>
              <div className="flex flex-col gap-2 sm:gap-3">
                {section.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 w-full py-2 sm:py-3 px-4 sm:px-5 rounded-full bg-[#ffffff11]"
                  >
                    <div className="">
                      <CheckIcon />
                    </div>
                    <p className="text-[12.5px] sm:text-[15px] md:text-[16px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex w-full justify-between items-center">
              <div className="flex flex-col gap-[12px]">
                <h1 className="text-[32px] font-[600] pb-[12px]">
                  {section.title}
                </h1>
                <div className="flex flex-col gap-[8px]">
                  {section.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-[8px] py-[11px] px-[30px] rounded-full bg-[#ffffff11]"
                    >
                      <CheckIcon />
                      <p className="text-[17.55px]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={section.image}
                alt={section.title}
                loading="lazy"
                className="h-[259px] w-[259px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className="w-full max-w-[750px] mx-auto py-4 sm:py-6 lg:py-[16px] px-4 sm:px-6 lg:px-[26px] flex flex-col justify-center items-center gap-4 lg:gap-2 z-40"
        style={cardStyle}
      >
        <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-[700] uppercase text-[#ff2c2c]">
          real price $5000 usd
        </p>
        <p
          className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-[900] uppercase text-white"
          style={gradientText}
        >
          $2500
        </p>
        <a
          href="https://courses.fundedarmy.com/courses/Prop-Firm-Mastery-Program-from-Sachin-Rao-68a318583a0ac25a2484d60d"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 lg:mt-6 uppercase cursor-pointer w-full max-w-[409px] h-[50px] sm:h-[56px] lg:h-[70px] bg-[#00ff004f] border-[2px] sm:border-[3px] lg:border-[4px] border-white flex items-center justify-center hover:bg-[#00ff006f] transition-colors py-3"
        >
          <p className="font-[600] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-white">
            join funded army
          </p>
        </a>
        <a
          href="https://wa.me/918283863866"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[196px] h-[50px] sm:h-[56px] lg:h-[62px] border border-white bg-[#82e95f] flex items-center justify-center gap-[5px] mt-4 sm:mt-6 lg:mt-[29px] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_#82e95f] hover:bg-[#6cd94d] hover:-translate-y-[2px] active:scale-90"
        >
          <WhatsappIcon />
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-[700] text-[#02040e]">
            Support
          </p>
        </a>
        <p className="text-white text-[8px] sm:text-[9px] lg:text-[10px] font-[400] text-center">
          7 days money back guarantee | Direct refunds with no questions
        </p>
      </div>
    </div>
  );
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" fill="none">
    <path
      d="M22.5 2.68164L8.0625 17.1191L1.5 10.5566"
      stroke="white"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 0C5.383 0 0 5.383 0 12c0 2.117.555 4.182 1.607 6.008L.053 24l6.18-1.627A11.933 11.933 0 0 0 12 24c6.617 0 12-5.383 12-12S18.617 0 12 0Zm0 22a9.94 9.94 0 0 1-5.058-1.37l-.362-.214-3.667.967.98-3.572-.236-.366A9.94 9.94 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm5.364-7.73c-.293-.146-1.732-.854-2.001-.951-.269-.098-.465-.146-.66.147-.196.293-.758.951-.929 1.147-.171.196-.342.22-.635.073-.293-.146-1.237-.456-2.357-1.45-.87-.777-1.456-1.737-1.627-2.03-.171-.293-.018-.451.128-.597.132-.132.293-.342.439-.513.146-.171.195-.293.293-.488.098-.196.049-.366-.024-.513-.073-.146-.66-1.596-.904-2.185-.237-.57-.479-.492-.66-.502l-.564-.01c-.195 0-.512.073-.78.366s-1.026 1-1.026 2.44 1.05 2.834 1.196 3.03c.146.195 2.066 3.158 5.009 4.424.7.302 1.247.482 1.673.617.703.224 1.342.193 1.846.117.563-.084 1.732-.707 1.977-1.39.244-.684.244-1.27.171-1.39-.073-.122-.269-.195-.562-.342Z"
      fill="#01030E"
    />
  </svg>
);

export default YouAccess;
