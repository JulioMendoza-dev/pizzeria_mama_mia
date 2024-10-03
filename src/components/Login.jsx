import React,{ useState } from 'react'

function Login() {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleInputEamail = (e)=>{ setInputEmail(e.target.value)}
    const handleInputPassword = (e)=>{ setInputPassword(e.target.value)}

    const camposRellenos = ()=> {
      if(inputEmail === "" & inputPassword ===""){
          alert("rellena los campos")
      }
    }

  return (
  <div>
    
    <h3 style={{textAlign:"center", paddingTop:"20px"}}>Login</h3>
    <hr />  

    <form className="form mb-3">
    <div className="mb-3">
      <label htmlFor="inputEmail" className="form-label">Email address</label>
      <input type="email" placeholder="Enter your email" className="form-control" id="inputEmail" onChange={handleInputEamail} aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="inputPassword" className="form-label">Password</label>
      <input type="password" placeholder="Enter your password" className="form-control" id="inputPassword" onChange={handleInputPassword}/>
    </div>
   
    <button type="submit" className="btn btn-primary" onClick={camposRellenos}>Login </button>
    </form>

  </div>
  )
}

export default Login