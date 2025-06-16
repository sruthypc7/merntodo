
import "./Loginpage.css"



 function LoginPage()
{
    return (
    <>
      <button className="delete-btn">Logout</button>

      <div className="container">
        <div className="form-container">
          <form >
            <input type="text" placeholder="Enter your Email id"/>
            
            
            <input type="text" placeholder="Enter your password"/>
           

            <button class="bttn" type="submit" >Submit</button>
           </form>
        </div>

    </div>
    </>
  )


}
export default LoginPage