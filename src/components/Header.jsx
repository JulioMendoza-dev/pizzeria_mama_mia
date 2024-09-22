import React from "react"
function Header() {
 
    return (
    <>
      <div className="titulo-comentario text-center pb-3" 
      style={{
       width:"100%",
       height:"300px",
       backgroundImage:`url(/pizza-header-2.jpg)`,
       backgroundSize:'cover'
       }}>

        <h1>___Pizzeria Mamma Mia___</h1>   
        <br />
        <p>¡Tenemos las mejores pizzas que puedes encontrar!</p>
      </div>
    </>
  )
}

export default Header




