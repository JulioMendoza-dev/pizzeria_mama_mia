import React from 'react'
import Header from "./Header"
import CardPizza from "./CardPizza"
import Row from './Row'
import Login from './Login'

function Home() {
  return (
    <>
      <Header  />
      <div className='fondo bg-success-subtle'>
      <div className='container'>
      <Login/>
      <Row>  
          <CardPizza 
            imagen="pizza-hawaii.jpg  "
            name="Hawaiiana "
            ingredients={["mozzarella ", "tomates ", "jamón ", "piña"]}
            price="17.000"/>       
          <CardPizza 
            imagen="margarita.png"
            name="Margarita "
            ingredients={["mozzarella ", "tomates cherry ", "albahaca "]}
            price="18.000"/>       
          <CardPizza 
            imagen="napolitana.jpg"
            name="napolitana"
            ingredients={["mozzarella ", "tomates ", "jamón ", "aceituna"]}
            price="17.500"/>       
      </Row>
    </div>
    </div>
   </>
  )
}
export default Home