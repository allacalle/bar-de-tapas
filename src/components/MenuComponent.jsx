// src/pages/Menu.jsx
import React from 'react';
import TapaBook from './TapaBookComponent';
import tapasData from '../data/platos.json';
import '../css/menu.css'; // Estilos específicos para la página del menú

const Menu = () => {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Nuestro Menú de Tapas</h1>
      <TapaBook tapas={tapasData} itemsPerPage={4} />
    </div>
  );
};

export default Menu;