import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
  technologies: string;
  view: string;
}

const ProjectCard = ({ src, title, description, href, technologies, view }: Props) => {
  return (
    <div className="rounded-lg shadow-lg border border-[#2A0E61] cursive">
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          { view !== view ? "" : <a href={view} target="_blank" className="py-2 px-4 button-primary text-center text-white rounded-lg max-w-[200px]">
            Try
          </a>  }
        </div>
        <p className="mt-2 text-gray-300">{description.slice(0, 50) + " ..."}</p>
      </div>
      
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="p-4">
        <p className="text-white">{technologies}</p>
      </div>

      <div className="flex justify-between p-4">
        <p className="text-white flex text-center gap-2 justify-normal">
          Try now
          <ArrowRightIcon className="text-[#b49bff] h-5 w-5 mt-1" />
        </p>

        <div className="text-white flex gap-4">
          <a href={href}
            className="py-2 px-3 
            button-primary text-center 
            text-white 
            rounded-lg max-w-[200px]"
          >
            Code
          </a>
          {/* <a href=""
            className="py-2 px-3 
            button-primary text-center 
            text-white 
            rounded-lg max-w-[200px]"
          >
            View More
          </a> */}
        </div>
        
      </div>

    </div>
  );
};

export default ProjectCard;
