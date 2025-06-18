import express from 'express'
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from '../controller/todoController.js'
import { protect } from '../middleware/authMiddleware.js'
const todoRoute = express.Router()



todoRoute.post('/', protect, createTodo)
todoRoute.get('/getTodos', protect, getTodos)
todoRoute.patch('/updateTodo', protect, updateTodo)
todoRoute.delete('/:id', protect, deleteTodo)
todoRoute.get('/getTodoById', protect, getTodoById)


export default todoRoute