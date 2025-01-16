'use client';

import React, { createContext, useContext, useState } from 'react';
import { INewTodo, TodoType } from '../../../types';
import { v4 as uuidv4 } from "uuid";


const defaultContextValue: TodoType = {
    todos: [],
    createTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {}
};

export const TodoContext = createContext<TodoType>(defaultContextValue);

const useTodoContext = () => useContext(TodoContext);


const TodoProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

    const [todos, setTodos] = useState<INewTodo[]>([]);

    const createTodo = (todo: INewTodo) => {
        const newTodo: INewTodo = {
            id: uuidv4() as string, 
            title: todo.title,
            date: todo.date,
            createdby: todo.createdby,
            description: todo.description,
            done: todo.done,
          };
          setTodos([...todos, newTodo])

    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((item) => item.id !== id))
    }


    const updateTodo = () => {}

    return (
       <TodoContext.Provider value={{todos, createTodo, updateTodo, deleteTodo}}>
       {children}
       </TodoContext.Provider>

    );
}

export   {TodoProvider, useTodoContext};