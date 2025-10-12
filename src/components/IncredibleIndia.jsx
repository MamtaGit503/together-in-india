// import React, { useState } from "react";

// const regions = [
//   "Uttar Pradesh",
//   "Tamil Nadu",
//   "Rajasthan",
//   "Madhya Pradesh",
//   "Karnataka",
// ];

// const destinations = [
//   { name: "New Delhi", img: "https://placehold.co/220x303" },
//   { name: "Varanasi", img: "https://placehold.co/220x303" },
//   { name: "Pratapgarh", img: "https://placehold.co/220x303" },
//   { name: "Jodhpur", img: "https://placehold.co/220x303", tours: 10 },
//   { name: "Kottayam", img: "https://placehold.co/220x303", tours: 15 },
//   { name: "Jaisalmer", img: "https://placehold.co/220x303", tours: 15 },
//   { name: "Shikhawati", img: "https://placehold.co/220x303", tours: 14 },
//   { name: "Jaisalmer", img: "https://placehold.co/220x303", tours: 15 },
// ];

// export default function IncredibleIndia() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCards = 5;

//   const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   const nextSlide = () =>
//     setCurrentIndex((prev) =>
//       Math.min(prev + 1, destinations.length - visibleCards)
//     );

//   return (
//     <div className="flex flex-col gap-5 px-8">
//       {/* Title & Description */}
//       <div className="flex flex-col gap-2">
//         <h2 className="text-black text-3xl font-bold">Incredible India</h2>
//         <p className="text-gray-700 text-xl">
//           Don’t visit to explore, a centuries-old civilization — here every
//           journey is a lifetime journey.
//         </p>
//       </div>

//       <div className="flex gap-5 relative">
//         {/* Left Region List */}
//         <div className="w-[220px] flex flex-col gap-2 pb-12 mt-2">
//           {regions.map((region, idx) => (
//             <div key={idx} className="flex flex-col items-center">
//               <span
//                 className={`text-black text-lg ${
//                   idx === 0 ? "font-bold" : "font-normal"
//                 }`}
//               >
//                 {region}
//               </span>
//               {idx < regions.length - 1 && (
//                 <div className="w-full h-px bg-gray-300" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right Destination Cards (using GRID) */}
//         <div className="w-[1140px] relative">
//           {/* Navigation Buttons */}
//           <div className="absolute right-0 top-0 flex gap-2 z-10 -translate-y-[100%]">
//             <button
//               onClick={prevSlide}
//               className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600"
//             >
//               &lt;
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600"
//             >
//               &gt;
//             </button>
//           </div>

//           {/* Grid layout for destinations */}
//           <div className="grid grid-cols-5 gap-4 mt-2">
//             {destinations
//               .slice(currentIndex, currentIndex + visibleCards)
//               .map((dest, idx) => (
//                 <div
//                   key={idx}
//                   className={`relative w-[200px] h-[270px] overflow-hidden ${
//                     idx % 2 !== 0 ? "mt-8" : ""
//                   }`}
//                 >
//                   {/* Image background */}
//                   <div
//                     className="w-full h-[303px] bg-cover bg-center"
//                     style={{ backgroundImage: `url(${dest.img})` }}
//                   ></div>

//                   {/* Destination Info */}
//                   <div className="absolute left-2 bottom-3 flex flex-col gap-1">
//                     <p className="text-white text-base font-bold">
//                       {dest.name}
//                     </p>
//                     {dest.tours && (
//                       <p className="text-white text-sm">{dest.tours} Tours</p>
//                     )}
//                   </div>

//                   {/* Wishlist Button */}
//                   <button className="absolute top-3 right-3 bg-black/40 rounded-full p-2 opacity-0 hover:opacity-100 transition">
//                     <span className="text-white text-sm">♡</span>
//                   </button>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// const regions = [
//   "Uttar Pradesh",
//   "Tamil Nadu",
//   "Rajasthan",
//   "Madhya Pradesh",
//   "Karnataka",
// ];

// const destinations = [
//   { name: "New Delhi", img: "https://placehold.co/220x303" },
//   { name: "Varanasi", img: "https://placehold.co/220x303" },
//   { name: "Pratapgarh", img: "https://placehold.co/220x303" },
//   { name: "Jodhpur", img: "https://placehold.co/220x303", tours: 10 },
//   { name: "Kottayam", img: "https://placehold.co/220x303", tours: 15 },
//   { name: "Jaisalmer", img: "https://placehold.co/220x303", tours: 15 },
//   { name: "Shikhawati", img: "https://placehold.co/220x303", tours: 14 },
//   { name: "Jaisalmer", img: "https://placehold.co/220x303", tours: 15 },
// ];

// export default function IncredibleIndia() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCards = 5;

//   const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   const nextSlide = () =>
//     setCurrentIndex((prev) =>
//       Math.min(prev + 1, destinations.length - visibleCards)
//     );

//   return (
//     <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 py-8">
//       {/* Title & Description */}
//       <div className="flex flex-col gap-2 text-center md:text-left">
//         <h2 className="text-black text-2xl sm:text-3xl font-bold">
//           Incredible India
//         </h2>
//         <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-[900px] mx-auto md:mx-0">
//           Don’t visit to explore, a centuries-old civilization — here every
//           journey is a lifetime journey.
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-6 relative">
//         {/* Left Region List */}
//         <div className="flex justify-center lg:justify-start">
//           <div className="w-full sm:w-[280px] lg:w-[220px] flex flex-col gap-2 pb-8 lg:pb-12 mt-2 text-center lg:text-left">
//             {regions.map((region, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center lg:items-start"
//               >
//                 <span
//                   className={`text-black text-base sm:text-lg ${
//                     idx === 0 ? "font-bold" : "font-normal"
//                   }`}
//                 >
//                   {region}
//                 </span>
//                 {idx < regions.length - 1 && (
//                   <div className="w-3/4 lg:w-full h-px bg-gray-300" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Destination Cards */}
//         <div className="w-full lg:w-[1140px] relative">
//           {/* Navigation Buttons */}
//           <div className="absolute right-0 top-0 flex gap-2 z-10 -translate-y-[120%] md:-translate-y-[110%]">
//             <button
//               onClick={prevSlide}
//               className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 text-base sm:text-lg"
//             >
//               &lt;
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 text-base sm:text-lg"
//             >
//               &gt;
//             </button>
//           </div>

//           {/* Destination Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2 place-items-center">
//             {destinations
//               .slice(currentIndex, currentIndex + visibleCards)
//               .map((dest, idx) => (
//                 <div
//                   key={idx}
//                   className={`relative w-[150px] sm:w-[180px] md:w-[200px] h-[240px] sm:h-[260px] md:h-[270px] overflow-hidden ${
//                     idx % 2 !== 0 ? "mt-4 sm:mt-6 md:mt-8" : ""
//                   }`}
//                 >
//                   {/* Image */}
//                   <div
//                     className="w-full h-full bg-cover bg-center rounded-md"
//                     style={{ backgroundImage: `url(${dest.img})` }}
//                   ></div>

//                   {/* Destination Info */}
//                   <div className="absolute left-2 bottom-3 flex flex-col gap-1">
//                     <p className="text-white text-sm sm:text-base font-bold">
//                       {dest.name}
//                     </p>
//                     {dest.tours && (
//                       <p className="text-white text-xs sm:text-sm">
//                         {dest.tours} Tours
//                       </p>
//                     )}
//                   </div>

//                   {/* Wishlist Button */}
//                   <button className="absolute top-3 right-3 bg-black/40 rounded-full p-1.5 sm:p-2 opacity-0 hover:opacity-100 transition">
//                     <span className="text-white text-xs sm:text-sm">♡</span>
//                   </button>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

// ✅ Import local images from src/assets/images/Incredible
import newDelhiImg from "../assets/images/Incredible/new-delhi.png";
import varanasiImg from "../assets/images/Incredible/varanasi.png";
import pratapgarhImg from "../assets/images/Incredible/pratapgarh.png";
import Jodhpur from "../assets/images/Incredible/image-6.png";
import Kottayam from "../assets/images/Incredible/image-7.png";

const regions = [
  "Uttar Pradesh",
  "Tamil Nadu",
  "Rajasthan",
  "Madhya Pradesh",
  "Karnataka",
];

const destinations = [
  { name: "New Delhi", img: newDelhiImg },
  { name: "Jodhpur", img: Jodhpur },
  { name: "Kottayam", img: Kottayam },
  { name: "Varanasi", img: varanasiImg },
  { name: "Pratapgarh", img: pratapgarhImg },
];

export default function IncredibleIndia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () =>
    setCurrentIndex((prev) =>
      Math.min(prev + 1, destinations.length - visibleCards)
    );

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 py-8">
      {/* Title & Description */}
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h2 className="text-black text-2xl sm:text-3xl font-bold">
          Incredible India
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-[900px] mx-auto md:mx-0">
          Don’t visit to explore, a centuries-old civilization — here every
          journey is a lifetime journey.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Left Region List */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full sm:w-[280px] lg:w-[220px] flex flex-col gap-2 pb-8 lg:pb-12 mt-2 text-center lg:text-left">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start"
              >
                <span
                  className={`text-black text-base sm:text-lg ${
                    idx === 0 ? "font-bold" : "font-normal"
                  }`}
                >
                  {region}
                </span>
                {idx < regions.length - 1 && (
                  <div className="w-3/4 lg:w-full h-px bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Destination Cards */}
        <div className="w-full lg:w-[1140px] relative">
          {/* Navigation Buttons */}
          <div className="absolute right-0 top-0 flex gap-2 z-10 -translate-y-[120%] md:-translate-y-[110%]">
            <button
              onClick={prevSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 text-base sm:text-lg"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 text-base sm:text-lg"
            >
              &gt;
            </button>
          </div>

          {/* Destination Grid */}
          <div
            className="grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  xl:grid-cols-5 
  gap-x-4 gap-y-6 
  mt-2 
  place-items-center 
  px-2 sm:px-4 md:px-6 lg:px-0"
          >
            {destinations
              .slice(currentIndex, currentIndex + visibleCards)
              .map((dest, idx) => (
                <div
                  key={idx}
                  className={`
          relative 
          w-full 
          sm:max-w-[180px] 
          md:max-w-[200px] 
          h-[240px] sm:h-[260px] md:h-[270px] 
          overflow-hidden 
          ${idx % 2 !== 0 ? "mt-4 sm:mt-6 md:mt-8" : ""}
        `}
                >
                  {/* Image */}
                  <div
                    className="w-full h-full bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${dest.img})` }}
                  ></div>

                  {/* Destination Info */}
                  <div className="absolute left-2 bottom-3 flex flex-col gap-1">
                    {/* <p className="text-white text-sm sm:text-base font-bold">
                      {dest.name}
                    </p> */}
                    {dest.tours && (
                      <p className="text-white text-xs sm:text-sm">
                        {dest.tours} Tours
                      </p>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 bg-black/40 rounded-full p-1.5 sm:p-2 opacity-0 hover:opacity-100 transition">
                    <span className="text-white text-xs sm:text-sm">♡</span>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
