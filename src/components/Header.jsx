import React from "react"
function Header() {
 
    return (
    <>
      <div className="titulo-comentario text-center pb-3" 
        style={{
        width:"100%",
        height:"400px",
        backgroundImage:`url(/pizza-header-2.jpg)`,
        backgroundSize:'cover',
        color:"white"
        }}>
      <h1 style={{fontSize:"3em", paddingTop:"90px"}}>___Pizzeria Mamma Mia___</h1>   
      <br />
      <p style={{fontSize:"2em", paddingTop:"30px"}}>¡Tenemos las mejores pizzas que puedes encontrar!</p>
      <hr />
      </div>
    </>
  )
}

export default Header




