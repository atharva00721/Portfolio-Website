"use client";
import { motion } from "framer-motion";
// import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { MovingBorderBtnImg } from "./buttonMovingBordersImg";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Hi Pookies 💖
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Welcome to my portfolio.
        </div>
        <button className="font-medium w-14">
          <MovingBorderBtnImg
            buttonText="Click Me"
            imageSrc="https://media.discordapp.net/attachments/950311940096393279/1221573448220803214/image.png?ex=661311ed&is=66009ced&hm=623f69d8181750389cc17e01edd6f92bc2de3891c99112151e116503a3b81d0d&=&format=webp&quality=lossless&width=150&height=150"
          />
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
