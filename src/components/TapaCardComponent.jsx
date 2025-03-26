// src/components/TapaCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../css/tapaCard.css';

const TapaCard = ({ tapa, onClick }) => {
  return (
    <div className="tapa-card" onClick={() => onClick?.(tapa)}>
      <img 
        src={tapa.imagen} 
        alt={`Imagen de ${tapa.nombre}`} 
        className="tapa-image"
      />
      <div className="tapa-info">
        <h3 className="tapa-name">{tapa.nombre}</h3> 
        <p className="tapa-description">{tapa.descripcion}</p> 
      </div>
    </div>
  );
};

// Validación de props
TapaCard.propTypes = {
  tapa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired, // ✔️ Cambiamos "name" por "nombre"
    descripcion: PropTypes.string.isRequired, // ✔️ Cambiamos "description" por "descripcion"
    imagen: PropTypes.string.isRequired, // ✔️ Cambiamos "image" por "imagen"
    categoria: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func, // Función opcional
};

export default TapaCard;