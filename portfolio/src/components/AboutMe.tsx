"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import React from "react";
const Introduction = `Hello! I'm Atharva
Raj Singh Thakur, a passionate Programer based in Indore. With a keen
eye for detail and a love for creativity, I strive to [Briefly describe
your mission or goal].`;

const AboutMe: React.FC = () => {
  return (
    <div className="bg-sexyBlack text-white flex flex-col px-10 pb-10">
      <h2 className="pt-10 text-6xl font-bold">About Me</h2>
      <p>
        <strong className="font-black">Introduction:</strong>
        <TextGenerateEffect words={Introduction} />
        {/* Hello! I'm Atharva
        Raj Singh Thakur, a passionate Programer based in Indore. With a keen
        eye for detail and a love for creativity, I strive to [Briefly describe
        your mission or goal]. */}
      </p>
      {/* <p>
        <strong>Background:</strong> I have [X years] of experience in [Your
        Field], specializing in [Your Specialization]. My journey has led me to
        work on projects ranging from [Describe notable projects or
        achievements].
      </p>
      <p>
        <strong>Skills:</strong>
        <ul>
          <li>Technical Skills: Proficient in [List technical skills].</li>
          <li>
            Soft Skills: Known for my [Soft skill 1], [Soft skill 2], and [Soft
            skill 3].
          </li>
        </ul>
      </p>
      <p>
        <strong>Approach:</strong> I believe in [Your Philosophy or Approach].
        My work is driven by a combination of [Describe your approach to work].
      </p>
      <p>
        <strong>Passion:</strong> Outside of work, you can find me [Hobbies or
        interests]. I draw inspiration from [What inspires you] and believe that
        [Personal belief or motto].
      </p>
      <p>
        <strong>Vision:</strong> My vision is to [Your Vision or Goal]. I am
        dedicated to [How you plan to achieve your vision].
      </p> */}
    </div>
  );
};

export default AboutMe;
