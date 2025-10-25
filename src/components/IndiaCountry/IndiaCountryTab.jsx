import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndiaCountryTab = () => {
  const [activeTab, setActiveTab] = useState("India");
  const navigate = useNavigate();

  const tabs = ["India", "Hotels", "Things to Do", "Eat & Drink", "Shop"];

  return (
    <>
      <div className="relative h-auto mt-4 mt py-12 md:py-0">
        {/* Top Tabs */}
        <div className="relative flex flex-wrap uppercase lg:flex-nowrap justify-center lg:justify-start  border-[#838383]">
          {tabs.map((label, i) => {
            const isActive = activeTab === label;
            return (
              <div
                key={i}
                onClick={() => {
                  setActiveTab(label);
                  navigate(routes[label]);
                }}
                className={`px-4 sm:px-5 md:px-16 h-12 sm:h-14 md:h-16 flex items-center justify-center border border-[#838383] cursor-pointer transition-transform duration-200 ${
                  isActive
                    ? "bg-[#2E2E2E] text-white"
                    : "bg-white text-black hover:text-[#DC3545]"
                } hover:scale-105`}
                aria-label={`Navigate to ${label}`}
              >
                <span className="font-roboto font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Fade-in animation keyframes
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style> */}
      </div>
    </>
  );
};

export default IndiaCountryTab;
