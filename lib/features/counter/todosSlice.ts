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
    update: create.reducer((state, action: PayloadAction<number>) => {
      console.log(action.payload)
    })
  }),
  selectors: {
    selectCount: (todos) => todos.value,
    selectTodos: (todos) => todos.todos,
  },
});

export const { update } =
todosSlice.actions;

export const { selectCount, selectTodos } = todosSlice.selectors;
