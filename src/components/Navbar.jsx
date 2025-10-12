// import React from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const Navbar = () => {
//   const navLinks = [
//     // { name: "Home", path: "/" },
//     { name: "ABOUT US", path: "/" },
//     { name: "ADVERTISE WITH US", path: "/" },
//     { name: "BUSINESS SITE", path: "/" },
//   ];

//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
//         isScrolled
//           ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
//           : "py-4 md:py-6"
//       }`}
//     >
//       {/* Logo */}
//       <div className="w-2/6 flex items-center space-x-4 sm:space-x-6">
//         <Link to="/" className="flex items-center space-x-2">
//           <img
//             src={assets.logo}
//             alt="logo"
//             className={`h-9 ${isScrolled && "invert opacity-80"}`}
//           />
//           <span className="hidden lg:inline text-xl font-extrabold text-gray-900">
//             Together In India
//           </span>
//         </Link>
//         <div className="relative">
//           <label htmlFor="travel-selector" className="sr-only">
//             Travel Search
//           </label>
//           <select
//             id="travel-selector"
//             className="text-sm text-gray-700 bg-transparent cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
//             defaultValue="Travel Search"
//             aria-label="Travel Search Options"
//           >
//             <option>Travel Search</option>
//             <option>Flights</option>
//             <option>Hotels</option>
//             <option>Activities</option>
//           </select>
//         </div>
//       </div>
//       {/* Desktop Nav */}
//       <div className="hidden md:flex items-center gap-4 lg:gap-8">
//         <button
//           className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
//             isScrolled ? "text-black" : "text-white"
//           } transition-all`}
//         >
//           Become a Member
//         </button>
//         {navLinks.map((link, i) => (
//           <a
//             key={i}
//             href={link.path}
//             className={`group flex flex-col gap-0.5 ${
//               isScrolled ? "text-gray-700" : "text-white"
//             }`}
//           >
//             {link.name}
//             <div
//               className={`${
//                 isScrolled ? "bg-gray-700" : "bg-white"
//               } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
//             />
//           </a>
//         ))}
//       </div>

//       {/* Desktop Right */}
//       <div className="hidden md:flex items-center gap-4">
//         <button
//           className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
//             isScrolled ? "text-white bg-black" : "bg-white text-black"
//           }`}
//         >
//           Login
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="flex items-center gap-3 md:hidden">
//         <svg
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <line x1="4" y1="6" x2="20" y2="6" />
//           <line x1="4" y1="12" x2="20" y2="12" />
//           <line x1="4" y1="18" x2="20" y2="18" />
//         </svg>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>

//         <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
//           Become a Member
//         </button>

//         {navLinks.map((link, i) => (
//           <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
//             {link.name}
//           </a>
//         ))}

//         <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const Navbar = () => {
//   const navLinks = [
//     { name: "ABOUT US", path: "/" },
//     { name: "ADVERTISE WITH US", path: "/" },
//     { name: "BUSINESS SITE", path: "/" },
//   ];

//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 shadow-md">
//         {/* ---------- TOP ROW ---------- */}
//         <div className="flex items-center justify-end h-14 space-x-6 text-sm border-b border-gray-300">
//           <button
//             className={`border px-3 py-1 rounded-full transition ${
//               isScrolled ? "text-black border-black" : "text-white border-white"
//             }`}
//           >
//             Become a Member
//           </button>

//           {navLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.path}
//               className={`relative font-medium ${
//                 isScrolled ? "text-gray-800" : "text-white"
//               } group`}
//             >
//               {link.name}
//               <span
//                 className={`absolute bottom-[-4px] left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
//                   isScrolled ? "bg-gray-800" : "bg-white"
//                 }`}
//               />
//             </a>
//           ))}

//           <select
//             className={`bg-transparent cursor-pointer focus:outline-none ${
//               isScrolled ? "text-gray-800" : "text-white"
//             }`}
//             defaultValue="English"
//           >
//             <option>English</option>
//             <option>Hindi</option>
//           </select>
//         </div>

//         {/* ---------- BOTTOM ROW ---------- */}
//         <div className="flex items-center justify-between h-12">
//           {/* Left side */}
//           <div className="flex items-center space-x-4">
//             <Link to="/" className="flex items-center space-x-2">
//               <img
//                 src={assets.logo}
//                 alt="logo"
//                 className={`h-8 ${isScrolled ? "invert opacity-80" : ""}`}
//               />
//               <span
//                 className={`hidden sm:inline text-lg font-semibold ${
//                   isScrolled ? "text-gray-900" : "text-white"
//                 }`}
//               >
//                 Together In India
//               </span>
//             </Link>

//             <select
//               className={`bg-transparent cursor-pointer focus:outline-none text-sm ${
//                 isScrolled ? "text-gray-800" : "text-white"
//               }`}
//               defaultValue="Destinations"
//             >
//               <option>Destinations</option>
//               <option>Flights</option>
//               <option>Hotels</option>
//               <option>Activities</option>
//             </select>
//           </div>

//           {/* Right side */}
//           <button
//             className={`text-sm font-medium transition ${
//               isScrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             SIGN IN
//           </button>
//         </div>
//       </div>

//       {/* ---------- MOBILE MENU BUTTON ---------- */}
//       <div className="absolute top-4 right-4 md:hidden">
//         <svg
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className={`h-6 w-6 cursor-pointer ${
//             isScrolled ? "text-gray-800" : "text-white"
//           }`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <line x1="4" y1="6" x2="20" y2="6" />
//           <line x1="4" y1="12" x2="20" y2="12" />
//           <line x1="4" y1="18" x2="20" y2="18" />
//         </svg>
//       </div>

//       {/* ---------- MOBILE MENU ---------- */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 transition-transform duration-500 md:hidden ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>

//         <button className="border px-4 py-1 text-sm rounded-full">
//           Become a Member
//         </button>

//         {navLinks.map((link, i) => (
//           <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
//             {link.name}
//           </a>
//         ))}

//         <button className="bg-black text-white px-6 py-2 rounded-full">
//           SIGN IN
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navLinks = [
    { name: "ABOUT US", path: "/" },
    { name: "ADVERTISE WITH US", path: "/" },
    { name: "BUSINESS SITE", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-8 shadow-sm">
        {/* ---------- TOP ROW (Desktop) ---------- */}
        <div className="hidden md:flex items-center justify-end h-14 space-x-6 text-sm border-b border-gray-300">
          <button
            className={`border px-3 py-1 rounded-full transition ${
              isScrolled ? "text-black border-black" : "text-white border-white"
            }`}
          >
            Become a Member
          </button>

          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`relative font-medium ${
                isScrolled ? "text-gray-800" : "text-white"
              } group`}
            >
              {link.name}
              <span
                className={`absolute bottom-[-4px] left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                }`}
              />
            </a>
          ))}

          <select
            className={`bg-transparent cursor-pointer focus:outline-none ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            defaultValue="English"
          >
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* ---------- BOTTOM ROW (Desktop) ---------- */}
        <div className="hidden md:flex items-center justify-between h-14">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={assets.logo}
                alt="logo"
                className={`h-8 ${isScrolled ? "invert opacity-80" : ""}`}
              />
              <span
                className={`text-lg font-semibold ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Together In India
              </span>
            </Link>

            <select
              className={`bg-transparent cursor-pointer focus:outline-none text-sm ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              defaultValue="Destinations"
            >
              <option>Destinations</option>
              <option>Flights</option>
              <option>Hotels</option>
              <option>Activities</option>
            </select>
          </div>

          {/* Right side */}
          <button
            className={`text-sm font-medium transition ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            SIGN IN
          </button>
        </div>

        {/* ---------- MOBILE HEADER ---------- */}
        <div className="flex md:hidden items-center justify-between h-16">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={assets.logo}
              alt="logo"
              className={`h-8 ${isScrolled ? "invert opacity-80" : ""}`}
            />
            <span
              className={`text-lg font-semibold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Together In India
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg
                className={`h-7 w-7 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className={`h-7 w-7 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Menu Items */}
        {/* <button className="border px-4 py-1 text-sm rounded-full">
          Become a Member
        </button> */}

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="text-gray-800 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* <select
          className="border px-4 py-2 rounded text-gray-800"
          defaultValue="English"
        >
          <option>English</option>
          <option>Hindi</option>
        </select> */}

        {/* <select
          className="border px-4 py-2 rounded text-gray-800"
          defaultValue="Destinations"
        >
          <option>Destinations</option>
          <option>Flights</option>
          <option>Hotels</option>
          <option>Activities</option>
        </select> */}

        <button className="bg-black text-white px-6 py-2 rounded-full">
          SIGN IN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
