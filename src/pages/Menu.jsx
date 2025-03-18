// src/pages/Menu.jsx
import React from 'react';
import TapaBook from '../components/TapaBook';
import tapasData from '../data/tapas.json'; // Verifica la ruta
import '../css/menu.css';

const Menu = () => {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Nuestro Menú de Tapas</h1>
      <TapaBook tapas={tapasData} itemsPerPage={6} />
    </div>
  );
};

export default Menu;