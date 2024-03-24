"use client";
import { AboutMeCard } from "./AboutMeCardAce";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-sexyBlack text-white flex flex-col px-10 pb-10">
      <h2 className="pt-10 text-6xl font-bold">About Me</h2>
      <div className="pt-20 flex flex-row">
        <div className="w-1/3">
          <AboutMeCard />
        </div>
        <div className="w-2/3">
          <div className="flex flex-col h-screen">
            <div className="p-3 bg-gray-900 rounded-xl shadow-2xl">
              <h1 className="text-white font-bold underline-offset-4 tracking-wider">
                My Background
              </h1>
              <p className="pt-5 pb-5 font-normal">
                I have [X years] of experience in [Your Field], specializing in
                [Your Specialization]. My journey has led me to work on projects
                ranging from [Describe notable projects or achievements].
              </p>
            </div>
            <div className="p-3 bg-gray-900 rounded-xl shadow-2xl my-4">
              <h1 className="text-white font-bold underline-offset-4 tracking-wider">
                My Skills
              </h1>
              <p className="pt-5 pb-2 font-normal">
                - Backend
                <p className="py-3">
                  <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=nodejs,py,flask," />
                  </a>
                </p>
                - Frontend
                <p className="py-3">
                  <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,redux,tailwind,materialui&perline=4" />
                  </a>
                  - Tools
                  <p className="py-2">
                    <a href="https://skillicons.dev">
                      <img src="https://skillicons.dev/icons?i=git,github,vscode,notion" />
                    </a>
                  </p>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
