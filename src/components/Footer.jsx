import React from 'react';
import '../css/footer.css'; // Archivo de estilos para el Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Dirección: Calle Falsa 123, Córdoba</p>
          <p>Teléfono: +34 123 456 789</p>
          <p>Email: info@latapamix.com</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#about">Sobre nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} La Tapa Mix. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;