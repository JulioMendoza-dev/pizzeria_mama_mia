import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav className=''>
      <ul>
        <li><Link to="/">Home</Link></li>
        {token ? (
          <>
            <li><Link to="/profile">Perfil</Link></li>
            <li onClick={logout}>Cerrar Sesion</li>
          </>
        ) : (
          <>
            <li><Link to="/login">Iniciar Sesion</Link></li>
            <li><Link to="/register">Registrate</Link></li>
          </>
        )}
        <li>Total</li>
      </ul>
    </nav>
  );
};

export default Navbar;
