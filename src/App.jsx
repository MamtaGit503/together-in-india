import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Hotels from "./pages/Hotels";
import ThingsToDo from "./pages/ThingsToDo";
import EatDrink from "./pages/EatDrink";
import Shop from "./pages/Shop";
import TribesOfIndia from "./pages/TribesOfIndia";
import KidsSpecial from "./pages/KidsSpecial";
import AboutUs from "./pages/AboutUs";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      <div className="flex-1 min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/eat-drink" element={<EatDrink />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tribes-of-india" element={<TribesOfIndia />} />
          <Route path="/kids-special" element={<KidsSpecial />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
