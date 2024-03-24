"use client";
import React from "react";
import { Button } from "./ui/moving-border";

interface MovingBorderBtnProps {
  buttonText: string;
}

export function MovingBorderBtnTxt({ buttonText }: MovingBorderBtnProps) {
  return (
    <div>
      <Button
        innerPadding="10px 20px"
        borderRadius="2rem"
        className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {buttonText}
      </Button>
    </div>
  );
}
