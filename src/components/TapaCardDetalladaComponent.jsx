import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tapasData from '../data/platos.json';
import '../css/tapaCardDetallada.css';
import PropTypes from 'prop-types';

const TapaCardDetallada = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tapa = tapasData.find(t => t.id === parseInt(id));

  const handleVolver = () => {
    navigate(-1); // Regresa a la página anterior
  };

  if (!tapa) return <div>Plato no encontrado</div>;

  return (
    <section className="detalle-container">
      <button
        className="boton-volver"
        onClick={handleVolver}
        aria-label="Volver al listado de tapas"
      >
        ← Volver al Menú
      </button>
      <div className="detalle-imagen">
        <img
          src={tapa.imagen}
          alt={`Detalle de ${tapa.nombre}`}
          className="detalle-foto"
        />
      </div>

      <div className="detalle-contenido">
        <h2 className="detalle-nombre">{tapa.nombre}</h2>
        <div className="detalle-precio">€{tapa.precio.toFixed(2)}</div>

        <div className="detalle-seccion">
          <h3>Descripción</h3>
          <p className="detalle-descripcion">{tapa.descripcion}</p>
        </div>

        <div className="detalle-seccion">
          <h3>Alergenos</h3>
          {tapa.alergenos.length > 0 ? (
            <ul className="detalle-alergenos">
              {tapa.alergenos.map((alergeno, index) => (
                <li key={index}>{alergeno}</li>
              ))}
            </ul>
          ) : (
            <p className="detalle-sin-alergenos">No contiene alérgenos comunes</p>
          )}
        </div>
      </div>
    </section>
  );
};

TapaCardDetallada.propTypes = {
  tapa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    alergenos: PropTypes.arrayOf(PropTypes.string).isRequired,
    categoria: PropTypes.string.isRequired,
  }).isRequired,
};

export default TapaCardDetallada;