import CardsInicio from './components/cardsInicio';
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
