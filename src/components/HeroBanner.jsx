// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import slide1 from "../assets/home-hero-banner.png";

// const HeroBanner = () => {
//   const slides = [
//     {
//       id: 1,
//       image: slide1,
//       text: "Explore the endless possibilities of the world, All within your budget.",
//     },
//     // you can add more slides here
//   ];

//   const [current, setCurrent] = useState(0);

//   const nextSlide = () =>
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   const prevSlide = () =>
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

//   return (
//     <section className="relative h-[480px] w-full overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="h-full w-full bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 100%),
//                             linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 100%),
//                             url(${slides[current].image})`,
//         }}
//       />

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 w-10 h-10 rounded-full flex items-center justify-center transition"
//       >
//         <ChevronLeft className="text-white w-5 h-5" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 w-10 h-10 rounded-full flex items-center justify-center transition"
//       >
//         <ChevronRight className="text-white w-5 h-5" />
//       </button>

//       {/* Slide Text */}
//       <div className="absolute left-20 bottom-30 max-w-[820px]">
//         <h1 className="text-white text-[32px] font-semibold leading-snug">
//           Explore the endless possibilities of the world, <br />
//           All within your budget.
//         </h1>
//       </div>

//       {/* Lucky Draw Button */}
//       <div className="absolute left-6 bottom-15">
//         <button className="flex items-center justify-center bg-black rounded-full border border-white w-[50px] h-[50px] flex-col text-[8.75px] font-semibold text-white font-serif leading-none">
//           <span>LUCKY</span>
//           <span>DRAW!</span>
//         </button>
//       </div>

//       {/* Slide Dots */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
//         {[...Array(7)].map((_, i) => (
//           <div
//             key={i}
//             className={`w-[30px] h-[6px] rounded-full transition ${
//               i === current ? "bg-white" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../assets/home-hero-banner.png";

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      text: "Explore the endless possibilities of the world, All within your budget.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[480px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 100%), 
                            linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 100%), 
                            url(${slides[current].image})`,
        }}
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition"
      >
        <ChevronLeft className="text-white w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition"
      >
        <ChevronRight className="text-white w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Slide Text */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-20 bottom-16 sm:bottom-24 lg:bottom-30 max-w-[90%] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[820px]">
        <h1 className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-snug">
          Explore the endless possibilities of the world,{" "}
          <br className="hidden sm:block" />
          All within your budget.
        </h1>
      </div>

      {/* Lucky Draw Button */}
      <div className="absolute left-4 sm:left-6 bottom-6 sm:bottom-10 md:bottom-15">
        <button className="flex items-center justify-center bg-black rounded-full border border-white w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] flex-col text-[7px] sm:text-[8px] md:text-[8.75px] font-semibold text-white font-serif leading-none">
          <span>LUCKY</span>
          <span>DRAW!</span>
        </button>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-[20px] sm:w-[25px] md:w-[30px] h-[4px] sm:h-[5px] md:h-[6px] rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
