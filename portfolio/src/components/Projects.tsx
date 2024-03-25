"use client";
import React from "react";
import { Separator } from "./SeparatorBar";
import { TabsDemo } from "./projectstab";

const ProjectsTabs: React.FC = () => {
  return (
    <div className="bg-sexyBlack text-white flex flex-col px-4 md:px-10 pt-10 md:pt-0">
      <h2 className="pt-4 md:pt-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-6xl">
        Projects
      </h2>
      <Separator />
      <div className="p-5 pt-10 flex justify-center">
        <TabsDemo />
      </div>
    </div>
  );
};

export default ProjectsTabs;
