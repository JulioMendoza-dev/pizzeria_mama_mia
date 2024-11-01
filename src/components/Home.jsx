import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "../assets/pizzas";
import { Col } from "react-bootstrap";
// import cartPizzas from "../assets/cartPizza";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { Container } from "react-bootstrap";
// import { useState } from "react";

const Home = () => {
  // const [cart, setCart] = useState([])
  // const addToCart = (cartPizza) => {
  //     setCart((anterior)=>[...anterior, cartPizza])
  // }

  const mapeoPizzas = pizzas.map((pizza) => {
    return (
      <Col key={pizza.id}>
        <CardPizza        
          pizza={pizza.id}
          nombre={pizza.nombre}
          precio={pizza.precio}
          ingredientes={pizza.ingredientes}
          // addToCart={addToCart}
         />        
      </Col>
    );
  });

  return (
    <>
      <Header />
      <div className="fondo bg-success-subtle " >
        <div className="container">
          {/* <Login /> */}
          {/* <Register /> */}

          <Container>{mapeoPizzas}</Container>
          {/* {cart.map(cartPizza=><li key={id} >{cartPizza.nombre}</li>)} */}
        </div>
      </div>
    </>
  );
};
export default Home;
