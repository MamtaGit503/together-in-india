import React from "react";
import PopularDestinations from "./PopularDestinations";
import MembershipCTA from "./MembershipCTA";
import Disclaimer from "./Disclaimer";

const MainContent = () => {
  return (
    <div className="flex flex-col ">
      <PopularDestinations />
      <MembershipCTA />
      <Disclaimer />
    </div>
  );
};

export default MainContent;
