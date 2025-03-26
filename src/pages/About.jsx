import React from 'react';
import TestimonialCards from '../components/TestimonialCardsComponent'; // Importa el componente
import '../css/about.css'; // Estilo para la página de About
import testimonialsData from '../data/testimonials.json'; // Importa los datos de los testimonios
const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">Sobre Nosotros</h1>
        <p className="about-description">
          Somos un bar de tapas tradicional en el corazón de Córdoba, dedicados a ofrecer auténticos sabores andaluces desde 1995.
        </p>

        {/* Sección de historia */}
        <div className="about-section">
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="section-text">
            Fundado por la familia García, La Tapa Mix nació como un pequeño local familiar y hoy es un referente de la gastronomía cordobesa.
          </p>
        </div>

        {/* Sección del equipo */}
        <div className="about-section">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-text">
            Chefs con más de 20 años de experiencia y un equipo apasionado por la cocina tradicional.
          </p>
        </div>

        
      </div>
      {/* Sección de testimonios */}
      <TestimonialCards testimonials={testimonialsData} /> {/* Usamos el componente */}
    </div>
  );
};

export default About;