"use client";

import { ChangeEvent, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import styles from "./Counter.module.css";

export const Input = () => {
  return (
    <div className="inputContainer">
        <div>
            <button className="button">+</button>
        </div>
        <div>
            <input className="input" type="text" value={data} onChange={(e) => change(e)}/>
        </div>
    </div>
  );
};
