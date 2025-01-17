import axios from "axios"
import { INewTodo } from "../../../types"

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const getTodos = async () => {
    const response = await todosApi.get("/todos")
    return response.data
}

export const addTodo = async (todo: INewTodo) => {
    return await todosApi.post("/todos", todo)
}

export const editTodo = async (todo: INewTodo) => {
    const response = await todosApi.patch(`/todos/${todo.id}`, todo)

    return response.data
}

export const removeTodo = async (id: string | number) => {
    const response = await todosApi.delete(`/todos/${id}`);
    return response;
}

export default todosApi 