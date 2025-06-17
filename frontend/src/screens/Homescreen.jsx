import './Homescreens.css'
import { useState, useEffect } from "react";
import instance from '../axios';
import { useNavigate } from 'react-router-dom';
import { useGetTodosQuery,useCreateTodoMutation,useDeleteTodoMutation } from '../slices/todoApiSlice';

import { useSelector } from 'react-redux';




function Homescreen() {
  // let [state,updateState] = useState(initialValue)

  const{userData}=useSelector((state)=>state.auth);

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const navigate = useNavigate();

  const { data: todos, refetch } = useGetTodosQuery();
  const [createTodo]=useCreateTodoMutation();
  const [deleteTodo]=useDeleteTodoMutation();


  const submitHandler = async (e) => {
    try{
      e.preventDefault();
      await createTodo({title,description});
      setTitle("");
      setDescription("");
        refetch();
    }
    catch(error){
      console.log(error)

    }
  };
  let deletehandler = async (id) => {

    try{
      await deleteTodo(id)
    refetch();
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>
  {
    if(!userData){
      navigate("/login")
    }
  },[])

  return (
    <>
      <button className="delete-btn">Logout</button>

      <div className="container">
        <div className="form-container">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              rows={5}
              cols={10}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit">Add</button>
          </form>
        </div>

        <div className="todos-container">
          {todos?.map((todo) => (
            <div className="box todo-card" key={todo._id}>
              <h1 className={todo.status ? "completed" : "todo-title"}>
                {todo.title}
              </h1>
              <p className="todo-description">{todo.description}</p>
              <div className="button-group">
                <button className="delete-btn" onClick={() => deletehandler(todo._id)}>Delete</button>
                {!todo.status && <button className="edit-btn" onClick={() => navigate(`/edit/${todo._id}`)}>Edit</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )


}

export default Homescreen

