import React, { useEffect, useState } from 'react'
import './UpdateTodo.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetTodoByIdQuery, useUpdateTodoMutation, useGetTodosQuery } from '../slices/todoApiSlice';

function UpdateTodo() {


  const { id } = useParams()
  const { data: todo, refetch } = useGetTodoByIdQuery({ id });
  const { data, refetch: getTodos } = useGetTodosQuery();
  const [UpdateTodo] = useUpdateTodoMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (todo) {
      setTitle(todo.title)
      setDescription(todo.description)
      setIsCompleted(todo.iscompleted)
    }
  }, [todo])




const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [iscompleted, setIsCompleted] = useState(false)

const submitHandler = async (e) => {
  try {
    e.preventDefault()
    let response = await UpdateTodo({ title, description, iscompleted, id });
    refetch()
    getTodos()
    navigate('/')
  }
  catch (error) {
    console.log(error)
  }
}






return (
  <>
    <div className="edit-container">
      <form className="edit-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={5}
          cols={10}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <select
          value={iscompleted.toString()}
          onChange={(e) => setIsCompleted(e.target.value === "true")}

        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>

        <button type="submit">Edit</button>
      </form>
    </div>
  </>
)
}


export default UpdateTodo