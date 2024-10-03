import React from 'react'

function CardPizza(props) {
 const {imagen, name, ingredients,price } = props 
 const sesion = false
  return (
    <>
      <div className="card text-white p-2 bg-success">
        <img  src={imagen} className="card-img-top mt-2 bg-white" />
        <div className="card-body bg-success text-center ">
          <h4 className="card-title text-white m-3 text-center ">{name}</h4>
          <p className="card-text text-white"><h4>Ingredientes :   {ingredients}</h4></p>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item bg-warning text-center text-black"><h4>Precio  = ${price}</h4></li>
        </ul>
        {sesion ? <div className="card-body">
                    <button type="button" class="btn btn-primary border-white "><h4><strong>Comprar </strong></h4></button>
                  </div>
                : <div className="card-body ">
                    <button type="button" class="btn btn-primary border-white">Iniciar Sesion</button>
                  </div>}  
      </div>
    </>
  )
}

export default CardPizza