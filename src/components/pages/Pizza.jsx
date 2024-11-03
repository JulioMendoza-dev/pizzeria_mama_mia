import { Button, Card } from "react-bootstrap";
// import PropTypes from "props-types";

const Pizza = (props) => {
  const { imagen, nombre, descripcion, precio, ingredientes } = props;
  return (
    <>
      <Card>
        <Card.Img src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Title>{descripcion}</Card.Title>
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

export default Pizza;
