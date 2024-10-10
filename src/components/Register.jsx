import React, { useState } from "react";

function Register() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPassword2, setInputPassword2] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const handleInpuEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };
  const handleInputPassword2 = (e) => {
    setInputPassword2(e.target.value);
  };

  const handleForm = () => {
    if (!inputEmail.includes("@")) {
      alert("el correo debe incuir un @");
      return;
    }
    if (inputUsername.length < 6) {
      alert(
        "el nombre de usuario debe tener mas de 6 caracteres y solo letras"
      );
      return;
    }
    if (inputPassword.length < 6) {
      alert("la contraseña debe mas de 8 caracteres");
      return;
    }
    if (!inputPassword2 === inputPassword) {
      alert("las contraseñas deben ser iguales");
      return;
    }
    if (
      inputEmail === "" ||
      inputUsername === "" ||
      inputPassword === "" ||
      inputPassword2 === ""
    ) {
      alert("todos los campos deben ser completados");
    }
    alert("te has registrado con exito!");
    setRegistrado(true);
  };

  return (
    <>
      {!registrado ? (
        <div
          className="container"
          style={{ height: "350px", width: "80%", marginBottom: "7%" }}
        >
          <h3 style={{ textAlign: "center", marginTop: "30px" }}>Register</h3>

          <form className="form " style={{ height: "450px" }}>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                onChange={handleInpuEmail}
              />
              <div id="emailHelp" className="form-text">
                Tus datos no seran compartidos.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">
                User name
              </label>
              <input
                type="string"
                className="form-control"
                id="inputUsername"
                onChange={handleInputUsername}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                onChange={handleInputPassword}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword2" className="form-label">
                Repeat Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                onChange={handleInputPassword2}
              />
            </div>
            <button className="btn btn-primary" onClick={handleForm}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>
            Gracias por registrarte con nosotros {inputUsername}
          </h1>
        </>
      )}
    </>
  );
}

export default Register;
