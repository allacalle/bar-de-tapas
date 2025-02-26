import '../css/navbar.css'; // Archivo de estilos para el Footer

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">La Tapa Mix</div>
      <ul className="nav-links">
        <li><Link to ="/">Inicio</Link></li>
        <li><a href="#menu">Menú</a></li>
        <li><Link to="/about">Sobre nosotros</Link></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;