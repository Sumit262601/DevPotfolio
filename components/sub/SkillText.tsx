"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center p-4">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="Welcome-text text-sm">
          Think better with your skills
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="cursive text-[30px] md:text-[40px] text-white font-medium mt-2 text-center mb-3"
      >
        Making apps with modern technologies
      </motion.div>
    </div>

  );
};

export default SkillText;
