"use client";

import { ChangeEvent, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { update } from "../../../lib/features/counter/todosSlice";

// import styles from "./Counter.module.css";

export const Input = () => {
  const [data, setData] = useState("")
  const dispatch = useAppDispatch()
  let todos = useAppSelector((state) => state.todos)

  // console.log(update)

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  const recheck = () => {
    if (data.length > 0) {
      dispatch(update({ data: data, todos: todos.todos }))
    } else {
      return 0
    }
  }

  return (
    <div className="inputContainer">
        <div>
            <button onClick={() => {recheck()}} className="button">+</button>
        </div>
        <div>
            <input className="input" type="text" value={data} onChange={(e) => change(e)}/>
        </div>
    </div>  
  );
};
