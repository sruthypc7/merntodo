import { useState } from "react";
import "./RegisterPage.css"
import { useRegisterUserMutation } from "../slices/UserApiSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [registerUser] = useRegisterUserMutation();

  const navigate = useNavigate();


  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      let data = await registerUser({ name, email, password }).unwrap();
      navigate("/login");
    }
    catch (error) {
      console.log(error?.data?.message || error?.message);

    }
  };
  return (
    <>


      <div className="container">
        <div className="form-container">
          <h3>Register page</h3>
          <form onSubmit={registerHandler} >
            <input type="text" placeholder="Enter your name" value={name}
              onChange={(e) => setName(e.target.value)} />

            <input type="text" placeholder="Enter your Email id" value={email}
              
              onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter your password" value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="btn2">Submit</button>
          </form>
        </div>

      </div>

    </>
  )


}
