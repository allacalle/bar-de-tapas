import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home/>
              </>
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;














/* import CardsInicio from './components/cardsInicio';
import Footer from './components/Footer';
import MenuDestacado from './components/MenuDestacado';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MenuDestacado />
      <CardsInicio />
      <Footer />
    </div>
  );
}

export default App;
 */