"use client";

// import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function ProjectTabs() {
  const tabs = [
    {
      title: "The Weeknd",
      value: "product",
      content: (
        <div className="scale-[0.8] w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>The Weeknd Tab</p>
          <StarboyContent />
        </div>
      ),
    },
    {
      title: "Lana Del Ray",
      value: "dala",
      content: (
        <div className="scale-[0.8] w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Lana Del Ray tab</p>
          <LanaContnet />
        </div>
      ),
    },
    {
      title: "Abel",
      value: "playground",
      content: (
        <div className="scale-[0.8] w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Abel tab</p>
          <StarboyContent />
        </div>
      ),
    },
    {
      title: "Dana Dal rey",
      value: "content",
      content: (
        <div className="scale-[0.8] w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Dana Dal rey tab</p>
          <LanaContnet />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="scale-[0.8] w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Starboy tab</p>
          <StarboyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const StarboyContent = () => {
  return (
    <img
      src="https://i.pinimg.com/564x/d2/77/41/d27741d4689a4c9f0b42dc55f64b1b0b.jpg"
      alt="dummy image"
      className="object-cover object-left-bottom h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const LanaContnet = () => {
  return (
    <img
      src="https://i.pinimg.com/564x/51/37/9b/51379b267cb4651efd44d496053f7aac.jpg"
      alt="dummy image"
      className="object-cover object-left-bottom h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
