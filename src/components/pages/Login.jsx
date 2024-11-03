import React, { useState } from "react";
import Navbar from "../Navbar";


function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputEamail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const camposRellenos = () => {
    if ((inputEmail === "") & (inputPassword === "")) {
      alert("rellena los campos");
    }
  };

  return (
    
    <div style={{ textAlign: "center"}}>
      <Navbar/>
      <h3>Login</h3>
      <hr />

      <form className="form pb-3" >
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            style={{width:"70%", margin:"auto"}}
            type="email"
            placeholder="Enter your email"
            className="form-control"
            id="inputEmailLogin"
            onChange={handleInputEamail}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
           style={{width:"70%", margin:"auto"}}
            type="password"
            placeholder="Enter your password"
            className="form-control"
            id="inputPasswordLogin"
            onChange={handleInputPassword}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={camposRellenos}
        >
          Login{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
