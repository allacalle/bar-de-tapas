// src/components/TapaCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../css/tapaCard.css';

const TapaCard = ({ tapa, onClick }) => {
  return (
    <div 
      className="tapa-card" 
      onClick={() => onClick?.(tapa)}
      tabIndex="0" // Para navegación con teclado
      role="button" // Accesibilidad
    >
      {/* Imagen con efecto vintage */}
      <div className="tapa-image-container">
        <img 
          src={tapa.imagen} 
          alt={`Receta: ${tapa.nombre}`} 
          className="tapa-image"
        />
      </div>
      
      {/* Información de la receta */}
      <div className="tapa-info">
        <h3 className="tapa-name">{tapa.nombre}</h3>
        <p className="tapa-description">{tapa.descripcion}</p>
      </div>
    </div>
  );
};

// Validación de props (mantén solo lo que usas)
TapaCard.propTypes = {
  tapa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func, // Mantén esto si usas el click
};

export default TapaCard;