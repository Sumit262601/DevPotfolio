import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex-col grid grid-cols-3 md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Solar-3D.png"
          title="3D Solar System"
          description="In this is project we create a amazing Solar-3D website for knowledge."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="In this is project to knows about my skills."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Potfolio"
          description="This is my potfolio website to show my Skills and Expertise."
        />
        <ProjectCard
          src="/Chatter.png"
          title="Chatter"
          description="This is a chatter app using react native."
        />
        <ProjectCard
          src="/Login-UI.png"
          title="Login-UI"
          description="This is my UX/UI design for Login"
        />
      </div>
    </div>
  );
};

export default Projects;
