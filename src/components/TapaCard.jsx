import React from 'react';
import PropTypes from 'prop-types';
import '../css/tapaCard.css'; // Importa los estilos

const TapaCard = ({ tapa, onClick }) => {
  return (
    <div className="tapa-card" onClick={() => onClick && onClick(tapa)}>
      <img 
        src={tapa.image} 
        alt={`Imagen de ${tapa.name}`} 
        className="tapa-image"
      />
      <div className="tapa-info">
        <h3 className="tapa-name">{tapa.name}</h3>
        <p className="tapa-description">{tapa.description}</p>
      </div>
    </div>
  );
};

// Validación de props (opcional pero recomendado)
TapaCard.propTypes = {
  tapa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.array,
    preparation: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func, // Función para abrir el modal (opcional)
};

export default TapaCard;