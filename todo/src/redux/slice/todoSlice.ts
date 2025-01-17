import todosApi, { addTodo, getTodos, removeTodo } from "@/services/api";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { INewTodo } from "../../../types";

interface TodoState {
  todos: INewTodo[];
}

const initialState: TodoState = {
  todos: [],
};

export const fetchTodosAync = createAsyncThunk("todos/fetchTodos", async () => {
  const data = await getTodos();
  return data;
});

export const createTodosAync = createAsyncThunk(
  "todos/createTodo",
  async (todo: INewTodo) => {
    const data = await addTodo(todo);
    return data.data;
  }
);

export const updateTodosAync = createAsyncThunk(
  "todos/updateTodo",
  async (todo: INewTodo) => {
    const response = await todosApi.patch(`/todos/${todo.id}`, todo);
    return response.data;
  }
);
export const deleteTodosAync = createAsyncThunk(
  'todos/remove',
  async (id: string | number) => {
    try {
      const response = await todosApi.delete(`/todos/${id}`);
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
);

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
        // createdby: action.payload.createdby,
        done: action.payload.done,
        category: action.payload.category
        
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(
        (event) => event.id === action.payload
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    editTodo: (state, action: PayloadAction<INewTodo>) => {
      const index = state.todos.findIndex(
        (event) => event.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    updateTodo: (state, action: PayloadAction<INewTodo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index >= 0) {
        state.todos[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAync.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(fetchTodosAync.pending, (state, action) => {
      console.log("Fetching data...");
    });
    builder.addCase(createTodosAync.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(updateTodosAync.fulfilled, (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index >= 0) {
        state.todos[index] = { ...state.todos[index], ...action.payload };
      }
    });    

    builder.addCase(deleteTodosAync.fulfilled, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);

    });
  },
});

export const { createATodo, deleteTodo, editTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
