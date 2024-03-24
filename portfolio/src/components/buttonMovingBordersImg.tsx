"use client";
import React from "react";
import { Button } from "./ui/moving-border";

interface MovingBorderBtnProps {
  buttonText: string;
  imageSrc: string; // Add image source prop
}

export function MovingBorderBtnImg({
  buttonText,
  imageSrc,
}: MovingBorderBtnProps) {
  return (
    <div>
      <Button
        innerPadding="10px"
        borderRadius="5rem"
        className="bg-white dark:bg-sexyBlack text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <img src={imageSrc} alt={buttonText} /> {/* Replace text with image */}
      </Button>
    </div>
  );
}
