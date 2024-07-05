import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center z-[20] justify-center py-20"
      id="projects"
    >
      <h1 className="text-[60px] cursive font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex-col grid grid-cols-3 md:flex-row gap-10 px-10 z-10">
        <ProjectCard
          src="/Solar-3D.png"
          title="3D Solar System"
          description="This 3D-Solar System know about our solar system"
          technologies="Technologies: HTML | CSS | JavaScript"
          view="https://solar-system-3-d.vercel.app/"
          href="https://github.com/Sumit262601/Solar-System-3D"
          />
        {/* <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="In this is project to knows about my skills."
          technologies="Technologies: HTML | CSS | JavaScript"
          href="https://github.com/Sumit262601/Solar-System-3D"
          view=""
        /> */}
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Potfolio"
          description="This is my potfolio to introduce my Skills and Expertise"
          technologies="Technologies: Next Js | TypeScript | Tailwind | Framer Motion"
          href="https://github.com/Sumit262601/Space-Potfolio"
          view="https://github.com/Sumit262601/Space-Potfolio"
        />
        <ProjectCard
          src="/Chatter.png"
          title="Chatter"
          description="Here, Is a Chatter Application like a What'sApp"
          technologies="Technologies: React Native | Tailwind | Firebase | Redux"
          href="https://github.com/Sumit262601/Chatter"
          view=""
        />
        <ProjectCard
          src="/Login-UI.png"
          title="Login UI"
          description="This UX/UI Login design to apply in your project"
          technologies="Technologies: React Native | Tailwind | Postcss"
          href="https://github.com/Sumit262601/Login-UI"
          view=""
        />
        <ProjectCard
          src="/TextUtilies.png"
          title="TextUtilies"
          description="There is text converter in lower, upper, clipboard"
          technologies="Technologies: HTML | CSS | JavaScript"
          href="https://github.com/Sumit262601/TextUtilies"
          view="https://text-utilies.vercel.app/"
        />
        <ProjectCard
          src="/Disney.png"
          title="Disney Clone"
          description="This Disney-Clone project to practice React ansd the I should use MovieDatabase Api to fecth this content in latest views"
          technologies="Technologies: React Js | Bootstrap-5 | MovieDB Api"
          href="https://github.com/Sumit262601/Disney-Clone"
          view="https://disneyy-clone.vercel.app/"
        />
        {/* <ProjectCard
          src="/TextUtilies.png"
          title="TextUtilies"
          description="There is text converter in lower, upper, clipboard"
          technologies="Technologies: React Native | Tailwind | Postcss"
          href="https://github.com/Sumit262601/Sai-Prerna"
          view=""
        /> */}
      </div>
    </div>
  );
};

export default Projects;
