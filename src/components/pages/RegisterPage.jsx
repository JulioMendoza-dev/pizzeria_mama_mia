import React,{ useState } from 'react'

function RegisterPage() {
    const [inputEmail, setInputEmail] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPassword2, setInputPassword2] = useState("");
    // const validarInput = (e) => {
    //     e.preventDefault(); //para evitar que recargue la pagina

    //     // if (inputEmail.includes("@")){
    //     //     alert("formato de correo es incorrecto!")
    //     //     setError(true)
    //     // }

    //     // if (inputEmail === "" || inputPassword === "" || InputPassword2 === ""){
    //     //     setError(true)
    //     //     return
    //     // }
    //     // setError(false)
    //     // setInputEmail("");
    //     // setInputPassword("");
    //     // setInputPassword2("");
    // }
    const handleInpuEmail = (e) =>{ setInputEmail(e.target.value)}
    const handleInputUsername = (e) =>{ setInputUsername(e.target.value)}
    const handleInputPassword = (e) =>{ setInputPassword(e.target.value)}
    const handleInputPassword2 = (e) =>{setInputPassword2(e.target.value)}
  return (
    <div className='container' style={{height:"350px", width:"80%" }}>

        <h3 style={{textAlign:"center", marginTop:"30px"}} >Register</h3>

    <form className="form " style={{height:"450px", paddingBottom:"20px"}} >

        <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input 
            type="email" 
            className="form-control" id="inputEmail" onChange={handleInpuEmail}/>
            <div id="emailHelp" className="form-text">Tus datos no seran compartidos.</div>
        </div>

        <div className="mb-3">
            <label htmlFor="inputUsername" className="form-label">User name</label>
            <input type="password" className="form-control" id="inputUsername" onChange={handleInputUsername} />
        </div>

        <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" onChange={handleInputPassword} />
        </div>
        
        <div className="mb-3">
            <label htmlFor="inputPassword2" className="form-label">Repeat Password</label>
            <input type="password" className="form-control" id="inputPassword2" onChange={handleInputPassword2}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>        
    </form>
    </div>
  )
}

export default RegisterPage