// import React from "react";

// const MonumentCard = ({
//   title,
//   location,
//   rating,
//   reviews,
//   yearBuilt,
//   img1,
//   img2,
//   description,
// }) => {
//   return (
//     <div className="w-[418px] p-2 bg-white outline outline-gray-300 outline-offset-[-1px] flex flex-col gap-5">
//       <div className="flex gap-3">
//         <img className="w-[195px] h-[190px]" src={img1} alt={title} />
//         <img className="w-[193px] h-[190px]" src={img2} alt={title} />
//       </div>

//       <div className="h-7.5 px-2 bg-black bg-opacity-30 rounded-full flex items-center gap-1.5">
//         <div className="w-3.5 h-3 outline-white outline-[1.5px]" />
//         <div className="text-white text-sm font-normal">Add To Wishlist</div>
//       </div>

//       <div className="flex justify-between items-start">
//         <div className="flex flex-col gap-1.5">
//           <div className="text-black text-lg font-semibold">{title}</div>
//           <div className="flex items-center gap-2">
//             <div className="flex items-center gap-1">
//               <div className="text-gray-600 text-sm">{rating}</div>
//               <div className="w-4.5 h-4.5 bg-red-600 rounded-full relative">
//                 <div className="w-1.5 h-2 absolute left-1.5 top-1 bg-yellow-300 outline-yellow-400 outline-[0.8px]"></div>
//               </div>
//             </div>
//             <div className="text-gray-400 text-sm">({reviews} Reviews)</div>
//           </div>
//           <div className="text-gray-600 text-sm">{location}</div>
//         </div>

//         <div className="px-2 py-1 bg-gray-200 rounded flex flex-col items-center">
//           <div className="text-black text-xs">BUILT IN</div>
//           <div className="text-black text-lg font-bold tracking-wide">
//             {yearBuilt}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-5">
//         <div className="text-black text-base">{description}</div>
//         <div className="flex justify-center items-center gap-2">
//           <div className="text-black text-sm font-normal">Read More</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonumentCard;

import React from "react";

const MonumentCard = () => {
  return (
    <div className="w-full sm:w-full md:max-w-[418px] bg-white p-2 sm:p-4 flex flex-col gap-5 shadow-sm border border-gray-300 overflow-hidden">
      {/* Top Images */}
      <div className="flex flex-col sm:flex-row gap-1">
        <img
          src="https://placehold.co/195x190"
          alt="Taj Mahal"
          className="w-full sm:w-[195px] h-auto sm:h-[190px] object-cover flex-shrink-0"
        />
        <div className="relative w-full sm:w-[193px] h-[190px] flex-shrink-0">
          <img
            src="https://placehold.co/193x190"
            alt="Taj Mahal Detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          {/* Wishlist */}
          <div className="absolute top-2 left-2 flex items-center gap-1 px-3 py-1 bg-black/40 rounded-full text-white text-xs">
            <div className="w-3.5 h-3.5 border-[1.5px] border-white rounded-sm" />
            Add To Wishlist
          </div>
        </div>
      </div>

      {/* Title & Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-lg font-semibold">Taj Mahal</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-gray-700 text-sm">4.5</span>
              <div className="w-4 h-4 relative bg-red-600 rounded-full border-[0.5px] border-black">
                <div className="w-[6.38px] h-[8.93px] absolute top-[4.2px] left-[6.6px] bg-yellow-400 border-[0.8px] border-yellow-500 rounded-sm" />
              </div>
            </div>
            <span className="text-gray-500 text-sm">(30 Reviews)</span>
          </div>
          <span className="text-gray-700 text-sm">Agra, Uttar Pradesh</span>
        </div>

        {/* Built In */}
        <div className="flex flex-col justify-center items-center bg-gray-200 px-2 py-1 rounded text-center mt-2 sm:mt-0">
          <span className="text-black text-[10px]">BUILT IN</span>
          <span className="text-black text-lg font-bold tracking-[1.8px]">
            1650
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-black text-sm">
        One of the finest monuments of its time, Taj Mahal built with white
        marble on the banks of river Yamuna, is known for its craftsmanship...
      </p>

      {/* Read More */}
      <div className="flex justify-center">
        <button className="text-black text-sm font-medium underline hover:opacity-80">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default MonumentCard;
