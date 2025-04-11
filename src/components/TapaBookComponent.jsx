import {  useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive'; // Para detección responsive
import TapaCard from './TapaCardComponent';
import '../css/tapaBook.css';

const TapaBook = ({ tapas, itemsPerPage }) => {
  const navigate = useNavigate();
  // Detección para móvil
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // Nueva detección para tamaño intermedio (tablet)
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  // Items por página dinámicos
  const dynamicItemsPerPage = isMobile ? 1 : isTablet ? 2 : itemsPerPage;
  const safeTapas = Array.isArray(tapas) ? tapas : [];
  const totalPages = Math.ceil(safeTapas.length / dynamicItemsPerPage);

  const getInitialPage = () => {
    try {
      const savedData = sessionStorage.getItem('tapaBookState');
      if (savedData) {
        return JSON.parse(savedData).page || 0;
      }
      const lastVisitedTapaId = sessionStorage.getItem('lastVisitedTapaId');
      if (lastVisitedTapaId) {
        const index = safeTapas.findIndex(tapa => tapa.id === parseInt(lastVisitedTapaId));
        if (index !== -1) {
          return Math.floor(index / dynamicItemsPerPage);
        }
      }
      return 0;
    } catch (error) {
      console.error('Error loading state:', error);
      return 0;
    }
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const newDynamicItemsPerPage = isMobile ? 1 : isTablet ? 2 : itemsPerPage;
    const newTotalPages = Math.ceil(safeTapas.length / newDynamicItemsPerPage);
    if (currentPage >= newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages - 1);
    }
  }, [isMobile, isTablet, safeTapas.length, currentPage, itemsPerPage]);

  useEffect(() => {
    const saveState = () => {
      sessionStorage.setItem('tapaBookState', JSON.stringify({
        page: currentPage,
        scroll: window.pageYOffset
      }));
    };

    window.addEventListener('beforeunload', saveState);
    return () => window.removeEventListener('beforeunload', saveState);
  }, [currentPage]);

  useEffect(() => {
    const savedScroll = sessionStorage.getItem('tapaBookState')?.scroll;
    if (savedScroll) {
      window.scrollTo({ top: parseInt(savedScroll), behavior: 'auto' });
      sessionStorage.removeItem('tapaBookState');
    }
    sessionStorage.removeItem('lastVisitedTapaId');
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTapaClick = (tapaId) => {
    sessionStorage.setItem('lastVisitedTapaId', tapaId);
    sessionStorage.setItem('tapaBookState', JSON.stringify({ page: currentPage, scroll: window.pageYOffset }));
    navigate(`/tapa/${tapaId}`);
  };

  const paginatedTapas = safeTapas.slice(
    currentPage * dynamicItemsPerPage,
    (currentPage + 1) * dynamicItemsPerPage
  );

  return (
    <div className="tapa-book">
      <div className="tapa-grid">
        {paginatedTapas.map((tapa) => (
          <div key={tapa.id} className="tarjeta-link" onClick={() => handleTapaClick(tapa.id)} style={{ cursor: 'pointer' }}>
            <TapaCard tapa={tapa} />
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
          aria-label="Página anterior"
          className="pagination-button"
        >
          {isMobile ? '⟨' : 'Anterior'}
        </button>

        <div className="page-indicator">
          {Array.from({ length: totalPages }).map((_, index) => {
            const firstTapaOfPage = safeTapas[index * dynamicItemsPerPage];
            return (
              firstTapaOfPage && firstTapaOfPage.imagen && (
                <button
                  key={index}
                  className={`page-thumbnail-button ${index === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(index)}
                  aria-label={`Ir a página ${index + 1}`}
                  aria-current={index === currentPage ? 'page' : undefined}
                >
                  <img
                    src={firstTapaOfPage.imagen}
                    alt={firstTapaOfPage.nombre}
                    className="page-thumbnail"
                  />
                </button>
              )
            );
          })}
        </div>

        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
          aria-label="Página siguiente"
          className="pagination-button"
        >
          {isMobile ? '⟩' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

TapaBook.propTypes = {
  tapas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nombre: PropTypes.string.isRequired,
      imagen: PropTypes.string,
    })
  ).isRequired,
  itemsPerPage: PropTypes.number,
};

TapaBook.defaultProps = {
  itemsPerPage: 4,
};

export default TapaBook;