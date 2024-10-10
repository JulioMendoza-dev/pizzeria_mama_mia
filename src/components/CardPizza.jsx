import { Button, Card } from "react-bootstrap"
import PropTypes from "prop-types"

const CardPizza = ({pizza}) => {
    const {nombre, precio, ingredientes} = pizza

  return (
    <>
      <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
              {new Intl.NumberFormat('es-CL',{style:'currency', currency:'CLP'}).format(
              precio)}
          </Card.Text>
          <Card.Text>{ingredientes}</Card.Text>
              <Button variant="primary" style={{marRight:"20%", alignContent:"flex-end"}}>+</Button>
              <Button variant="warning" style={{marLeft:"20%", alignContent:"flex-start"}}>-</Button>
      </Card.Body>
      </Card>
    </>
  )
}

  CardPizza.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.string,
        nombre: PropTypes.string,
        precio: PropTypes.number,
        ingredientes: PropTypes.string,

    })

}

export default CardPizza