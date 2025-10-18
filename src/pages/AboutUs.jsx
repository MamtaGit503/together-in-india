import React from "react";
import Footer from "../components/Footer";
import TravelInfoSection from "../components/TravelInfoSection";
import IntroducingSection from "../components/IntroducingSection";
import IntroSection from "../components/IntroSection";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex justify-center py-10 mt-20">
        <IntroducingSection />
      </div>
      {/* <IntroSection /> */}
      <TravelInfoSection />
      <Footer />
    </>
  );
};

export default Home;
