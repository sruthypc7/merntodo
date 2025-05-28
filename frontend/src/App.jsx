import Homescreen from "./screens/Homescreen"
import {Route,Routes}from "react-router-dom"

function App() {
 

  return (
      <>
      <Homescreen/>
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
      </Routes>
    </>

  )
  
}

export default App
