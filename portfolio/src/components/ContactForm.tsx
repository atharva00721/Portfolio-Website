import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { TypeAnimation } from "react-type-animation";

export function BottomtextGrad() {
  return (
    <div className="w-[90%] mx-auto pb-20 ">
      <hr className="mb-10 border-2 rounded-md mt-4 border-pink-500" />
      <div className="h-[15rem] text-white bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden rounded-3xl">
        <BackgroundGradientAnimation className="z-0">
          <div className="absolute z-30 inset-0 flex items-start justify-start text-white font-bold px-5 pointer-events-none text-1xl text-left">
            <p className=" text-white drop-shadow-2xl text-5xl sm:text-3xl md:text-6xl pt-8">
              <h1 className="font-bold">I</h1>
              <h1 className="text-pink-500">Make</h1>
              <div>
                <div className="text-white ">
                  <TypeAnimation
                    className="font-black"
                    sequence={[
                      "Websites",
                      700,
                      "Backends",
                      700,
                      "Frontends",
                      700,
                    ]}
                    repeat={Infinity}
                  />
                </div>
              </div>
            </p>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}
