import Todos from "../models/todoModel.js";
let createTodo = async (req, res) => {

    try {
        let todo = await Todos.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId
        })
        res.json(todo)
    }
    catch (error) {
        console.log(error)
    }


}
let getTodos = async (req, res) => {
    try {
        let todos = await Todos.find({ userId: req.query.userId })
        res.json(todos);
    }
    catch (error) {
        console.log(error);
    }
};

const deleteTodo = async (req, res) => {
    //console.log(req.params.id)
    try {

        const deletedTodo = await Todos.findByIdAndDelete(req.params.id)
        if (!deletedTodo) {
            return res.status(404).json({ message: 'todo is not found' })
        }
        return res.json({ message: 'deleted todo document' })
    } catch (error) {
        console.log(error)
    }
}
const getTodoById = async (req, res) => {
    try {
        let { id } = req.query
        const todo = await Todos.findById(id)
        res.json(todo)
    }
    catch (error) {
        console.log(error)
    }
}


const updateTodo = async (req, res) => {
    // console.log(req.query.id)
    try {
        console.log(req)
        let { title, description, iscompleted } = req.body
        const updatedTodo = await Todos.findByIdAndUpdate(req.body.id, { title, description, iscompleted })
        if (!updatedTodo) {
            return res.status(404).json({ message: 'todo is not found' })
        }
        return res.json({ message: 'updated todo document successfully' })

    }
    catch (error) {
        console.log(error)
    }

}
export { createTodo, getTodos, deleteTodo, updateTodo, getTodoById }