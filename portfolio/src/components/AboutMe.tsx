"use client";
import { AboutMeCard } from "./AboutMeCardAce";
import { useMediaQuery } from "react-responsive";
import React from "react";
import { Separator } from "./SeparatorBar";
import { AboutMeCardtab } from "./AboutMeTablet";

const AboutMe: React.FC = () => {
  const isTabletOriPad = useMediaQuery({
    query: "(min-device-width: 768px) and (max-device-width: 1024px)",
  });

  return (
    <div className="bg-sexyBlack text-white flex flex-col px-4 md:px-10 pt-10 md:pt-20">
      <h2
        id="aboutme"
        className="pt-4 md:pt-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-6xl"
      >
        About Me
      </h2>
      <Separator />
      <div className="pt-10 md:pt-10 flex flex-col lg:flex-row">
        <div className="lg:w-1/3 w-full max-w-full lg:max-w-xs lg:mx-4">
          {isTabletOriPad ? <AboutMeCardtab /> : <AboutMeCard />}
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col max-md:items-center">
            <div className="max-lg:my-5 p-3 w-80 justify-center bg-gray-900 rounded-xl shadow-2xl mb-4 md:w-auto">
              <h1 className="text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
                My Background
              </h1>
              <p className="pt-3 md:pt-5 pb-5 font-normal text-sm md:text-base">
                I have [X years] of experience in [Your Field], specializing in
                [Your Specialization]. My journey has led me to work on projects
                ranging from [Describe notable projects or achievements].
              </p>
            </div>
            <div className="max-lg:w-80 p-3 bg-gray-900 rounded-xl shadow-2xl md:w-auto">
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
                    <img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,tailwind,vite,materialui&perline=4" />
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
