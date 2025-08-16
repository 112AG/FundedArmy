import React, { useState } from "react";

const faqData = [
  { question: "Do I need experience?", answer: "No. Sachin teaches you everything step by step — from setting up accounts to risk control and live trading rules." },
  { question: "Will I get direct time with Sachin Rao?", answer: "Yes — you’ll have direct 1:1 calls, trade reviews, and real feedback from Sachin personally." },
  { question: "Is there a swing trading course too?", answer: "Yes! It’s included as a separate track to help you grow capital with bigger moves while your prop trading covers daily income." },
  {
    question: "How fast can I get funded?",
    answer:
      "Many students pass their first prop firm challenge within 1–3 months when they follow Sachin’s system and risk rules seriously.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-[20px] sm:px-[70px] lg:[85px] xl:px[100px]">
      <h2 className="uppercase text-[28px] sm:text-[36px] md:text-[44px] xl:text-[48px] text-center font-[900] leading-[36px] sm:leading-[42px] xl:leading-[48px] text-white mb-12">
        frequently
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          &nbsp;asked questions
        </span>
      </h2>

      <div className="flex flex-col items-center justify-center gap-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`w-full max-w-[1009px] rounded-[6px] border-b border-white/10 cursor-pointer transition-all duration-300
            ${openIndex === index ? "bg-[#2C313A]" : "bg-[#131B23]"}`}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 pt-5 pb-5">
              <h3 className="text-white font-medium text-sm sm:text-base pr-4">
                {item.question}
              </h3>
              <div 
                className={`text-white text-xl transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '8px solid white',
                  transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)'
                }}
              >
              </div>
              {/* Alternative: Use Unicode arrows */}
              {/* <span className="text-white text-xl">
                {openIndex !== index ? '▼' : '▲'}
              </span> */}
            </div>

            {openIndex === index && item.answer && (
              <div className="px-4 sm:px-6 pb-5">
                <p className="text-sm text-gray-300 mt-2">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;