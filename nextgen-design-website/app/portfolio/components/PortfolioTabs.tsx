"use client";

import { motion } from "framer-motion";

export default function PortfolioTabs({
  mainTab,
  setMainTab,
  subTab,
  setSubTab,
  locations,
  activeLocation,
  setActiveLocation,
}: any) {
  return (
    <div className="space-y-10 bg-white/80 backdrop-blur-md rounded-3xl py-8 px-6 shadow-sm">
      {/* ===== MAIN TABS (SEGMENTED / GLASS) ===== */}
      <div className="flex justify-center">
        <div className="flex bg-white/70 backdrop-blur-md shadow-sm rounded-full p-1">
          {["interior", "architecture"].map((tab) => {
            const isActive = mainTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setMainTab(tab)}
                className={`relative px-8 py-2 rounded-full text-sm font-medium transition
                  ${
                    isActive
                      ? tab === "interior"
                        ? "text-white"
                        : "text-white"
                      : "text-gray-600"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mainTab"
                    className={`absolute inset-0 rounded-full ${
                      tab === "interior" ? "bg-green-800" : "bg-slate-800"
                    }`}
                  />
                )}
                <span className="relative capitalize">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== SUB TABS (UNDERLINE STYLE) ===== */}
      <div className="flex justify-center gap-10">
        {["residential", "commercial"].map((tab) => {
          const isActive = subTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setSubTab(tab)}
              className="relative text-sm font-medium text-gray-700"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}

              {isActive && (
                <motion.span
                  layoutId="subTab"
                  className={`absolute left-0 -bottom-2 h-[2px] w-full ${
                    mainTab === "interior" ? "bg-green-700" : "bg-slate-700"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ===== LOCATION FILTERS (SOFT CHIPS) ===== */}
      <div className="flex justify-center">
        <div className="flex gap-3 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveLocation("all")}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${
                activeLocation === "all"
                  ? "border-gray-900 text-gray-900"
                  : "border-gray-200 text-gray-500 hover:text-gray-800"
              }`}
          >
            All
          </button>

          {locations.map((loc: string) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-4 py-1.5 rounded-full text-sm border whitespace-nowrap transition
                ${
                  activeLocation === loc
                    ? "border-gray-900 text-gray-900"
                    : "border-gray-200 text-gray-500 hover:text-gray-800"
                }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
