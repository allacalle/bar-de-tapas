import React from 'react';
import '../css/navbar.css'; // Archivo de estilos para el Footer
import logo from '/assets/images/logo.png'


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-text">La Tapa <span>Mix</span></div>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><Link to="/" >Inicio  </Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/about">Sobre nosotros</Link></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
