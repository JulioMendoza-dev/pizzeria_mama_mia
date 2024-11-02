import Header from "./Header";
import CardPizza from "./Pizza";
import pizzas from "../assets/pizzas";
import { Col } from "react-bootstrap";
// import cartPizzas from "../assets/cartPizza";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
// import { useState } from "react";

const Home = () => {
  const [listadoPizzas, setListadoPizzas] = useState([]);
  useEffect(() => {
    console.log("hola api");
    fetch("http://localhost:5000/api/pizzas").then(async (response) => {
      const respuestaApi = await response.json()
      console.log(respuestaApi);
      setListadoPizzas(respuestaApi);
    });
  },[]);

  return (
    <>
      <Header />
      <div className="fondo bg-success-subtle ">
        <div className="container">
          {/* <Login /> */}
          {/* <Register /> */}

          <Container >
            {listadoPizzas.map((pizza) => {
              return (
                <Col key={pizza.id}>
                  <CardPizza
                    imagen={pizza.img}
                    pizza={pizza.id}
                    nombre={pizza.name}
                    descripcion={pizza.desc}
                    precio={pizza.price}
                    ingredientes={pizza.ingredients}
                  />
                </Col>
              );
            })}
          </Container>
        </div>
      </div>
    </>
  );
};
export default Home;
