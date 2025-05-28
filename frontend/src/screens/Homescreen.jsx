import React from 'react'
import './Homescreens.css'
import{useState} from "react";
import instance from '../axios';

function Homescreen() {
  // let [state,updateState] = useState(initialValue)

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [todos,setTodos]=useState([])

  
  let getTodos=async()=>{
    let response=await instance.get("/getTodos")
    setTodos(response.data);
    
  };
  getTodos();

  const submitHandler = async (e) => {
    e.preventDefault();
    await instance.post("/",{title,description});
  };

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
                <button className="delete-btn">Delete</button>
                {!todo.status && <button className="edit-btn">Edit</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
  

}

export default Homescreen

