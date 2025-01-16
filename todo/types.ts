import React from "react";




export interface IButton {
  handleClick: () => void;
  title: string;
}

export interface ICard {
  title: string;
  subtitle: string;
  progress: string;
}

export interface ITodo {
    done: boolean;
    title: string;
    date: string;
    description: string;
    createdby: string;
}

export interface INewTodo {
    done: boolean;
    id: string;
    title: string;
    date: string;
    description: string;
    createdby: string;
}

export interface DateTimeFormatOptions {
  hour?: "2-digit" | "numeric";
  minute?: "2-digit" | "numeric";
  hour12?: boolean;
}
export interface IForm {
  error?: string;
  title: string;
  placeholder: string;
  value: string;
  type: "text" | "email" | "date" | "number" | "time";
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e:React.FocusEvent<HTMLInputElement>) => void;
  otherStyles?: string;
  otherTextStyles?: string;
}


export type IHeader = {
  title: string;
};

export interface ITask {
  date: Date;
  title: string;
  subtitle: string;
  id: string;
}

export interface TodoType {
    todos: INewTodo[],
    createTodo: (todo: INewTodo) => void;
    updateTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}