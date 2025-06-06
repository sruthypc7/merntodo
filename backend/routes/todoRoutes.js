import express from 'express'
import { createTodo,deleteTodo,getTodoById,getTodos, updateTodo } from '../controller/todoController.js'
const todoRoute = express.Router()



todoRoute.post('/',createTodo )
todoRoute.get('/getTodos', getTodos)
todoRoute.patch('/updateTodo',updateTodo)
todoRoute.delete('/:id',deleteTodo)
todoRoute.get('/getTodoById',getTodoById)


export default todoRoute