import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import Product from './components/product'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cata from './components/cata';
import Form from './components/ReservationForm'
import Home from './components/Home';
import Header from './components/sections/header';

function App() {
  return (
    <Router>
      <div className="Home-Section">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/product/:id" element={<Product type="T-shirt" />} />
            <Route path="/catalog" element={<Cata />} />
            <Route path="/header" element={<Header />} />
            <Route path="/Form" element={<Form />} />
            
            
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
