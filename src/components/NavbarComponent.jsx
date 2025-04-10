import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '/assets/images/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-text">La Tapa <span>Mix</span></div>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio  </Link></li>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menú</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>Sobre nosotros</Link></li>
        <li><a href="/contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;