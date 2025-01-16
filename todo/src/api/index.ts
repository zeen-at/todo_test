import axios from "axios"
import { INewTodo } from "../../types"

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

export const updateTodo = async (todo: INewTodo) => {
    return await todosApi.patch(`/todos/${todo.id}`, todo)
}

export const deleteTodo = async (id: string) => {
    const response = await todosApi.delete(`/todos/${id}`);
    return response;}

export default todosApi 