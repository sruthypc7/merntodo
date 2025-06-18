import Homescreen from "./screens/Homescreen"
import { Route, Routes } from "react-router-dom"
import UpdateTodo from "./screens/updatetodo"
import LoginPage from "./screens/LoginPage"
import RegisterPage from "./screens/RegisterPage"


function App() {


  return (
    <>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Homescreen />} />
        <Route path="/edit/:id" element={<UpdateTodo />} />
      </Routes>
    </>

  );

}

export default App

