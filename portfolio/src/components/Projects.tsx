"use client";
import React from "react";
import { Separator } from "./SeparatorBar";
import { Tab } from "./projectstab";
import { Button } from "./ui/button";
// import { CardWithForm } from "./ContactForm";
const ProjectsTabs: React.FC = () => {
  return (
    <div className="bg-sexyBlack text-white flex flex-col px-4 md:px-10 pt-10 md:pt-0">
      <h2
        id="projects"
        className="pt-4 md:pt-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-6xl"
      >
        Projects
      </h2>
      <Separator />
      <div className="p-5 pt-10 flex justify-center ">
        <Tab />
      </div>
      <div>
        <Button className="mr-5 float-right">
          <a
            href="https://github.com/atharva00721"
            target="_blank"
            rel="noopener noreferrer"
          >
            See All
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsTabs;
