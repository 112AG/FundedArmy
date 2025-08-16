import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import owner from "../assets/SachinRaw.webp";

gsap.registerPlugin(ScrollTrigger);

function WhoIam() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  // For mobile elements
  const mobileImageRef = useRef(null);
  const mobileTextRef = useRef(null);

  // For desktop elements
  const desktopImageRef = useRef(null);
  const desktopTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse"
        },
      });

      // Mobile animations (for screens < 2xl)
      const mobileQuery = gsap.matchMedia();
      
      mobileQuery.add("(max-width: 1535px)", () => {
        gsap.from(mobileImageRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mobileImageRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          },
        });

        gsap.from(mobileTextRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mobileTextRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          },
        });
      });

      // Desktop animations (for screens >= 2xl)
      mobileQuery.add("(min-width: 1536px)", () => {
        gsap.from([desktopImageRef.current, desktopTextRef.current], {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="font-inter px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 relative w-full max-w-[1580px] mx-auto sm:mt-[128px] md:mt-[248px] xl:mt-[0px] mb-12 lg:mb-16 xl:mb-20 2xl:mb-0 py-8 lg:py-12 2xl:py-16"
    >
      <div className="pt-4 lg:pt-8 2xl:pt-0">
        <h2
          ref={headingRef}
          className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] text-center font-[900] leading-tight text-white mb-8 lg:mb-12 2xl:mb-0"
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
            who
          </span>{" "}
          i am
        </h2>

        {/* Mobile/Tablet/Desktop Layout (Below 2xl) */}
        <div className="2xl:hidden flex flex-col lg:items-start lg:gap-8 xl:gap-12">
          <div className="flex-shrink-0 mx-auto w-[80%]">
            <img
              ref={mobileImageRef}
              src={owner}
              alt="Sachin Rao"
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none h-auto mx-auto lg:mx-0 mb-8 lg:mb-0"
            />
          </div>

          <div
            ref={mobileTextRef}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] font-[700] leading-tight text-[#a6f58b] mb-4 lg:mb-6 text-center lg:text-left">
              I am Sachin Rao
            </h2>
            <div className="space-y-4 lg:space-y-5 xl:space-y-6 text-white text-sm sm:text-base lg:text-lg xl:text-[18px] font-light leading-relaxed text-left">
              <p>
                A former fitness entrepreneur turned full-time trader on a
                mission to build wealth, freedom, and future-proof financial
                skills.
              </p>
              <p>
                After losing everything in 2020, I rebuilt my life through
                relentless trading, mastering the markets, and creating a
                sustainable income. After cracking the markets through years of
                trial, losses, and a life-changing comeback trade, I didn't stop
                at just trading for myself. I built a PMS-style business in
                India, where 300+ investors trusted me with pooled capital.
              </p>
              <p>
                Month after month, I delivered returns not with hype, but with
                strategy. But I wanted more control, more scalability, and less
                regulatory noise.
              </p>
              <p>
                So now, I trade only funded accounts & personal capital working
                with prop firms that offer millions in risk-free capital. No
                more investor pressure — just pure performance.
              </p>
              <p>
                Behind the scenes, I've quietly built powerful algorithmic
                trading bots across multiple financial markets designed for one
                purpose only: to compound wealth silently, automatically, and
                smartly.
              </p>
              <p>
                These bots aren't for sale. They're my private edge, used only
                for personal and funded account growth.
              </p>
              <p>
                My journey is far from over, but one thing is clear: I don't
                chase trades. I build systems that print money.
              </p>
              <p>
                And now, I help others do the same with no BS, only real
                results.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop*/}
        <div className="hidden 2xl:block relative min-h-[1250px]">
          <img
            ref={desktopImageRef}
            src={owner}
            alt="Sachin Rao"
            className="relative -left-50 top-8"
          />

          <div
            ref={desktopTextRef}
            className="w-[679px] absolute top-12 right-62 2xl:right-16 z-50"
          >
            <h2 className="text-[40px] font-[700] leading-[27px] text-[#a6f58b] mb-[8px]">
              I am Sachin Rao
            </h2>
            <p className="text-white text-[20px] font-[700] leading-[27px]">
              A former fitness entrepreneur turned full-time trader on a mission
              to build wealth, freedom, and future-proof financial skills.
              <br />
              <br />
              After losing everything in 2020, I rebuilt my life through
              relentless trading, mastering the markets, and creating a
              sustainable income. After cracking the markets through years of
              trial, losses, and a life-changing comeback trade, I didn't stop
              at just trading for myself. I built a PMS-style business in India,
              where 300+ investors trusted me with pooled capital.
              <br />
              <br />
              Month after month, I delivered returns not with hype, but with
              strategy. But I wanted more control, more scalability and less
              regulatory noise.
              <br />
              <br />
              So now, I trade only funded accounts & personal capital working
              with prop firms that offer millions in risk-free capital. No more
              investor pressure just pure performance.
              <br />
              <br />
              Behind the scenes, I've quietly built powerful algorithmic trading
              bots across multiple financial markets designed for one purpose
              only
              <span className="font-[400]">
                : to compound wealth silently, automatically, and smartly.
              </span>
              <br />
              <br />
              These bots aren't for sale.
              <br />{" "}
              <span className="font-[400]">
                {" "}
                They're my private edge, used only for personal and funded
                account growth.
              </span>
              <br />
              <br />
              My journey is far from over, but one thing is clear: I don't chase
              trades. I build systems that print money.
              <br />
              <br />
              And now, I help others do the same with no BS, only real results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIam;