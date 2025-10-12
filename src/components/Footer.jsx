// import React from "react";
// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-black text-white">
//       {/* Top Footer Content */}
//       <div className="max-w-[1440px] mx-auto px-8 py-16 flex flex-col gap-8">
//         {/* Logo + Title */}
//         <div className="flex items-center gap-5">
//           <img src={assets.logo} alt="Logo" className="w-16 h-16" />
//           <h2 className="text-white text-4xl font-bold font-roboto">
//             Together In India
//           </h2>
//         </div>

//         {/* Main Footer Body */}
//         <div className="flex flex-col lg:flex-row justify-between gap-10">
//           {/* Left Section */}
//           <div className="flex flex-col gap-12 max-w-[500px]">
//             {/* Description */}
//             <p className="text-white text-base font-medium leading-6">
//               We proudly connect our identity to Devanagari—the mother of all
//               scripts that links Indians to their ancient culture, heritage, and
//               roots. At Together In India, our logo draws inspiration from the
//               first letter of the Devanagari script, reflecting our deep respect
//               for this timeless legacy.
//             </p>

//             {/* Social Links */}
//             <div className="flex flex-col gap-2">
//               <span className="text-white font-bold text-xs">FOLLOW US:</span>
//               <div className="flex gap-4 items-center">
//                 <div className="w-8 h-8 bg-red-600 rounded-full" />
//                 <img
//                   src="https://placehold.co/18x18"
//                   alt="Social"
//                   className="w-4.5 h-4.5"
//                 />
//                 <div className="w-8 h-8 bg-red-600 rounded-full" />
//                 <img
//                   src="https://placehold.co/18x18"
//                   alt="Social"
//                   className="w-4.5 h-4.5"
//                 />
//                 <div className="w-8 h-8 bg-red-600 rounded-full" />
//                 <div className="text-white font-black text-sm">in</div>
//                 <div className="w-8 h-8 bg-red-600 rounded-full" />
//                 <img
//                   src="https://placehold.co/18x18"
//                   alt="Social"
//                   className="w-4.5 h-4.5"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Columns */}
//           <div className="flex gap-20 flex-wrap">
//             {/* Column 1 - Support */}
//             <div className="flex flex-col gap-5">
//               <span className="text-red-600 font-bold uppercase text-base">
//                 Support
//               </span>
//               <span className="text-white text-base font-normal">
//                 Terms & Conditions
//               </span>
//               <span className="text-white text-base font-normal">
//                 Privacy Policy
//               </span>
//               <span className="text-white text-base font-normal">Sitemap</span>
//               <span className="text-white text-base font-normal">
//                 Business Agreement
//               </span>
//               <span className="text-white text-base font-normal">
//                 Disclaimer
//               </span>
//             </div>

//             {/* Column 2 - Company */}
//             <div className="flex flex-col gap-5">
//               <span className="text-red-600 font-bold uppercase text-base">
//                 Company
//               </span>
//               <span className="text-white text-base font-normal">About Us</span>
//               <span className="text-white text-base font-normal">CSR</span>
//               <span className="text-white text-base font-normal">
//                 News & Announcement
//               </span>
//             </div>

//             {/* Column 3 - Work With Us */}
//             <div className="flex flex-col gap-5">
//               <span className="text-red-600 font-bold uppercase text-base">
//                 Work with Us
//               </span>
//               <span className="text-white text-base font-normal">
//                 Travel Trade
//               </span>
//               <span className="text-white text-base font-normal">
//                 Advertise
//               </span>
//               <span className="text-white text-base font-normal">
//                 Guide Registration
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="w-full border-t border-gray-600 bg-black h-12 flex items-center px-8">
//         <img
//           src="https://placehold.co/20x20"
//           alt="Logo"
//           className="w-5 h-5 mr-2"
//         />
//         <span className="text-white text-xs font-normal">
//           2025, Together in India Travels. All rights reserved.
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      {/* Top Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col gap-8">
        {/* Logo + Title */}
        <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-5 text-center sm:text-left">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto sm:mx-0"
          />
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-roboto">
            Together In India
          </h2>
        </div>

        {/* Main Footer Body */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Left Section */}
          <div className="flex flex-col gap-8 sm:gap-10 max-w-[500px]">
            {/* Description */}
            <p className="text-white text-sm sm:text-base font-medium leading-relaxed sm:leading-6 text-center sm:text-left">
              We proudly connect our identity to Devanagari—the mother of all
              scripts that links Indians to their ancient culture, heritage, and
              roots. At Together In India, our logo draws inspiration from the
              first letter of the Devanagari script, reflecting our deep respect
              for this timeless legacy.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <span className="text-white font-bold text-xs tracking-wide">
                FOLLOW US:
              </span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
                {/* Circle + Icon combos */}
                <div className="w-8 h-8 bg-red-600 rounded-full flex justify-center items-center" />
                <img
                  src="https://placehold.co/18x18"
                  alt="Social"
                  className="w-4.5 h-4.5"
                />
                <div className="w-8 h-8 bg-red-600 rounded-full flex justify-center items-center" />
                <img
                  src="https://placehold.co/18x18"
                  alt="Social"
                  className="w-4.5 h-4.5"
                />
                <div className="w-8 h-8 bg-red-600 rounded-full flex justify-center items-center" />
                <span className="text-white font-black text-sm">in</span>
                <div className="w-8 h-8 bg-red-600 rounded-full flex justify-center items-center" />
                <img
                  src="https://placehold.co/18x18"
                  alt="Social"
                  className="w-4.5 h-4.5"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Columns */}
          <div className="flex flex-wrap justify-between lg:justify-end gap-10 sm:gap-16 lg:gap-20">
            {/* Column 1 - Support */}
            <div className="flex flex-col gap-3 sm:gap-5 min-w-[130px]">
              <span className="text-red-600 font-bold uppercase text-sm sm:text-base">
                Support
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Terms & Conditions
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Privacy Policy
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Sitemap
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Business Agreement
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Disclaimer
              </span>
            </div>

            {/* Column 2 - Company */}
            <div className="flex flex-col gap-3 sm:gap-5 min-w-[130px]">
              <span className="text-red-600 font-bold uppercase text-sm sm:text-base">
                Company
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                About Us
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                CSR
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                News & Announcement
              </span>
            </div>

            {/* Column 3 - Work With Us */}
            <div className="flex flex-col gap-3 sm:gap-5 min-w-[130px]">
              <span className="text-red-600 font-bold uppercase text-sm sm:text-base">
                Work with Us
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Travel Trade
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Advertise
              </span>
              <span className="text-white text-sm sm:text-base font-normal">
                Guide Registration
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-700 bg-black py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 px-4 sm:px-8">
        <img src="https://placehold.co/20x20" alt="Logo" className="w-5 h-5" />
        <span className="text-white text-[11px] sm:text-xs font-normal text-center sm:text-left">
          2025, Together in India Travels. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
