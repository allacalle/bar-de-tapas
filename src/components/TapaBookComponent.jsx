import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TapaCard from './TapaCardComponent';
import '../css/tapaBook.css';

const TapaBook = ({ tapas, itemsPerPage }) => {
  // Estado inicial basado en sessionStorage
  const initialState = () => {
    const savedData = sessionStorage.getItem('tapaBookState');
    if (savedData) {
      const { page } = JSON.parse(savedData);
      return page;
    }
    return 0; // Valor por defecto si no hay datos guardados
  };

  const [currentPage, setCurrentPage] = useState(initialState());

  // Guardar el estado en sessionStorage
  useEffect(() => {
    const saveState = () => {
      sessionStorage.setItem('tapaBookState', JSON.stringify({
        page: currentPage,
        scroll: window.pageYOffset
      }));
    };

    saveState();
    window.addEventListener('beforeunload', saveState);

    return () => {
      window.removeEventListener('beforeunload', saveState);
      saveState();
    };
  }, [currentPage]);

  // Restaurar el scroll
  useEffect(() => {
    const savedData = sessionStorage.getItem('tapaBookState');
    if (savedData) {
      const { scroll } = JSON.parse(savedData);
      window.scrollTo({ top: scroll, behavior: 'auto' });
    }
  }, []);

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
          <Link
            key={tapa.id}
            to={`/tapa/${tapa.id}`}
            className="tarjeta-link"
          >
            <TapaCard key={tapa.id} tapa={tapa} />
          </Link>
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

TapaBook.propTypes = {
  tapas: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsPerPage: PropTypes.number,
};

TapaBook.defaultProps = {
  itemsPerPage: 4,
};

export default TapaBook;