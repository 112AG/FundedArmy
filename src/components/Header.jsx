import React, { useRef } from "react";
import logo from "../assets/headerImages/FundedArmy.svg";
import menu from "../assets/headerImages/globalTradingAcademy-menu.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Header() {
  const itemsRef = useRef();
  const loginButton2 = useRef();
  const loginButton = useRef();
  const lettersRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
      itemsRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
      },
      "<"
    );

    tl.fromTo(
      loginButton.current,
      { opacity: 0, scale: 0.9, y: 5 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4 }
    );

    tl.fromTo(
      loginButton2.current,
      { opacity: 0, scale: 0.9, y: 5 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4 },
      "<"
    );

    tl.from(
      lettersRef.current,
      {
        x: 40,
        opacity: 0,
        ease: "power3.out",
        duration: 0.6,
        stagger: 0.1,
      },
      "<"
    );
  });
  const text = "MENU";

  return (
    <div ref={itemsRef} className="font-poppins">
      <div className="py-6 sm:py-[36px] 2xl:py-[57px] max-w-[1580px] mx-auto flex justify-between">
        {/* left */}
        <img
          src={logo}
          alt="Logo"
          className="h-[34px] sm:h-[42px] lg:h-[54px] 2xl:h-full"
          loading="lazy"
        />
        {/* right menus */}
        <div className="flex items-center justify-center gap-[16px]">
          <a
            ref={loginButton2}
            href="https://courses.fundedarmy.com/courses/Prop-Firm-Mastery-Program-from-Sachin-Rao-68a318583a0ac25a2484d60d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#82e95f] text-center border-[#82e95f] uppercase backdrop-blur-[12.5px] 
  w-[92px] 2xl:w-[128px] h-[38px] 2xl:h-[46px] border-[1px] pt-[8.5px] 2xl:pt-[14px] pb-[8.5px] 
  font-bold text-[16px] cursor-pointer leading-[20px] 
  transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_#82e95f] hover:-translate-y-[2px] active:scale-90"
          >
            join
          </a>

          <a
            ref={loginButton}
            href="https://sachin4803.graphy.com/s/authenticate?url=/t/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase backdrop-blur-[12.5px] w-[92px] 2xl:w-[128px] h-[38px] 2xl:h-[46px] border-[1px] 
  pt-[8.5px] 2xl:pt-[14px] pb-[8.5px] px-0 text-[#01030e] text-center cursor-pointer border-white bg-[#82e95f] 
  font-bold text-[16px] leading-[20px] 
  transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_#82e95f] hover:bg-[#6cd94d] hover:-translate-y-[2px] active:scale-90"
          >
            login
          </a>

          {/* <div className="text-white flex item-center gap-[16px] cursor-pointer">
            <img src={menu} alt="Menu Icon" className="w-[28px] h-[28px]" />
            <p className="font-[700] hidden sm:block">
              {text.split("").map((char, i) => (
                <span
                  key={i}
                  ref={(el) => (lettersRef.current[i] = el)}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </span>
              ))}
            </p>{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
