


import "./RegisterPage.css"

 export default function RegisterPage()
{
    return (
    <>
      <button className="delete-btn">Logout</button>

    <div className="container">
        <div className="form-container">
          <form >
            <input type="text" placeholder="Enter your name"/>
              
            <input type="text" placeholder="Enter your Username"/>
            
            <input type="text" placeholder="Enter your password"/>

            <button type="submit">Submit</button>
           </form>
        </div>

    </div>
    
    </>
  )


}