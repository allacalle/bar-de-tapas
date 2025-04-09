// src/pages/Contacto.jsx
import React from 'react';
import FormularioContacto from '../components/FormularioContactoComponent';
import '../css/contacto.css'; // Estilos específicos de la página

const Contacto = () => {
  return (
    <div className="contacto-page">
      <h1>Contacta con La Tapa Mix</h1>
      <p>¿Tienes alguna pregunta o sugerencia? ¡Escríbenos!</p>
      
      <div className="contact-info">
        <p>📞 Teléfono: +34 123 456 789</p>
        <p>📍 Dirección: Calle Falsa 123, Córdoba</p>
        <p>📧 Email: info@latapamix.com</p>
      </div>

      <FormularioContacto />
    </div>
  );
};

export default Contacto;