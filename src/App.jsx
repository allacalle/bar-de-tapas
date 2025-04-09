import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './components/NavbarComponent';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/FooterComponent';
import Menu from './pages/Menu';
import TapaCardDetallada from './components/TapaCardDetalladaComponent';
import Contacto from './pages/Contacto';

// Componente ScrollToTop (ahora recibe estado y función para actualizar)
const ScrollToTop = ({ shouldScroll, resetScroll }) => {
  const location = useLocation();

  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo(0, 0);
      sessionStorage.removeItem('tapaBookState');
      resetScroll(); // Reinicia el estado después de scrollear
    }
  }, [location.pathname, shouldScroll, resetScroll]);

  return null;
};

function App() {
  const [shouldScroll, setShouldScroll] = useState(false);

  // Detecta clicks en enlaces de forma global
  useEffect(() => {
    const handleClick = (e) => {
      let target = e.target;
      // Busca el elemento <a> más cercano
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      // Verifica si es un enlace interno
      if (target?.tagName === 'A' && target.href.includes(window.location.origin)) {
        setShouldScroll(true);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Componente ScrollToTop con estado y función para reiniciar */}
        <ScrollToTop shouldScroll={shouldScroll} resetScroll={() => setShouldScroll(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/tapa/:id" element={<TapaCardDetallada />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Ruta no encontrada */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Validación de props
ScrollToTop.propTypes = {
  shouldScroll: PropTypes.bool.isRequired,
  resetScroll: PropTypes.func.isRequired,
};

export default App;






