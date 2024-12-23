"use client";

import { ChangeEvent, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { remove } from "../../lib/features/counter/todosSlice";
// import styles from "./Counter.module.css";

export const Todos = () => {
  let todos = useAppSelector((state) => state.todos).todos
  let dispatch = useAppDispatch()

  console.log(todos)

  return (
    <div className="todos">
        {todos.map((item, key) => {
          console.log(item)
          return (
            <div className="containerTodo">
              <div className="round" onClick={() => dispatch(remove({key: key, item: item, todos: todos}))}></div>
              <div className="containerText">
                <div className="text">{item.text}</div>
                <div className="date">{item.time}</div>
              </div>
            </div>
          )
        })}
    </div>
  );
};
