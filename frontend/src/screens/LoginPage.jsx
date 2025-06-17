
import "./Loginpage.css"
import { useState } from "react";
import {useLoginUserMutation} from "../slices/UserApiSlice";
import { data, useNavigate } from "react-router-dom";
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
      <button className="delete-btn">Logout</button>

      <div className="container">
        <div className="form-container">
          <form 
          onSubmit={LoginHndler}>
            <input type="text" placeholder="Enter your Email id"value={email}
              
              onChange={(e) => setEmail(e.target.value)} />
            
            
            <input type="text" placeholder="Enter your password" value={password}
              
              onChange={(e) => setPassword(e.target.value)} />
           

            <button className="bttn" type="submit" >Submit</button>
           </form>
        </div>

    </div>
    </>
  )


}
export default LoginPage