import react from "react";
import { Button, Card } from "react-bootstrap";
// import PropTypes from "prop-types";
import pizzas from "../assets/pizzas";

const CardPizza = (props) => {
  
  const {nombre, precio, ingredientes} = props
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {new Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
            }).format(precio)}
          </Card.Text>
          <Card.Text>{ingredientes.map((i)=>{
            return <li key={i}>{i}</li>
          })}</Card.Text>
          <Button
            variant="primary"
            style={{ marRight: "20%", alignContent: "flex-end" }}
          >
            +
          </Button>
          <Button
            variant="warning"
            style={{ marLeft: "20%", alignContent: "flex-start" }}
          >
            -
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;
