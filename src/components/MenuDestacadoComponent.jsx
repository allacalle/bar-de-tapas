// src/components/MenuDestacado.jsx
import React from "react";
import "../css/menuDestacado.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tapasData from '../data/tapas.json'; // Importa el JSON

const MenuDestacado = () => {
  // Configuración del carrusel (mantén la misma)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="menu-destacado">
      <h2>Nuestros Platos Estrella</h2>
      <Slider {...settings}>
        {tapasData.map((plato) => (
          <div key={plato.id} className="plato-container">
            <img src={plato.imagen} alt={plato.nombre} />
            <div className="plato-info">
              <h3>{plato.nombre}</h3>
              <p>{plato.descripcion}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MenuDestacado;