// import React from "react";

// const deals = [
//   {
//     id: 1,
//     image: "https://placehold.co/447x240",
//     category: "Hotel",
//     tag: "Date Wise",
//     title:
//       "Stay at a 4 Star Hotel for two on full board basis (breakfast, lunch, dinner) & one complimentary transfer",
//     originalPrice: 7000,
//     discount: "30% off",
//     price: 53000,
//     per: "Per Night",
//     validity: "Travel from 1st - 31st March, 2025",
//     vendor: "Akbar Travels, New Delhi",
//   },
//   {
//     id: 2,
//     image: "https://placehold.co/447x240",
//     category: "Hotel",
//     tag: "Date Wise",
//     title: "Dinner for family, 50% discount on order of worth ₹5,000 & above",
//     originalPrice: 5000,
//     discount: "50% off",
//     price: 2500,
//     per: "Per Person",
//     validity: "Offer Ends on 20th April - 10th May, 2025",
//     vendor: "Crazy Burgers Restaurant, New Delhi",
//   },
//   {
//     id: 3,
//     image: "https://placehold.co/447x240",
//     category: "Airline",
//     tag: "",
//     title: "Virgin Atlantic Flight Offer",
//     originalPrice: null,
//     discount: null,
//     price: 80500,
//     per: "Person",
//     validity: "Valid from 1st - 31st March, 2025",
//     vendor: "Virgin Atlantic",
//   },
//   {
//     id: 4,
//     image: "https://placehold.co/447x240",
//     category: "Ticketing Agent",
//     tag: "",
//     title: "Fly - Air India: Delhi-London-Delhi",
//     originalPrice: null,
//     discount: null,
//     price: 80500,
//     per: "Person",
//     validity: "Offer Ends on 20th April - 10th May, 2025",
//     vendor: "Riya Travel, Delhi",
//   },
//   // add other deals similarly...
// ];

// const DealsGrid = () => {
//   return (
//     <div className="w-full px-8  p-5">
//       <div className="flex justify-between">
//         <div>
//           <h2 className="text-xl font-bold mb-5">
//             Together 23, Monthly Travel & Entertainment Deals
//           </h2>
//           <p className="mb-5 text-gray-600">
//             Your monthly bundle of big value - August Edition
//           </p>
//         </div>
//         <div className="relative w-[116px] h-[100px] shadow-md">
//           {/* Background & Border */}
//           <div className="absolute w-full h-full bg-white border border-[#DC3545]" />

//           {/* Text content */}
//           <div className="absolute left-1 top-3 flex flex-col items-end gap-1">
//             {/* TOGETHER */}
//             <div className="text-[#DC3545] text-[20px] font-bold font-roboto tracking-[0.4px]">
//               TOGETHER
//             </div>

//             {/* Number + small label */}
//             <div className="flex items-end gap-1">
//               <div className="text-[#DC3545] text-[48px] font-normal font-daysone leading-[48px]">
//                 23
//               </div>
//               <div className="flex flex-col justify-start items-start">
//                 <div className="text-[#DC3545] text-[12px] font-normal font-roboto">
//                   Travel
//                 </div>
//                 <div className="text-[#DC3545] text-[12px] font-normal font-roboto">
//                   Deals
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {deals.map((deal) => (
//           <div
//             key={deal.id}
//             className="relative bg-white shadow-lg rounded-lg overflow-hidden"
//           >
//             <div className="relative">
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
//                 <div className="w-3 h-3 border-white border-[1.5px] rounded-sm" />
//                 Add To Wishlist
//               </div>
//             </div>

//             <div className="p-4 flex flex-col gap-2">
//               <div className="flex gap-2 mb-1">
//                 {deal.category && (
//                   <span className="bg-black text-white text-[12px] font-semibold px-2 py-1 rounded">
//                     {deal.category}
//                   </span>
//                 )}
//                 {deal.tag && (
//                   <span className="bg-gray-500 text-white text-[12px] font-semibold px-2 py-1 rounded">
//                     {deal.tag}
//                   </span>
//                 )}
//               </div>

//               <h3 className="text-sm sm:text-base font-medium text-black">
//                 {deal.title}
//               </h3>

//               {deal.originalPrice && (
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-500 line-through text-sm">
//                     ₹ {deal.originalPrice}
//                   </span>
//                   <span className="bg-green-600 text-white text-xs px-1 py-0.5 rounded font-bold">
//                     {deal.discount}
//                   </span>
//                 </div>
//               )}

//               <div className="flex items-end gap-1 text-black text-lg font-bold">
//                 ₹ {deal.price}{" "}
//                 <span className="text-gray-500 text-sm font-normal">
//                   /{deal.per}
//                 </span>
//               </div>

//               <p className="text-gray-500 text-xs">{deal.validity}</p>
//               <p className="text-gray-800 text-xs uppercase">{deal.vendor}</p>
//             </div>

//             <div className="absolute top-2 left-2 bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">
//               {deal.id}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-6">
//         <button className="bg-red-600 text-white px-6 py-2.5 rounded inline-flex items-center gap-2">
//           <span>View More</span>
//           <span className="w-3 h-3 relative">
//             <div className="absolute w-3 h-[7.5px] bg-white rotate-45"></div>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DealsGrid;

import React from "react";

const deals = [
  {
    id: 1,
    image: "https://placehold.co/447x240",
    category: "Hotel",
    tag: "Date Wise",
    title:
      "Stay at a 4 Star Hotel for two on full board basis (breakfast, lunch, dinner) & one complimentary transfer",
    originalPrice: 7000,
    discount: "30% off",
    price: 53000,
    per: "Per Night",
    validity: "Travel from 1st - 31st March, 2025",
    vendor: "Akbar Travels, New Delhi",
  },
  {
    id: 2,
    image: "https://placehold.co/447x240",
    category: "Hotel",
    tag: "Date Wise",
    title: "Dinner for family, 50% discount on order of worth ₹5,000 & above",
    originalPrice: 5000,
    discount: "50% off",
    price: 2500,
    per: "Per Person",
    validity: "Offer Ends on 20th April - 10th May, 2025",
    vendor: "Crazy Burgers Restaurant, New Delhi",
  },
  {
    id: 3,
    image: "https://placehold.co/447x240",
    category: "Airline",
    tag: "",
    title: "Virgin Atlantic Flight Offer",
    originalPrice: null,
    discount: null,
    price: 80500,
    per: "Person",
    validity: "Valid from 1st - 31st March, 2025",
    vendor: "Virgin Atlantic",
  },
  {
    id: 4,
    image: "https://placehold.co/447x240",
    category: "Ticketing Agent",
    tag: "",
    title: "Fly - Air India: Delhi-London-Delhi",
    originalPrice: null,
    discount: null,
    price: 80500,
    per: "Person",
    validity: "Offer Ends on 20th April - 10th May, 2025",
    vendor: "Riya Travel, Delhi",
  },
];

const DealsGrid = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Together 23, Monthly Travel & Entertainment Deals
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Your monthly bundle of big value - August Edition
          </p>
        </div>
        {/* 
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 shadow-md flex-shrink-0">
          <div className="absolute w-full h-full bg-white border border-[#DC3545]" />
          <div className="absolute left-2 top-3 flex flex-col items-end gap-1">
            <div className="text-[#DC3545] text-[18px] sm:text-[20px] font-bold tracking-[0.4px]">
              TOGETHER
            </div>
            <div className="flex items-end gap-1">
              <div className="text-[#DC3545] text-[36px] sm:text-[48px] font-normal leading-[36px] sm:leading-[48px]">
                23
              </div>
              <div className="flex flex-col justify-start items-start text-[10px] sm:text-[12px] font-normal">
                <div className="text-[#DC3545]">Travel</div>
                <div className="text-[#DC3545]">Deals</div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 shadow-md flex-shrink-0">
          {/* Background & Border */}
          <div className="absolute inset-0 bg-white border border-[#DC3545] rounded-lg" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-end p-2 sm:p-3">
            {/* TOGETHER Label */}
            <div className="text-[#DC3545] text-[14px] sm:text-[16px] md:text-[18px] font-bold tracking-[0.4px]">
              TOGETHER
            </div>

            {/* Number + Travel Deals */}
            <div className="flex items-end gap-1 mt-1 sm:mt-2">
              <div className="text-[#DC3545] text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-none sm:leading-tight md:leading-[48px]">
                23
              </div>
              <div className="flex flex-col justify-start items-start text-[8px] sm:text-[10px] md:text-[12px] font-normal leading-tight">
                <div className="text-[#DC3545]">Travel</div>
                <div className="text-[#DC3545]">Deals</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-44 sm:h-56 md:h-56 object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 border-white border-[1.5px] rounded-sm" />
                Add To Wishlist
              </div>
            </div>

            <div className="p-3 sm:p-4 flex flex-col gap-2">
              <div className="flex gap-2 mb-1 flex-wrap">
                {deal.category && (
                  <span className="bg-black text-white text-[10px] sm:text-[12px] font-semibold px-2 py-1 rounded">
                    {deal.category}
                  </span>
                )}
                {deal.tag && (
                  <span className="bg-gray-500 text-white text-[10px] sm:text-[12px] font-semibold px-2 py-1 rounded">
                    {deal.tag}
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-medium text-black">
                {deal.title}
              </h3>

              {deal.originalPrice && (
                <div className="flex items-center gap-2 text-[10px] sm:text-sm">
                  <span className="text-gray-500 line-through">
                    ₹ {deal.originalPrice}
                  </span>
                  <span className="bg-green-600 text-white text-[10px] sm:text-xs px-1 py-0.5 rounded font-bold">
                    {deal.discount}
                  </span>
                </div>
              )}

              <div className="flex items-end gap-1 text-black text-lg sm:text-xl font-bold">
                ₹ {deal.price}{" "}
                <span className="text-gray-500 text-xs sm:text-sm font-normal">
                  /{deal.per}
                </span>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm">
                {deal.validity}
              </p>
              <p className="text-gray-800 text-xs sm:text-sm uppercase">
                {deal.vendor}
              </p>
            </div>

            <div className="absolute top-2 left-2 bg-red-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
              {deal.id}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded inline-flex items-center gap-2 text-sm sm:text-base">
          <span>View More</span>
          <span className="w-2 sm:w-3 h-2 sm:h-3 relative">
            <div className="absolute w-2 sm:w-3 h-[5px] sm:h-[7.5px] bg-white rotate-45"></div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default DealsGrid;
