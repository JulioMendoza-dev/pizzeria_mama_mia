import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Cart = () => {
  const { cart, decreaseQuantity, getTotalPrice, increaseQuantity } = useContext(CartContext);

  return (
    <div className="fondo bg-light">
      <Container>
        <h2>Mi Carrito</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <Row xs={1} sm={2} md={3} lg={3} xl={3} className="g-4">
            {cart.map((item) => (
              <Col key={item.id}>
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text >Cantidad: {item.cantidad}</Card.Text>
                    <div style={{}}>
                    <Button
                      variant="danger"
                      onClick={() => decreaseQuantity(item.id)} // Eliminar del carrito
                    >
                      Quitar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => increaseQuantity(item.id)} // Eliminar del carrito
                    >
                      Agregar
                    </Button>

                    </div>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        <div>
          <h4>Total de la compra: ${getTotalPrice()}</h4> {/* Mostrar el total de la compra correctamente */}
        </div>
      </Container>
    </div>
  );
};

export default Cart;