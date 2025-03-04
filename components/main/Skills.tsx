import React from "react";
import SkillText from "../sub/SkillText";
import SkillOrbit from "../sub/SkillOrbit";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <SkillOrbit />

      <div className="absolute inset-0 z-[-10] opacity-30 flex items-center justify-center bg-cover">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
