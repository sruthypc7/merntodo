import Homescreen from "./screens/Homescreen"
import {Route,Routes}from "react-router-dom"
import  UpdateTodo from "./screens/UpdateTodo";

function App() {
 

  return (
      <>
      
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/edit/:id" element={<UpdateTodo/>}/>
      </Routes>
    </>

  )
  
}

export default App

