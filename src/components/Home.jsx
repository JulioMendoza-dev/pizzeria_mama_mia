import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "../assets/pizzas";
import { Col } from "react-bootstrap";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { Container } from "react-bootstrap";

const Home = () => {
  const mapeoPizzas = pizzas.map((pizza) => {
    return (
      <Col key={pizza.id}>
        <CardPizza        
          pizza={pizza.id}
          nombre={pizza.nombre}
          precio={pizza.precio}
          ingredientes={pizza.ingredientes}
         />        
      </Col>
    );
  });

  return (
    <>
      <Header />
      <div className="fondo bg-success-subtle">
        <div className="container">
          {/* <Login /> */}
          {/* <Register /> */}

          <Container>{mapeoPizzas}</Container>
        </div>
      </div>
    </>
  );
};
export default Home;
