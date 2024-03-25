// import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import { AuroraBackgroundDemo } from "./components/Homeaurora";
// import { MacbookScrollDemo } from "./components/demoMac";
import { ProjectTabs } from "./components/Projects";

export default function App() {
  return (
    <>
      <div className="bg-sexyBlack pb-96">
        <Navbar />
        <AuroraBackgroundDemo />
        <AboutMe />
        {/* <MacbookScrollDemo /> */}
        <div className="bg-sexyBlack mb-50">
          <ProjectTabs />
        </div>
        {/* <Home /> */}
        {/* <div className="flex flex-col items-center justify-center h-screen">
          <div className="p-3 bg-green-400 rounded-xl shadow-2xl">
            <p className="text-white font-bold underline-offset-4 tracking-wider">
              Hi pookies
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>*/}
      </div>
    </>
  );
}
