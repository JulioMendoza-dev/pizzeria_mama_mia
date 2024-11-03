import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalCarro, setTotalCarro] = useState(0);

  useEffect(() => {
    clacularTotal();
  });

  const clacularTotal = () => {
    let total = 0;

    cart.forEach((itemDelCarro) => {
      total += itemDelCarro.precio * itemDelCarro.cantidad;
    });

    console.log(total);
    setTotalCarro(total);
  };

  const sumarCantidad = (id) => {
    const newCarrito = cart.map((itemDelCarro) => {
      if (itemDelCarro.id === id) {
        itemDelCarro.cantidad = itemDelCarro.cantidad + 1;
      }
      return itemDelCarro;
    });
    setCart(newCarrito);
  };

  const restarCantidad = (id) => {
    const newCarrito = cart
      .map((itemDelCarro) => {
        if (itemDelCarro.id === id) {
          itemDelCarro.cantidad = itemDelCarro.cantidad - 1;
        }
        return itemDelCarro;
      })
      .filter((itemDelCarrito) => {
        return itemDelCarrito.cantidad > 0;
      });
    setCart(newCarrito);
  };

  return (
    <>
    <Navbar/>
    
      <div>
        <div>
          <label htmlFor="">Total de la compra: {totalCarro}</label>
        </div>
        {cart.map((itemDelCarro) => {
          return (
            <>
              <img src="" />
              <label>Nombre: {itemDelCarro.nombre}</label>
              <label>Precio: {itemDelCarro.precio}</label>
              <label>Cantidad: {itemDelCarro.cantidad}</label>
              <div>
                <input
                  type="button"
                  value="+"
                  onClick={() => sumarCantidad(itemDelCarro.id)}
                />
                <input
                  type="button"
                  value="-"
                  onClick={() => restarCantidad(itemDelCarro.id)}
                />
              </div>
              <br />
            </>
          );
        })}
        <div>
          <input type="button" value="Continuar con la compra" />
        </div>
      </div>
    </>
  );
}

export default Cart;
