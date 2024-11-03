import Header from "../Header";
import Pizza from "./Pizza";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

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
    <Navbar/>
      <Header />
      <div className="fondo bg-success-subtle ">
        <div className="container ">
          <Container >
            {listadoPizzas.map((pizza) => {
              return (
                <Row >
                <Col key={pizza.id}>
                  <Pizza 
                    imagen={pizza.img}
                    pizza={pizza.id}
                    nombre={pizza.name}
                    descripcion={pizza.desc}
                    precio={pizza.price}
                    ingredientes={pizza.ingredients}
                  />
                </Col>
              </Row>

              );
            })}
          </Container>
        </div>
      </div>
    </>
  );
};
export default Home;
