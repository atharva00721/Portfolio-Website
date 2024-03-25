"use client";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
("Welcome to my portfolio.");

// const words = [
//   {
//     text: "Welcome",
//   },
//   {
//     text: "to",
//   },
//   {
//     text: "my",
//   },
//   {
//     text: "portfolio.",
//     className: "text-blue-500 dark:text-blue-500",
//   },
// ];
export function AuroraBackgroundDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-[16rem] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Welcome to <br /> My portfolio
      </motion.h1>
      <p className="mt-3 text-1xl text-slate-500">Let's take a look around</p>
      <div className="flex flex-row justifu"></div>
    </LampContainer>
  );
}
