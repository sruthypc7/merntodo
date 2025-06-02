import Homescreen from "./screens/Homescreen"
import {Route,Routes}from "react-router-dom"

function App() {
 

  return (
      <>
      
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/edit/:id" element={<Updatetodo/>}/>
      </Routes>
    </>

  )
  
}

export default App
