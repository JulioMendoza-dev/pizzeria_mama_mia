import React from 'react'

function Navbar() {
  const total = 25000;
  const token = false;
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-secondary m-left-3">
  <div className="container-fluid ">
    <a className="navbar-brand text-white" href="#"><h4>Maaama - mia !</h4></a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse rounded-pill" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white active border border-white" aria-current="page" href="#"><img src="/trozo-pizza.webp"  
          width="25" height="20"/> Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white border border-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" 
          width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
          </svg> Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white border border-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
          </svg> Register</a>
        </li>
        </ul>
        <label htmlFor="" className=''>total= ${total}</label>
        <button class="btn btn-outline-warning m-5 position-absolute bottom-2 end-0" type="button"><h5> terminar compra</h5></button>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar