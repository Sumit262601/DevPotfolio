"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { RainbowButton } from "../magicui/rainbow-button";
import { SparklesText } from "../magicui/sparkles-text";


const HeroContent = () => {
  const resumePath = '/resume.pdf';

  const handleDownload = async () => {
    try {
      const response = await fetch(resumePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');

      link.href = url;
      link.setAttribute('download', 'My_Resume.pdf');
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-2 md:py-[8px] md:px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 md:gap-6 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto cursive"
        >
          <span>
            Hey👋,
            <br />
            I am <SparklesText text="Sumit Kumar" />  
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-[600px] cursive"
        >
          I&apos;m a Full Stack Developer with experience in MERN, HTML5, CSS3, JavaScript, Java, Tailwindcss, Razorpay, GitHub, and
          React Native.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <motion.a
            variants={slideInFromLeft(1)}
            href="https://www.linkedin.com/in/sumit-kumar-bb4381250/"
          >
            <RainbowButton>Learn More</RainbowButton>
          </motion.a>
          <motion.p
            variants={slideInFromRight(1)}
            onClick={handleDownload}
          >
            <RainbowButton>Resume</RainbowButton>
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-auto h-auto max-w-[300px] md:max-w-[650px]"
        />
      </motion.div>
    </motion.div>

  );
};

export default HeroContent;
