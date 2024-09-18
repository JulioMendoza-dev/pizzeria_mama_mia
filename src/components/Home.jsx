import React from 'react'
import Header from "./Header"
import CardPizza from "./CardPizza"

function Home() {

  return (
    <>
    <Header  />
    <div className='fondo bg-success-subtle'>
    <div className='container '>
      <div className="row row-cols-3 g-4 ">
        <div className='col'>
          <CardPizza 
          imagen="pizza-hawaii.jpg  "
          name="Hawaiiana "
          ingredients={["mozzarella ", "tomates ", "jamón ", "orégano"]}
          price="17.000"/>       
        </div>
        <div className='col'>
          <CardPizza 
          imagen="margarita.png"
          name="Margarita "
          ingredients={["mozzarella ", "tomates ", "jamón ", "orégano"]}
          price="18.000"/>       
        </div>
        <div className='col'>
          <CardPizza 
          imagen="napolitana.jpg"
          name="napolitana"
          ingredients={["mozzarella ", "tomates ", "jamón ", "orégano"]}
          price="17.500"/>       
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home