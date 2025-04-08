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
        <li><Link to="/" state={{ reset: true }}>Inicio  </Link></li>
        <li><Link to="/menu" state={{ reset: true }}>Menú</Link></li>
        <li><Link to="/about"state={{ reset: true }}>Sobre nosotros</Link></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
