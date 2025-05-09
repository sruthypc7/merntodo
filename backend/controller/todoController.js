import Todos from "../models/todoModel.js";
let createTodo=async (req, res) => {
    console.log(req.body);
    try {
        let todo = await Todos.create({
            title: req.body.title,
            description: req.body.description
        })
        res.json(todo)
    }
    catch (error) {
        console.log(error)
    }


}
let getTodos=async (req, res) => {
    try {
        let todos = await Todos.find()
        console.log(todos);
        res.json(todos);
    }
    catch (error) {
        console.log(error);
    }
}
export{createTodo,getTodos}