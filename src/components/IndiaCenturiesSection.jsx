// import React from "react";
// import MonumentCard from "./MonumentCard";

// const monuments = [
//   {
//     title: "Taj Mahal",
//     location: "Agra, Uttar Pradesh",
//     rating: "4.5",
//     reviews: 30,
//     yearBuilt: 1650,
//     img1: "https://placehold.co/195x190",
//     img2: "https://placehold.co/193x190",
//     description:
//       "One of the finest monuments, of its time, Taj Mahal built with white marble on the banks of river Yamuna, is known for its craftsmanship....",
//   },
//   {
//     title: "Meenakshi Temple",
//     location: "Madurai, Tamil Nadu",
//     rating: "4.5",
//     reviews: 30,
//     yearBuilt: 1550,
//     img1: "https://placehold.co/195x190",
//     img2: "https://placehold.co/193x190",
//     description:
//       "One of the finest monuments, of its time, Meenakshi Temple is known for its craftsmanship....",
//   },
//   {
//     title: "Meenakshi Temple",
//     location: "Madurai, Tamil Nadu",
//     rating: "4.5",
//     reviews: 30,
//     yearBuilt: 1550,
//     img1: "https://placehold.co/195x190",
//     img2: "https://placehold.co/193x190",
//     description:
//       "One of the finest monuments, of its time, Meenakshi Temple is known for its craftsmanship....",
//   },
//   {
//     title: "Meenakshi Temple",
//     location: "Madurai, Tamil Nadu",
//     rating: "4.5",
//     reviews: 30,
//     yearBuilt: 1550,
//     img1: "https://placehold.co/195x190",
//     img2: "https://placehold.co/193x190",
//     description:
//       "One of the finest monuments, of its time, Meenakshi Temple is known for its craftsmanship....",
//   },
//   // Add more monuments as needed
// ];

// const IndiaCenturiesSection = () => {
//   return (
//     <div className="flex flex-col px-8 gap-8">
//       <div className="flex flex-col gap-3">
//         <div className="text-black text-2xl font-bold">
//           India Across the Centuries
//         </div>
//         <div className="w-[1200px] text-gray-600 text-lg">
//           Step into history by visiting the iconic monuments of the world’s one
//           of the oldest civilization.
//         </div>
//       </div>

//       <div className="flex flex-col items-end gap-5">
//         <div className="flex gap-2">
//           {/* Arrows */}
//           <div className="w-10 h-10 rounded-full outline outline-red-600 outline-offset-[-1px] flex justify-center items-center">
//             <div className="w-2 h-3.5 bg-red-600"></div>
//           </div>
//           <div className="w-10 h-10 rounded-full outline outline-red-600 outline-offset-[-1px] flex justify-center items-center rotate-180">
//             <div className="w-2 h-3.5 bg-red-600"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {monuments.map((monument, index) => (
//             <MonumentCard key={index} {...monument} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import MonumentCard from "./MonumentCard";

const monuments = [
  {
    title: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    rating: "4.5",
    reviews: 30,
    yearBuilt: 1650,
    img1: "https://placehold.co/195x190",
    img2: "https://placehold.co/193x190",
    description:
      "One of the finest monuments, of its time, Taj Mahal built with white marble on the banks of river Yamuna, is known for its craftsmanship....",
  },
  {
    title: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    rating: "4.5",
    reviews: 30,
    yearBuilt: 1550,
    img1: "https://placehold.co/195x190",
    img2: "https://placehold.co/193x190",
    description:
      "One of the finest monuments, of its time, Meenakshi Temple is known for its craftsmanship....",
  },
  // Add more monuments as needed
];

const IndiaCenturiesSection = () => {
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-8 gap-8 max-w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="text-black text-2xl sm:text-3xl font-bold">
          India Across the Centuries
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-full md:max-w-[900px]">
          Step into history by visiting the iconic monuments of the world’s one
          of the oldest civilization.
        </p>
      </div>

      {/* Carousel & Arrows */}
      <div className="flex flex-col items-end gap-5">
        <div className="flex gap-2 self-end">
          {/* Left Arrow */}
          <div className="w-10 h-10 rounded-full outline outline-red-600 outline-offset-[-1px] flex justify-center items-center">
            <div className="w-2 h-3.5 bg-red-600"></div>
          </div>
          {/* Right Arrow */}
          <div className="w-10 h-10 rounded-full outline outline-red-600 outline-offset-[-1px] flex justify-center items-center rotate-180">
            <div className="w-2 h-3.5 bg-red-600"></div>
          </div>
        </div>

        {/* Grid of Monuments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {monuments.map((monument, index) => (
            <div key={index} className="w-full flex justify-center">
              <MonumentCard {...monument} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaCenturiesSection;
