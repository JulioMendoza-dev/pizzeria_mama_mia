import React from 'react'

function CardPizza(props) {
 const {imagen, name, ingredients,price } = props 
  return (
    <>
      <div className="card text-white p-2 bg-success">
        <img  src={imagen} className="card-img-top mt-2 bg-white" />
        <div className="card-body bg-success text-center ">
          <h4 className="card-title text-white m-3 text-center ">{name}</h4>
          <p className="card-text text-white">{ingredients}</p>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item bg-success text-center text-white">Mediana  ${price}</li>
        </ul>
        <div className="card-body ">
          <button type="button" class="btn btn-primary border-white">añadir al carrito</button>
        </div>
      </div>
    </>
  )
}

export default CardPizza