import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
  const [listadoPizzas, setListadoPizzas] = useState([]);
  const { addToCart } = useContext(CartContext); // Usamos el contexto para acceder a la función de agregar al carrito

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setListadoPizzas(data));
  }, []);

  return (
    
    <div className="fondo bg-success-subtle">
      <div className="container">
        <Container >
          <Row xs={1} sm={2} md={3} lg={3} xl={3} className="g-4">
            {listadoPizzas.map((pizza) => (
              <Col key={pizza.id}>
                <Card>
                  <Card.Img variant="top" src={pizza.img} />
                  <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>{pizza.desc}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => addToCart(pizza)} // Agregamos la pizza al carrito cuando se hace click
                    >
                      Agregar al carrito
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
