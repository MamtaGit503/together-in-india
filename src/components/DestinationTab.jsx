// import React, { useState } from "react";

// export default function DestinationTab() {
//   const [activeTab, setActiveTab] = useState("Destinations");

//   const tabs = [
//     "Destinations",
//     "Hotels",
//     "Things to Do",
//     "Eat & Drink",
//     "Shop",
//     "Tribes of India",
//     "Kids Special",
//   ];

//   return (
//     <div className="relative bg-[#2E2E2E] h-[655px] w-full">
//       {/* Top Tabs */}
//       <div className="absolute -top-10 left-8 flex">
//         {tabs.map((label, i) => {
//           const isActive = activeTab === label;
//           return (
//             <div
//               key={i}
//               onClick={() => setActiveTab(label)}
//               className={`w-38 h-16 px-6 flex items-center justify-center border-r border-[#838383] cursor-pointer transition-all duration-200
//                 ${
//                   isActive
//                     ? "bg-[#2E2E2E] text-white"
//                     : "bg-white text-black hover:text-[#DC3545]"
//                 }
//               `}
//             >
//               <span className="font-roboto font-semibold text-[16px]">
//                 {label}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Subtitle */}
//       <div className="absolute left-8 top-[41px] flex items-end gap-2">
//         <p className="text-white italic text-[16px] font-medium font-roboto">
//           We offer +400 charming destinations to discover....
//         </p>
//         <span className="text-[#DC3545] text-[14px] font-bold">View All</span>
//       </div>

//       {/* Search Section */}
//       <div className="absolute left-8 top-[70px] flex items-center gap-2">
//         <div className="w-[849px] border border-[#DDDDDD] overflow-hidden flex flex-col">
//           <div className="relative h-[60px] bg-white flex items-center pl-5">
//             <div className="flex items-center gap-2">
//               <span className="text-[#DC3545] text-[12px] font-bold uppercase tracking-[0.48px]">
//                 Where do you want to travel?
//               </span>
//               <div className="w-[11.6px] h-[5.4px] bg-[#DC3545]" />
//             </div>
//           </div>
//         </div>
//         <button className="w-[205px] h-[60px] bg-[#DC3545] text-white font-roboto font-bold text-[20px] uppercase">
//           Search
//         </button>
//       </div>

//       {/* Main Description */}
//       <div className="absolute left-8 top-[150px] w-[600px]">
//         <p className="text-[#EBEBEB] text-[32px] font-roboto font-bold uppercase tracking-[1.6px] leading-snug">
//           There are Destinations, Deals on HOTELS, holidays, Restaurants,
//           Airlines, Shopping & Entertainment -{" "}
//           <span className="text-[#DC3545]">
//             Directly from our Trusted Travel Partners for members only.
//           </span>
//         </p>
//       </div>

//       {/* Info Cards */}
//       <div className="absolute left-[710px] top-[150px] grid grid-cols-2 gap-4 w-[610px]">
//         {[
//           {
//             title: "Travel as an Insider",
//             text: "Travelers trust us because we're locals with deep knowledge of the region's history. Our insights feature detailed attraction guides enriched with visual content, deep historical & cultural context, and practical tips to help you travel confidently & create unforgettable memories.",
//           },
//           {
//             title: "It's so Easy",
//             text: "Booking your multi-activity holiday is easy and completely transparent. Our team, along with trusted travel partners, will help you customize your package at no extra cost, ensuring you get the most out of your holiday.",
//           },
//           {
//             title: "Discover Hidden Gems",
//             text: "Make your trip unforgettable by discovering the city’s most authentic restaurants, local shopping gems & entertainment spots. Explore the city like a local.",
//           },
//           {
//             title: "Members - More Fun, All budgets",
//             text: "Planning an unforgettable holiday without breaking the bank? Get unbeatable early bird & last minute deals - delivered straight to your inbox. It's the perfect recipe for a budget-friendly getaway.",
//           },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-[#1D1D1D] p-5 flex flex-col gap-3 text-[#EBEBEB]"
//           >
//             <div className="flex items-center gap-2">
//               <div className="w-[10px] h-[13px] border-2 border-[#DC3545]" />
//               <h3 className="text-[16px] font-bold">{item.title}</h3>
//             </div>
//             <p className="text-[14px] font-roboto font-normal">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function DestinationTab() {
  const [activeTab, setActiveTab] = useState("Destinations");

  const tabs = [
    "Destinations",
    "Hotels",
    "Things to Do",
    "Eat & Drink",
    "Shop",
    "Tribes of India",
    "Kids Special",
  ];

  return (
    <div className="relative bg-[#2E2E2E] h-auto lg:h-[675px] w-full px-4 sm:px-6 md:px-8 py-12 md:py-0">
      {/* Top Tabs */}
      <div className="relative lg:absolute lg:-top-10 left-0 lg:left-8 flex flex-wrap lg:flex-nowrap justify-center lg:justify-start">
        {tabs.map((label, i) => {
          const isActive = activeTab === label;
          return (
            <div
              key={i}
              onClick={() => setActiveTab(label)}
              className={`px-4 sm:px-5 md:px-6 h-12 sm:h-14 md:h-16 flex items-center justify-center border-r border-[#838383] cursor-pointer transition-all duration-200 text-center
                ${
                  isActive
                    ? "bg-[#2E2E2E] text-white"
                    : "bg-white text-black hover:text-[#DC3545]"
                }`}
            >
              <span className="font-roboto font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Subtitle */}
      <div className="mt-8 lg:mt-0 lg:absolute left-0 lg:left-8 top-[41px] flex flex-wrap gap-2 justify-center lg:justify-start text-center lg:text-left">
        <p className="text-white italic text-[14px] sm:text-[15px] md:text-[16px] font-medium font-roboto">
          We offer +400 charming destinations to discover....
        </p>
        <span className="text-[#DC3545] text-[13px] sm:text-[14px] font-bold cursor-pointer">
          View All
        </span>
      </div>

      {/* Search Section */}
      <div className="mt-6 lg:mt-0 lg:absolute left-0 lg:left-8 top-[70px] flex flex-col sm:flex-row items-center gap-3 sm:gap-2 justify-center lg:justify-start">
        <div className="w-full sm:w-[600px] md:w-[849px] border border-[#DDDDDD] overflow-hidden flex flex-col">
          <div className="relative h-[50px] sm:h-[55px] md:h-[60px] bg-white flex items-center pl-4 sm:pl-5">
            <div className="flex items-center gap-2">
              <span className="text-[#DC3545] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.48px]">
                Where do you want to travel?
              </span>
              <div className="w-[10px] sm:w-[11.6px] h-[5px] sm:h-[5.4px] bg-[#DC3545]" />
            </div>
          </div>
        </div>
        <button className="w-full sm:w-[160px] md:w-[205px] h-[50px] sm:h-[55px] md:h-[60px] bg-[#DC3545] text-white font-roboto font-bold text-[16px] sm:text-[18px] md:text-[20px] uppercase">
          Search
        </button>
      </div>

      {/* Main Description */}
      <div className="mt-8 lg:mt-0 lg:absolute left-0 lg:left-8 top-[150px] w-full sm:w-[90%] md:w-[600px] text-center lg:text-left">
        <p className="text-[#EBEBEB] text-[20px] sm:text-[26px] md:text-[32px] font-roboto font-bold uppercase tracking-[1px] sm:tracking-[1.3px] md:tracking-[1.6px] leading-snug">
          There are Destinations, Deals on HOTELS, holidays, Restaurants,
          Airlines, Shopping & Entertainment -{" "}
          <span className="text-[#DC3545] block sm:inline">
            Directly from our Trusted Travel Partners for members only.
          </span>
        </p>
      </div>

      {/* Info Cards */}
      <div className="mt-8 lg:mt-0 lg:absolute left-0 lg:left-[710px] top-[150px] grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-[90%] md:w-[610px] mx-auto lg:mx-0">
        {[
          {
            title: "Travel as an Insider",
            text: "Travelers trust us because we're locals with deep knowledge of the region's history. Our insights feature detailed attraction guides enriched with visual content, deep historical & cultural context, and practical tips to help you travel confidently & create unforgettable memories.",
          },
          {
            title: "It's so Easy",
            text: "Booking your multi-activity holiday is easy and completely transparent. Our team, along with trusted travel partners, will help you customize your package at no extra cost, ensuring you get the most out of your holiday.",
          },
          {
            title: "Discover Hidden Gems",
            text: "Make your trip unforgettable by discovering the city’s most authentic restaurants, local shopping gems & entertainment spots. Explore the city like a local.",
          },
          {
            title: "Members - More Fun, All budgets",
            text: "Planning an unforgettable holiday without breaking the bank? Get unbeatable early bird & last minute deals - delivered straight to your inbox. It's the perfect recipe for a budget-friendly getaway.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1D1D1D] p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 text-[#EBEBEB] rounded-md"
          >
            <div className="flex items-center gap-2">
              <div className="w-[8px] sm:w-[10px] h-[11px] sm:h-[13px] border-2 border-[#DC3545]" />
              <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold">
                {item.title}
              </h3>
            </div>
            <p className="text-[13px] sm:text-[14px] font-roboto font-normal leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
