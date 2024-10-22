import { Button, Card } from "react-bootstrap";
import cartPizzas from "../assets/cartPizza";
// import PropTypes from "props-types";

const CardPizza = (props) => {
  const { nombre, precio, ingredientes } = props;
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
          <Card.Text>
            {ingredientes.map((i) => {
              return <li key={i}>{i}</li>;
            })}
          </Card.Text>
          <Button
            variant="primary"
            style={{ marRight: "20%", alignContent: "flex-end" }}
            // onClick={()=> add(cartPizzas)}
          >
            agregar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

// CardPizza.prototype = {
//     propTypes.shape{(
//     id: propTypes.string,
//     nombre: propTypes.string,
//     precio: propTypes.number,
//     cantidad: propTypes.number
//   })
// }

export default CardPizza;

