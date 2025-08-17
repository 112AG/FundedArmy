import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// images
import one from "../assets/reviews/globaltradingAcademy1.webp";
import two from "../assets/reviews/globaltradingAcademy2.webp";
import three from "../assets/reviews/globaltradingAcademy3.webp";
import four from "../assets/reviews/globaltradingAcademy4.webp";
import five from "../assets/reviews/globaltradingAcademy5.webp";
import six from "../assets/reviews/globaltradingAcademy6.webp";
import seven from "../assets/reviews/globaltradingAcademy7.webp";
import eight from "../assets/reviews/globaltradingAcademy8.webp";
import nine from "../assets/reviews/globaltradingAcademy9.webp";
import ten from "../assets/reviews/globaltradingAcademy10.webp";
import eleven from "../assets/reviews/globaltradingAcademy11.webp";
import twelve from "../assets/reviews/globaltradingAcademy12.webp";

function Aboutus() {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const track3Ref = useRef(null);

  const workImages = [
    {
      image: one,
      name: "Aditya Khanna",
      role: "Businessman",
      text: "This course gave me clarity and confidence. I no longer depend on tips or guesswork. The mentor is truly experienced and patient.",
    },
    {
      image: two,
      name: "Mohammed Asif",
      role: "Working Professionals",
      text: "I joined to learn about intraday trading, but the course opened my eyes to so many other profitable opportunities. It’s more than just a course it’s a system!",
    },
    {
      image: three,
      name: "Nitesh Jain",
      role: "College Student",
      text: "Earlier, I was just gambling in the market. Now, I trade with logic and confidence.",
    },
    {
      image: four,
      name: "Simran Kaur",
      role: "Housewives",
      text: "I’ve taken multiple trading courses before, but none were this detailed or beginner-friendly. Highly recommend for anyone serious about trading.",
    },
    {
      image: five,
      name: "Tanya Sethi",
      role: "Housewives",
      text: "As someone with a full-time job, the flexibility and recorded sessions were a blessing. The community support is also fantastic.",
    },
    {
      image: six,
      name: "Sneha Rao",
      role: "Housewives",
      text: "I loved the hands-on approach. We were analyzing live charts and applying strategies from day one.",
    },
    {
      image: seven,
      name: "Neha Sharma",
      role: "Working Professionals",
      text: "The strategies taught here are practical and easy to apply. I started seeing consistent profits within the first month itself.",
    },
    {
      image: eight,
      name: "Ravi Kulkarni",
      role: "Working Professionals",
      text: "What I liked the most was the one-on-one mentorship and real-time market guidance. I recovered my course fee within 2 weeks of trading!",
    },
    {
      image: nine,
      name: "Rahul Singh",
      role: "Working Professionals",
      text: "From a complete beginner to making my first profitable trade — all in just a few weeks. Highly recommended!",
    },
    {
      image: ten,
      name: "Aaruv Mehta",
      role: "Working Professional",
      text: "Excellent value for money. I finally understand risk management, psychology, and strategy — all things that make or break a trader.",
    },
    {
      image: eleven,
      name: "Rohit Mehra",
      role: "College Student",
      text: `"Before joining this course, I had zero knowledge about trading. Now, I confidently analyze charts and make informed decisions. Truly life-changing!"`,
    },
    {
      image: twelve,
      name: "Ankita Verma",
      role: "Housewives",
      text: "The course made me realize the importance of discipline in trading. I stopped overtrading and finally started growing my capital.",
    },
  ];

  const createInfiniteScroll = (target, direction = 1, speed = 60) => {
    const track = target;
    if (!track) return () => {};

    const getWidth = () => track.scrollWidth / 2; 
    let tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

    const build = () => {
      const w = getWidth();
      if (!w || !isFinite(w)) return;
      gsap.set(track, { x: 0 });
      tl.clear();
      tl.to(track, {
        x: direction > 0 ? -w * 0.8 : w * 0.8,
        duration: speed,
      }).set(track, { x: 0 });
    };

    build();

    const onEnter = () => tl.pause();
    const onLeave = () => tl.resume();
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    const imgs = track.querySelectorAll("img");
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", build, { once: true });
    });

    let ro;
    let onResize;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(build);
      ro.observe(track);
    } else {
      onResize = () => build();
      window.addEventListener("resize", onResize);
    }

    return () => {
      tl.kill();
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      if (ro) ro.disconnect();
      if (onResize) window.removeEventListener("resize", onResize);
    };
  };

  useEffect(() => {
    const cleanups = [];
    if (track1Ref.current)
      cleanups.push(createInfiniteScroll(track1Ref.current, 1, 60));
    if (track2Ref.current)
      cleanups.push(createInfiniteScroll(track2Ref.current, -1, 60));
    if (track3Ref.current)
      cleanups.push(createInfiniteScroll(track3Ref.current, 1, 80));
    return () => cleanups.forEach((fn) => fn && fn());
  }, []);

  const renderCards = (data) => (
    <div
      className="flex gap-2 sm:gap-3 lg:gap-4"
      style={{ width: "max-content" }}
    >
      {[...data, ...data].map((item, idx) => (
        <div
          key={idx}
          className="flex w-[280px] sm:w-[380px] lg:w-[460px] 
                     h-[180px] sm:h-[200px] lg:h-[240px] 
                     rounded-lg sm:rounded-xl overflow-hidden shadow-lg font-inter flex-shrink-0"
        >
          {/* Left - Text */}
          <div
            className="bg-[#0C111F] text-white flex-1 flex items-center justify-center 
                         px-3 sm:px-4 lg:px-6 text-center 
                         text-[11px] sm:text-[12px] lg:text-[14px] 
                         leading-[16px] sm:leading-[18px] lg:leading-[22px] font-medium"
          >
            <p className="line-clamp-6 sm:line-clamp-none">{item.text}</p>
          </div>
          {/* Right - Image */}
          <div
            className="bg-[#2F4F30] w-[110px] sm:w-[140px] lg:w-[180px] 
                         flex flex-col items-center justify-center gap-1 sm:gap-2 
                         px-2 sm:px-3 lg:px-4 py-2 sm:py-3 lg:py-4 text-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[121px] lg:h-[121px] 
                        rounded-full object-cover flex-shrink-0"
            />
            <div className="text-center mt-1 sm:mt-2 min-h-0">
              <p
                className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold 
                           leading-[14px] sm:leading-[16px] lg:leading-[20px] 
                           line-clamp-2"
              >
                {item.name}
              </p>
              {item.role && (
                <p
                  className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#CFCFCF] 
                             mt-0.5 sm:mt-1 line-clamp-1"
                >
                  {item.role}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-[7xl] mx-auto">
        <h2
          className="uppercase text-[20px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] 
                       pt-[80px] sm:pt-[120px] lg:pt-[200px] xl:pt-[250px] 
                       pb-[30px] sm:pb-[40px] xl:pb-[81px] 
                       text-center font-[900] leading-tight text-white mb-4 sm:mb-8 px-2"
        >
          our &nbsp;
          <span
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            students &nbsp;
          </span>
          can't stop <br className="block xl:hidden" /> talking
          <span
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            &nbsp; about us
          </span>
        </h2>
      </div>

      {/* Scrollers */}
      <div className="space-y-4">
        <div className="overflow-hidden w-full">
          <div ref={track1Ref}>{renderCards(workImages)}</div>
        </div>
        <div className="overflow-hidden w-full">
          <div ref={track2Ref}>{renderCards(workImages)}</div>
        </div>
        <div className="overflow-hidden w-full">
          <div ref={track3Ref}>{renderCards(workImages)}</div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
