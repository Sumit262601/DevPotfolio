"use client"

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { All_Projects } from "@/constants/project"

const Projects = () => {
  // Set the initial state to show a limited number of projects
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Handle the "See More" button click
  const handleSeeMore = () => {
    setVisibleProjects((prev) => prev + 3); // Show 3 more projects each time
  };

  return (
    <div className="flex flex-col items-center z-[20] justify-center py-20" id="projects">
      <h1 className="text-[40px] md:text-[60px] cursive font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-10 z-10">
        {All_Projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            view={project.view}
            href={project.href}
          />
        ))}
      </div>
      {visibleProjects < All_Projects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 button-primary text-white rounded-md"
          >
            See More
          </button>
        </div>
      )}
    </div>

  );
};

export default Projects;
