import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import TapaCard from './TapaCardComponent'; // Importa el componente TapaCard
import '../css/tapaBook.css'; // Importa los estilos

const TapaBook = ({ tapas, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Asegurar que tapas sea un array (evitar errores)
  const safeTapas = Array.isArray(tapas) ? tapas : [];
  const totalPages = Math.ceil(safeTapas.length / itemsPerPage);

  const paginatedTapas = safeTapas.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="tapa-book">
      <div className="tapa-grid">
        {paginatedTapas.map((tapa) => (
          <TapaCard key={tapa.id} tapa={tapa} />
        ))}
      </div>
      <div className="pagination-controls">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <span>Página {currentPage + 1} de {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

// Validación de props
TapaBook.propTypes = {
  tapas: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsPerPage: PropTypes.number,
};

// Valores por defecto (evita errores si no se pasa itemsPerPage)
TapaBook.defaultProps = {
  itemsPerPage: 4, // Fijamos siempre 4 elementos (2x2)
};

export default TapaBook;