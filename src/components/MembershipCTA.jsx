// export default function MembershipCTA() {
//   return (
//     <section className="bg-red-600 px-8 py-12 flex flex-col lg:flex-row justify-between gap-16">
//       {/* Text Column */}
//       <div className="flex flex-col gap-4 lg:w-1/2">
//         <h3 className="text-white text-lg font-semibold">
//           Become a Member, It’s Free!
//         </h3>
//         <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
//           Book Directly, Earn Benefits.
//         </h2>
//         <div className="w-4 h-4 bg-white mt-2"></div>
//         <p className="text-white text-base font-medium">
//           As a member also earn & redeem points on selective bookings.
//         </p>
//         <p className="text-white text-base font-normal">
//           Save Big! With our exclusive hotel, holiday, and entertainment
//           offers—all straight to your in-box.
//         </p>
//       </div>

//       {/* Form Column */}
//       <div className="flex flex-col gap-4 lg:w-1/2">
//         <p className="text-white text-base font-medium">
//           Subscribe to become a member.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <input
//             type="email"
//             placeholder="Enter your email address..."
//             className="flex-1 px-4 py-4 border border-white bg-transparent text-white placeholder-white outline-none"
//           />
//           <button className="px-6 py-4 bg-red-700 border border-white text-white font-bold uppercase">
//             Confirm
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function MembershipCTA() {
  return (
    <section className="bg-red-600 px-6 sm:px-8 md:px-12 py-10 md:py-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-16 w-full">
      {/* Text Column */}
      <div className="flex flex-col gap-3 sm:gap-4 lg:w-1/2 text-center lg:text-left">
        <h3 className="text-white text-base sm:text-lg font-semibold">
          Become a Member, It’s Free!
        </h3>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight">
          Book Directly, Earn Benefits.
        </h2>
        <div className="w-6 h-1 bg-white mx-auto lg:mx-0 mt-2"></div>
        <p className="text-white text-sm sm:text-base font-medium mt-2">
          As a member also earn & redeem points on selective bookings.
        </p>
        <p className="text-white text-sm sm:text-base font-normal">
          Save Big! With our exclusive hotel, holiday, and entertainment offers
          — all straight to your inbox.
        </p>
      </div>

      {/* Form Column */}
      <div className="flex flex-col gap-4 lg:w-1/2 w-full max-w-lg">
        <p className="text-white text-sm sm:text-base font-medium text-center lg:text-left">
          Subscribe to become a member.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-1 px-4 py-3 sm:py-4 border border-white bg-transparent text-white placeholder-white outline-none text-sm sm:text-base rounded-md sm:rounded-none"
          />
          <button className="px-6 py-3 sm:py-4 bg-red-700 border border-white text-white font-bold uppercase text-sm sm:text-base hover:bg-red-800 transition-colors rounded-md sm:rounded-none">
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}
