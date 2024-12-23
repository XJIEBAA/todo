"use client";

import { useState } from "react";

import Image from "../../../public/idle.png"


import { useAppDispatch, useAppSelector } from "@/lib/hooks";


// import styles from "./Counter.module.css";

export const Nothing = () => {
  let todos = useAppSelector((state) => state.todos).todos

  return (
    <div>
      {todos.length == 0 ? (
        <div className="containerNothing">
          <img src={String(Image.src)} style={{ width: "80%" }} />
          <div className="reminder">
            What else we can do today?
          </div>
          <div className="pretext">
          Enjoy the rest of your day and don't forget to share your #TodoistZero awesomeness
          </div>
        </div>
      ) : null}
    </div>
  );
};
