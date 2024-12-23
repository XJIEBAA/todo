import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface todosSliceState {
  value: number;
  todos: [];
}

const initialState: todosSliceState = {
  value: 0,
  todos: []
};

export const todosSlice = createAppSlice({
  name: "todos",
  initialState,
  reducers: (create) => ({
    update: create.reducer((state, action) => {
      state.todos = [...action.payload.todos, {
        text: action.payload.data,
        time: new Date().toDateString()
      }]
    }),
    remove: create.reducer((state, action) => {
      state.todos = action.payload.todos.filter(item => item.text !== action.payload.item.text)
    })
  }),
  selectors: {
    selectCount: (todos) => todos.value,
    selectTodos: (todos) => todos.todos,
  },
});

export const { update, remove } = todosSlice.actions;

export const { selectCount, selectTodos } = todosSlice.selectors;
