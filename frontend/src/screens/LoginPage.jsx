
import "./Loginpage.css"
import { useState } from "react";
import {useLoginUserMutation} from "../slices/UserApiSlice";
import { data, useNavigate,Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useEffect } from "react";
  
  


  function LoginPage()
  
{
  const {userData}=useSelector((state)=>state.auth)
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [LoginUser] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch=useDispatch()




  const LoginHndler  = async (e) => {
    e.preventDefault();
    try {
      let data=await LoginUser({email,password}).unwrap();
      await dispatch(setCredentials({...data}))
      navigate("/");
    }
    catch (error) {
      console.log(error?.data?.message || error?.message);
      
    }
    
  };
  useEffect(()=>{
    if(userData){
      navigate("/")
    }
  },[])

    return (
    <>
      <div className="container1">
        <h1>Login</h1>
        <div className="form-container2">
          <form 
          onSubmit={LoginHndler}>
            <input type="text" className="input1" placeholder="Enter your Email id"value={email}
              
              onChange={(e) => setEmail(e.target.value)} /><br></br>
            
            
            <input type="text"className="input2" placeholder="Enter your password" value={password}
              
              onChange={(e) => setPassword(e.target.value)} /><br></br>
           

            <button className="bttn" type="submit" >Submit</button>
            
           </form>
            <p className="login-link">
          Don't have an account? <Link to="/register" className="linkredirect">Register Now!</Link>
        </p>
        </div>

    </div>
    </>
  )


}
export default LoginPage