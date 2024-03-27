"use client";

import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { TypeAnimation } from "react-type-animation";

export function AuroraBackgroundDemo() {
  return (
    <div className="overflow-hidden" id="home">
      <BackgroundGradientAnimation>
        <div className="absolute z-30 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-1xl text-center">
          <p className="drop-shadow-2xl text-gradient-to-b from-white/80 to-white/20 text-8xl sm:text-7xl md:text-9xl">
            <div>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Hello!",
                  1000,
                  "Namaste!",
                  1000,
                  "Hola!",
                  1000,
                ]}
                speed={10}
                style={{ fontSize: "5rem" }}
                repeat={Infinity}
              />
            </div>
          </p>
        </div>
      </BackgroundGradientAnimation>
    </div>
    // <LampContainer>
    //   <motion.h1
    //     initial={{ opacity: 0.5, y: 100 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //       delay: 0.3,
    //       duration: 0.8,
    //       ease: "easeInOut",
    //     }}
    //     className="mt-[16rem] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    //   >
    //     Welcome to <br /> My portfolio
    //   </motion.h1>
    //   <p className="mt-3 text-1xl text-slate-500">Let's take a look around</p>
    //   <div className="flex flex-row justifu"></div>
    // </LampContainer>
  );
}
