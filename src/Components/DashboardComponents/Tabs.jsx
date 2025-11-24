"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

export default function TabLayout() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="w-full shadow-xl rounded-xl p-4 sm:p-5 flex flex-col gap-6">
      
      {/* TAB Bar */}
      <div className="flex w-full rounded-lg p-1 h-12 sm:h-14">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab)}
            className="
              relative flex-1 text-center select-none 
              flex items-center justify-center gap-1
              text-[0.65rem] sm:text-[0.85rem] md:text-[1rem] 
              py-1 sm:py-2 font-medium text-gray-700
            "
          >
            <span className="text-[0.9rem] sm:text-[1.1rem]">{tab.icon}</span> 
            {tab.label}

            {active.id === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] sm:h-[3px] bg-indigo-500 rounded-md"
                transition={{ type: "spring", bounce: 0.3, duration: 0.45 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ---- Animated Content ---- */}
      <div className="h-[70px] sm:h-[100px] flex justify-center items-center text-3xl sm:text-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {active.icon}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
