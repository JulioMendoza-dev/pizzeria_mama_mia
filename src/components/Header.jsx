function Header() {
  return (
    <>
      <div
        className="titulo-comentario text-center"
        style={{
          height: "200px",
          backgroundImage: `url(/pizza-header-2.jpg)`,
          backgroundSize: "cover",
          color: "white",
          width:"100wh"
          
        }}
      >
        <h1 style={{ 
          fontSize: "3em", 
          paddingTop: "50px",
          }}>
          ___Pizzeria Mamma Mia___
        </h1>

        <p style={{ 
          fontSize: "1em", 
          margin:"10px" 
          }}>
          ¡Tenemos las mejores pizzas que puedes encontrar!
        </p>
      </div>
    </>
  );
}

export default Header;
