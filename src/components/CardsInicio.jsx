import "../css/cardsInicio.css"; // Estilo para las tarjetas

const CardsInicio = () => {
  const cards = [
    {
      title: "El Ambiente",
      description: "Disfruta de un ambiente único, rodeado del encanto de un bar tradicional con un toque moderno.",
      image: "ambiente.jpg", // Sustituye por la ruta correcta de la imagen
    },
    {
      title: "Nuestra Comida",
      description: "Saborea nuestros platos mediterráneos con ingredientes frescos y recetas tradicionales.",
      image: "comida.jpg", // Sustituye por la ruta correcta de la imagen
    },
    {
      title: "Córdoba",
      description: "Ubicado en pleno casco antiguo, descubre la belleza de Córdoba mientras disfrutas de nuestra oferta gastronómica.",
      image: "cordoba.jpg", // Sustituye por la ruta correcta de la imagen
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className={`card ${index % 2 === 0 ? "left" : "right"}`} key={index}>
          <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}></div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsInicio;
