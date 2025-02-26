import "../css/menuDestacado.css"; // Estilo para las tarjetas
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import croquetas from '../assets/images/croquetas.png';
import tortilla from '../assets/images/tortilla.png';
import salmorejo from '../assets/images/salmorejo.png';
import flamenquin from '../assets/images/flamenquin.png';
import berenjenasConMiel from '../assets/images/berenjenasConMiel.png';
import miniBrochetaRaboDeToro from '../assets/images/miniBrochetaRaboDeToro.png';


const MenuDestacado = () => {
  
    const platos = [
        {
          id: 1,
          nombre: "Croquetas Ibéricas",
          imagen: croquetas,
          descripcion: "Explosion de jamon en tu boca",
        },
        {
          id: 2,
          nombre: "Tortilla de Patatas",
          imagen: tortilla,
          descripcion: "Clásico español con o sin cebolla",
        },
        {
          id: 3,
          nombre: "Salmorejo",
          imagen: salmorejo,
          descripcion: "La crema de tomate por excelencia",
        },
        // Puedes añadir más platos aquí

        {
            id:4,
            nombre: "Flamenquin",
            imagen: flamenquin,
            descripcion: "La mejor carne con el mejor jamon",
        },
        {
            id: 5,
            nombre: "Berenjenas con Miel",
            imagen: berenjenasConMiel,  // Aquí puedes poner la ruta de la imagen
            descripcion: "El contraste perfecto entre lo dulce y lo salado en cada bocado",
          },
          {
            id: 6,
            nombre: "Mini Brochetas de Rabo de Toro",
            imagen: miniBrochetaRaboDeToro,  // Aquí puedes poner la ruta de la imagen
            descripcion: "Mini brochetas de rabo de toro con salsa, ¡toda la esencia de Córdoba en tu paladar!",
          }


      ];

      const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Permite un desplazamiento infinito
        speed: 500, // Velocidad de la transición en milisegundos
        slidesToShow: 3, // Número de slides visibles al mismo tiempo
        slidesToScroll: 1, // Número de slides que se desplazan al avanzar
        autoplay: true, // Reproduce el carrusel automáticamente
        autoplaySpeed: 3000, // Velocidad del autoplay en milisegundos
        responsive: [ // Configuración responsive
          {
            breakpoint: 768, // Para pantallas menores a 768px
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480, // Para pantallas menores a 480px
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
            {platos.map((plato) => (
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