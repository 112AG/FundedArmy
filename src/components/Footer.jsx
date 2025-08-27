import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gradientStyle = {
  background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

const Footer = memo(() => {
  const footerRef = useRef(null);

  // useEffect(() => {
  //   const footer = footerRef.current;

  //   if (!footer) return;

  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       footer,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: footer,
  //           start: "top 60%",
  //           end: "top 46%",
  //           scrub: 2,
  //         },
  //       }
  //     );
  //   }, footer);

  //   return () => ctx.revert(); // Clean up on unmount
  // }, []);

  return (
    <div
      ref={footerRef}
      className="font-[Inter] pt-[60px] sm:pt-[80px] lg:pt-[100px] px-[20px] sm:px-[70px] lg:[85px] xl:px[100px]"
    >
      {/* Your existing footer JSX unchanged */}
      {/* Main CTA Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="uppercase text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-center font-[900] leading-tight text-white px-2">
          Book a<span style={gradientStyle}>&nbsp;Free&nbsp;</span>
          demo
          <span style={gradientStyle}>&nbsp;session</span>
        </h2>

        <p className="text-center text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[26px] text-white px-4 sm:px-2 lg:px-0 mb-8 sm:mb-10">
          Experience the power of our trading course in action. No commitment.
          Just value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-[60px] sm:mb-[80px] lg:mb-[100px] ">
          <a
            href="https://calendly.com/sachinrao-fundedarmy/30min?month=2025-08"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white backdrop-blur-[12.5px] whitespace-nowrap w-full sm:w-auto sm:min-w-[251px] h-[55px] px-[20px] bg-[#82e95f] text-[#01030e] uppercase font-[700] leading-[20px] text-[14px] sm:text-[16px] flex items-center justify-center text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_#82e95f] hover:bg-[#6cd94d] hover:-translate-y-[2px] active:scale-90"
            style={{ transform: "translateZ(0)" }}
          >
            Book free demo
          </a>

          <a
            href="https://wa.me/918283863866"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white backdrop-blur-[12.5px] w-full sm:w-auto sm:min-w-[251px] h-[55px] px-[20px] bg-[#82e95f] text-[#01030e] flex items-center gap-[8px] sm:gap-[10px] justify-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_#82e95f] hover:bg-[#6cd94d] hover:-translate-y-[2px] active:scale-90"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="sm:w-[22px] sm:h-[22px] flex-shrink-0"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 0C4.925 0 0 4.925 0 11c0 1.95.525 3.775 1.425 5.35L0 22l5.775-1.4C7.3 21.475 9.1 22 11 22c6.075 0 11-4.925 11-11S17.075 0 11 0zm5.5 15.4c-.25.7-1.25 1.3-2.05 1.475-.55.125-1.275.225-3.725-.8-2.625-1.1-4.325-3.775-4.45-3.95-.125-.175-1.025-1.375-1.025-2.625s.65-1.875.875-2.125c.225-.25.5-.3.675-.3s.35 0 .5.025c.15.025.375-.075.575.45.225.55.725 1.8.8 1.925.075.125.125.275.025.45-.1.175-.15.275-.275.425-.125.15-.275.325-.375.425-.125.1-.25.225-.1.45.15.225.675 1.125 1.45 1.825.975.9 1.8 1.175 2.05 1.3.25.125.4.1.55-.075.15-.175.625-.725.8-.975.175-.25.35-.2.575-.125.225.075 1.45.675 1.7.8.25.125.425.175.475.275.075.1.075.575-.175 1.275z"
                fill="#01030E"
              />
            </svg>
            <p className="font-[700] leading-[20px] text-[14px] sm:text-[16px] whitespace-nowrap">
              Connect on Whatsapp
            </p>
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t-2 sm:border-t-4 border-white/10 max-w-[1236px] mx-auto pt-8 sm:pt-10 lg:pt-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-0 sm:gap-8 lg:gap-10 mb-8 lg:mb-12">
          {/* Navigation and Disclaimer */}
          <div className="w-full lg:flex-1 text-center">
            <nav>
              <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-[65px] list-none cursor-pointer mb-2 sm:mb-6">
                <li className="text-white text-[10px] sm:text-[14px] font-[400] leading-[24px] sm:leading-[28px] cursor-pointer hover:text-[#82e95f] transition-colors duration-300">
                  Terms & Conditions
                </li>
                <li className="text-white text-[10px] sm:text-[14px] font-[400] leading-[24px] sm:leading-[28px] cursor-pointer hover:text-[#82e95f] transition-colors duration-300">
                  Privacy Policy
                </li>
                {/* <li className="text-white text-[10px] sm:text-[14px] font-[400] leading-[24px] sm:leading-[28px] cursor-pointer hover:text-[#82e95f] transition-colors duration-300">
                  Manage Membership
                </li> */}
              </ul>
            </nav>

            <p className="w-full lg:max-w-[376px] text-white/50 text-[14px] text-left py-2 sm:text-[16px] font-[400] leading-[18px] sm:leading-[28px]">
              Educational content only. Results depend on individual effort and
              application. We do not guarantee profits or financial performance
              in any market.
            </p>
          </div>

          {/* Support Section */}
          <div className="w-full lg:w-auto flex flex-col gap-0 sm:gap-2">
            <p className="uppercase text-white/50 text-[14px] sm:text-[15px] font-[400] leading-[24px] sm:leading-[28px]">
              support
            </p>
            <a
              href="mailto: sachinrao@fundedarmy.com"
              className="text-white/70 font-inter text-[11px] sm:text-[14px] font-normal leading-[24px] sm:leading-[28px] underline cursor-pointer hover:text-[#82e95f] transition-colors duration-300 break-all sm:break-normal"
            >
              sachinrao@fundedarmy.com
            </a>
            <a
              href="https://sachin4803.graphy.com/s/authenticate?url=/t/myprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase backdrop-blur-[12.5px] w-[64px] sm:w-[92px] 2xl:w-[128px] h-[28px] sm:h-[38px] 2xl:h-[46px] border-[1px] 
  pt-[4px] sm:pt-[8.5px] 2xl:pt-[14px] pb-[8.5px] px-0 text-[#01030e] text-center cursor-pointer border-white bg-[#82e95f] 
  font-bold text-[12px] sm:text-[16px] leading-[20px] 
  transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_#82e95f] hover:bg-[#6cd94d] hover:-translate-y-[2px] active:scale-90"
            >
              login
            </a>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="w-full max-w-[1236px] text-white text-[12px] sm:text-[13px] lg:text-[14px] leading-[20px] sm:leading-[24px] lg:leading-[28px] mx-auto">
            <div className="text-center sm:text-left">
              <p className="font-semibold mb-4 sm:mb-6 text-center lg:mb-8">
                <strong className="text-[#82e95f] text-[14px] text-center">
                  Disclaimer:
                </strong>
              </p>
              <div className="lg:px-8 pb-8">
                <div className="max-w-4xl mx-auto text-center xl:w-[1223px] xl:h-[291px] space-y-4 sm:space-y-6 text-[10px] sm:text-base leading-relaxed xl:leading-[28px] xl:font-[400] text-white">
                  <p>
                    Trading in financial markets, including forex, indices, and
                    derivatives, involves substantial risk and may not be
                    suitable for all investors. The strategies and educational
                    content provided by us are for informational and educational
                    purposes only and do not constitute financial or investment
                    advice. You may lose some or all of your capital, and past
                    performance does not guarantee future results. Individual
                    outcomes will vary. No guarantees of profit or success are
                    made.
                  </p>

                  <p className="pt-2">
                    We are not SEBI-registered advisors and do not provide any
                    investment recommendations or portfolio management services.
                    All examples, trade setups, or performance results shown are
                    purely hypothetical or for illustrative purposes, and may
                    not reflect actual trading results.
                  </p>

                  <p className="pt-2">
                    Participation in any of our programs or use of our tools is
                    at your own risk. Always consult with a certified financial
                    advisor before making any trading or investment decisions.
                  </p>

                  <p className="pt-2">
                    By accessing our website and services, you acknowledge and
                    agree to our Terms of Use, Privacy Policy, and Risk
                    Disclosure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
