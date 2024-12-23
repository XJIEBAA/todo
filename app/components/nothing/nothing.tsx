"use client";

import { useState } from "react";

import Image from "../../../public/idle.png"

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import styles from "./Counter.module.css";

export const Nothing = () => {
  return (
    <div>
      <div className="containerNothing">
        <img src={String(Image.src)} style={{ width: "80%" }} />
        <div className="reminder">
          What else we can do today?
        </div>
        <div className="pretext">
        Enjoy the rest of your day and don't forget to share your #TodoistZero awesomeness
        </div>
      </div>
    </div>
  );
};
