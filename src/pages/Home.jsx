// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import '../css/home.css';
import imageHero from '/assets/images/imageHero.png';
import MenuDestacado from '../components/MenuDestacadoComponent'; // Importa MenuDestacado
import CardsInicio from '../components/CardsInicioComponent';
import TestimonialCards from '../components/TestimonialCardsComponent'; // Importa TestimonialCards
import testimonialsData from '../data/testimonials.json'; // Importa los datos de testimonios


const Home = () => {
  return (
    <div className="home">
      {/* Sección Hero */}
      <section className="hero">
        <img
          src= {imageHero}
          alt="Ambiente del bar La Tapa Mix"
          className="hero-image"
        />
        <div className="hero-content">
          <h2>Bienvenidos a La Tapa Mix</h2>
          <p>
            Disfruta de una auténtica experiencia andaluza: tapas deliciosas,
            cerveza fresca y el mejor ambiente de Córdoba.
          </p>
          <Link to="/menu" className="hero-button"> Descubre nuestras tapa</Link>

        </div>
      </section>

      {/* Puedes agregar más secciones aquí, por ejemplo, sobre el bar, menú destacado, etc. */}
      <section className="about">
        <h3>Un lugar para compartir</h3>
        <p>
          En La Tapa Mix celebramos la alegría, la amistad y la tradición. Ven
          a disfrutar de un ambiente festivo, lleno de sabor y buena compañía.
        </p>
      </section>

     {/* Nuevas secciones */}
     <section className="menu-destacado-section">
        <MenuDestacado />
      </section>

      <section className="cards-inicio-section">
        <CardsInicio />
      </section>

      <section className="testimonials-section">
        <TestimonialCards testimonials={testimonialsData} />
      </section>


    </div>
  );
};

export default Home;
