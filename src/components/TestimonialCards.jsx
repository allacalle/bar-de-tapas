import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes
import '../css/testimonialCards.css'; // Importamos los estilos


const TestimonialCards = ({ testimonials }) => {
  return (
    <div className="about-section">
      {/* Título de la sección */}
      <h2 className="section-title">Lo que dicen nuestros clientes</h2>

      {/* Contenedor de las tarjetas */}
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={`${testimonial.author}`} className="testimonial-image" />
            <p className='testimonial-text'>&quot;{testimonial.text}&quot;</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Validación de props
TestimonialCards.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestimonialCards;