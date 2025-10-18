import React from "react";

const IntroducingSection = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-24 py-16 px-4">
      {/* Top Row */}
      <div className="w-full max-w-[1380px] flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Content */}
        <div className="flex flex-col gap-3 max-w-[828px]">
          <h4 className="text-[#DC3545] text-[20px] font-bold uppercase">
            Introducing
          </h4>

          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
              India’s first platform connecting travellers directly with trusted
              travel partners.
            </h2>

            <p className="text-[18px] leading-6 text-black">
              At Together In India, we understand what it takes to thrive in the
              tourism industry because our founders, Rajeev and Jyoti, have
              lived it. With over 30 years of combined experience in travel and
              tourism, they’ve seen both the business's highs and challenges.
              They’ve journeyed across India, city by city, gaining first-hand
              insights before sharing their knowledge with others. Drawing from
              this deep experience, they built Together In India with powerful,
              innovative features designed to meet the real needs of today’s
              travel businesses. We know what travelers are looking for—and more
              importantly, how to connect them with you, helping you overcome
              your marketing and operational challenges with confidence.
            </p>

            <button className="bg-[#DC3545] text-white text-sm font-bold uppercase px-5 py-3 rounded-md w-fit hover:bg-[#b42a38] transition-all">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Image Box */}
        <div className="relative w-[486px] h-[486px] bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="absolute left-[153px] top-[54px]">
            <img
              src="https://placehold.co/180x344"
              alt="Introducing"
              className="rounded-lg"
            />
            <div className="absolute left-[70px] top-[153px] w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center">
              <div className="w-10 h-10 bg-[#DC3545] rounded-full" />
            </div>
          </div>
          <p className="absolute bottom-6 left-[123px] text-[#DC3545] text-[16px] font-['Indie_Flower']">
            Reach the world of travellers with us.
          </p>
        </div>
      </div>

      {/* Middle Text */}
      <p className="max-w-[909px] text-center text-[#232121] text-[40px] font-light leading-[52px]">
        Trusted travel insights from +500 cities
        <br />
        powered by strong partnerships.
      </p>

      {/* Logos/Icons Row */}
      <div className="flex flex-wrap justify-center items-center gap-9">
        {/* Vector placeholders */}
        <div className="w-[27px] h-[32px] bg-[#202120]" />
        <div className="w-[13px] h-[12px] bg-[#202120]" />
        <div className="w-[11px] h-[12px] bg-[#202120]" />
        <div className="w-[10px] h-[12px] bg-[#202120]" />
        <div className="w-[12px] h-[12px] bg-[#202120]" />
        <div className="w-[14px] h-[12px] bg-[#202120]" />
        <div className="w-[20px] h-[12px] bg-[#202120]" />
        <div className="w-[13px] h-[12px] bg-[#202120]" />
        <div className="w-[12px] h-[12px] bg-[#202120]" />
        <div className="w-[9px] h-[12px] bg-[#202120]" />
        <div className="w-[13px] h-[12px] bg-[#202120]" />
        <div className="w-[25px] h-[13px] bg-[#A5A5A5]" />

        {/* Brand placeholders */}
        <img
          src="https://placehold.co/115x52"
          alt="brand"
          className="h-[52px]"
        />
        <img
          src="https://placehold.co/104x68"
          alt="brand"
          className="h-[68px]"
        />
        <img
          src="https://placehold.co/162x49"
          alt="brand"
          className="h-[49px]"
        />
        <img
          src="https://placehold.co/71x70"
          alt="brand"
          className="h-[70px]"
        />
        <img
          src="https://placehold.co/77x40"
          alt="brand"
          className="h-[40px]"
        />
        <img
          src="https://placehold.co/101x51"
          alt="brand"
          className="h-[51px]"
        />
        <img
          src="https://placehold.co/95x60"
          alt="brand"
          className="h-[60px]"
        />
      </div>
    </section>
  );
};

export default IntroducingSection;
