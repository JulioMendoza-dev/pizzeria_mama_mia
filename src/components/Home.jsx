import React from 'react-boostrap'
import Header from "./Header"
import CardPizza from "./CardPizza"
import Row from './Row'
import pizzas from "../assets/pizzas"

function Home() {
  const mapeoPizzas = pizzas.map((pizza) =>{
    return( 
      <Col key={pizza.id}>
          <CardPizza 
          pizza={pizza}
          />
      </Col>)
})
  return (
    <>
      <Header  />
      <div className='fondo bg-success-subtle'>
      <div className='container'>
      <Login/>
      <Container >
        <Row className="g-4" xs={1} md={2} lg={4}>        
               {mapeoPizzas}            
        </Row>
       </Container>
      </div>
      </div>
   </>
  )
}
export default Home