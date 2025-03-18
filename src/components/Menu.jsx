// src/pages/Menu.jsx
import React from 'react';
import TapaBook from '../components/TapaBook';
import tapasData from '../data/tapas.json';
import '../css/menu.css'; // Estilos específicos para la página del menú

const Menu = () => {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Nuestro Menú de Tapas</h1>
      <TapaBook tapas={tapasData} itemsPerPage={6} />
    </div>
  );
};

export default Menu;