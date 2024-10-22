import React from "react";
import cartPizza from "../assets/cartPizza";

function Cart() {
  const { id, nombre, precio, cantidad } = cartPizza;
  const mapeoCartPizza = cartPizza.map((compra) => {
    return 
 
  });
  return (
    <>
      <div>
        <li>{cartPizza.id}</li>
        <li>{cartPizza.nombre}</li>
        <li>{cartPizza.precio}</li>
        <li>{cartPizza.cantidad}</li>
      </div>
    </>
  );
}

export default Cart;
