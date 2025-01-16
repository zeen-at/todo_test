import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { INewTodo } from "../../../types";


interface TodoState {
    todos: INewTodo[];
  }

  const initialState: TodoState = {
    todos: [],
  };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createATodo: (state, action: PayloadAction<INewTodo>) => {
      const newTodo: INewTodo = {
        id: uuidv4(),
        title: action.payload.title,
        date: action.payload.date,
        description: action.payload.description,
        createdby: action.payload.createdby,
        done: action.payload.done,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((event) => event.id === action.payload);
      if (index !== 1) {
        state.todos.splice(index, 1);
      }
    },
    editTodo: (state, action: PayloadAction<INewTodo>) => {
      const index = state.todos.findIndex((event) => event.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    updateTodo: (state, action: PayloadAction<INewTodo>) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index >= 0) {
          state.todos[index] = action.payload;
        }
      },
  },
});

export const { createATodo, deleteTodo, editTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
