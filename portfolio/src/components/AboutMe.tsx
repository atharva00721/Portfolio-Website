"use client";
import { AboutMeCard } from "./AboutMeCardAce";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-sexyBlack text-white flex flex-col px-4 md:px-10 pt-10 md:pt-20">
      <h2 className="pt-4 md:pt-10 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-6xl">
        About Me
      </h2>
      <div className="pt-10 md:pt-20 flex flex-col md:flex-row">
        <div className="md:w-1/3 max-w-full md:max-w-xs md:mx-4">
          <AboutMeCard />
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col max-md:items-center">
            <div className="max-md:my-5 p-3 w-80 justify-center bg-gray-900 rounded-xl shadow-2xl mb-4 md:w-auto">
              <h1 className="text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
                My Background
              </h1>
              <p className="pt-3 md:pt-5 pb-5 font-normal text-sm md:text-base">
                I have [X years] of experience in [Your Field], specializing in
                [Your Specialization]. My journey has led me to work on projects
                ranging from [Describe notable projects or achievements].
              </p>
            </div>
            <div className="max-md:w-80 p-3 bg-gray-900 rounded-xl shadow-2xl">
              <h1 className="text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
                My Skills
              </h1>
              <p className="pt-3 md:pt-5 pb-2 font-normal text-sm md:text-base">
                - Backend
                <p className="py-3">
                  <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=nodejs,py,flask," />
                  </a>
                </p>
                - Frontend
                <p className="py-3">
                  <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,redux,tailwind,vite,materialui&perline=4" />
                  </a>
                </p>
                - Tools
                <p className="py-2">
                  <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=git,github,vscode,notion" />
                  </a>
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
